import type { V, Eval } from "./mod.ts"

type t1 = Eval<V<[1, 2], 3>, [V<[1], 1>, V<[2, 3], 2>]> // ( (1, 2) => 3 )( (1 => 1), ((2, 3) => 2) ) == (1, 2, 3) => 3

type check1 = V<[1, 2, 3], 3>   extends t1 ? true : false // true

type check2 = V<[1, 3, 3], 3>   extends t1 ? true : false // false
type check3 = V<[1, 2], 3>      extends t1 ? true : false // false
type check4 = V<[1, 2, 3], 4>   extends t1 ? true : false // false