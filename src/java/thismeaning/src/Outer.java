public class Outer {
    int x = 1;

    class Inner {
        int x = 2;

        void printx(){
            System.out.println("outer.x = " + Outer.this.x);
            System.out.println("inner.x = " + x);
        }
    }
}
