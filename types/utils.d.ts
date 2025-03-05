declare type UnwrapReadOnlyArray<A> = A extends Readonly<Array<infer I>> ? I : A
