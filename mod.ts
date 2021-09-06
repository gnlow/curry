type Flat<T extends any[][]> =
    T extends [infer F, ...infer R]
        ? F extends any[]
            ? R extends any[][]
                ? [...F, ...Flat<R>]
                : never
            : never
        : []

export type V<I extends any[], O> = [I, O] // Customize it!

type Iv<T> = T extends V<infer I, any> ? I : never
type Ov<T> = T extends V<any, infer O> ? O : never

type Ivs<T extends V<any[], any>[]> = {
    [K in keyof T]: Iv<T[K]>
}
type Ovs<T extends V<any[], any>[]> = {
    [K in keyof T]: Ov<T[K]>
}
type I2O<T extends any[]> = {
    [K in keyof T]: V<any, T[K]>
}

type Assert<T, Target> = T extends Target ? T : never

export type Eval<
    F extends V<any[], any>,
    Give extends I2O<Iv<F>>
> = V<
    Flat<
        Assert<Ivs<
            Assert<Give, V<any[], any>[]>
        >, any[][]>
    >,
    F extends V<any[], infer O> ? O : never
>