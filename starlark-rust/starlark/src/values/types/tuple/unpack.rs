/*
 * Copyright 2018 The Starlark in Rust Authors.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

use crate::typing::Ty;
use crate::values::tuple::TupleRef;
use crate::values::type_repr::StarlarkTypeRepr;
use crate::values::UnpackValue;
use crate::values::Value;

/// Unpack a value of type `tuple[T, ...]` into a vec.
#[derive(Default, Debug, Clone, Eq, PartialEq, Hash, Ord, PartialOrd)]
pub struct UnpackTuple<T> {
    /// Unpacked items.
    pub items: Vec<T>,
}

impl<T: StarlarkTypeRepr> StarlarkTypeRepr for UnpackTuple<T> {
    fn starlark_type_repr() -> Ty {
        Ty::tuple_of(T::starlark_type_repr())
    }
}

impl<'v, T: UnpackValue<'v>> UnpackValue<'v> for UnpackTuple<T> {
    fn unpack_value(value: Value<'v>) -> Option<Self> {
        let tuple = TupleRef::from_value(value)?;
        let mut items = Vec::with_capacity(tuple.len());
        for v in tuple.iter() {
            items.push(T::unpack_value(v)?);
        }
        Some(UnpackTuple { items })
    }
}

#[cfg(test)]
mod tests {
    use crate::values::tuple::unpack::UnpackTuple;
    use crate::values::Heap;
    use crate::values::UnpackValue;

    #[test]
    fn test_unpack() {
        let heap = Heap::new();
        let v = heap.alloc(("a", "b"));
        assert_eq!(
            vec!["a", "b"],
            UnpackTuple::<&str>::unpack_value(v).unwrap().items
        );
        assert!(UnpackTuple::<u32>::unpack_value(v).is_none());
        assert!(UnpackTuple::<&str>::unpack_value(heap.alloc(1)).is_none());
    }
}