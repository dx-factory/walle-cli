export default class Factory {
    protected static resolve<C extends object>(obj: C | undefined, factory: () => C): C;
}
