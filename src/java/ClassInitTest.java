public class ClassInitTest {
    public static void main(String[] args) {
        System.out.println(SubClass.VERSION);
    }
}

class SuperClass {
    public static int VER = 1;

    static {
        VER = 2;
    }
}

class SubClass extends SuperClass {
   public static int VERSION = VER;
}
