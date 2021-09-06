import type { V, Eval } from "./mod.ts"

var b = 0 as unknown as V<[i1:1, i2:2, i3: 3], 3>
var a: Eval<V<[a:1, b:2], 3>, [V<[i1:1], 1>, V<[i1:2, i2:3], 2>]> = b