import java.io.Serializable;

/**
 * Created by subaochen on 17-3-23.
 */
public class MyMath {
	public static String add(int x, int y) {
		return String.valueOf(x + y);
	}

	public static String add(int x, long y) {
		return String.valueOf(x + y);
	}

	public static String add(long x, long y) {
		System.out.println("add long");
		return String.valueOf(x + y);
	}

	public static String add(Number x, Number y) {
		System.out.println("add Number");
		return String.valueOf(x.intValue() + y.intValue());
	}

	public static String add(Serializable x, Serializable y) {
		return x.toString() + y.toString();
	}

	public static void main(String[] args) {
		int x = 1;
		int y = 2;
		System.out.println(add(x,y));
	}
}
