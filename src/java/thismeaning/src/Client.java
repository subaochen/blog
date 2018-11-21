public class Client {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.printx();

        outer.x = 3;
        inner.printx();
    }
}
