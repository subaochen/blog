public class ClassInitTest {
    public static void main(String[] args) {
        System.out.println(SubClass.B);
    }
}

class SuperClass {
    public static int A = 1;

    static {
        A = 2;
    }
}

class SubClass extends SuperClass {
    public static int B = A;
}
