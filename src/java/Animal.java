/**
 * Created by subaochen on 17-3-22.
 */
public class Animal {

	static class Dog extends Animal {
		@Override
		protected void hello() {
			System.out.println("hello from dog");
		}
	}

	static class Cat extends Animal {
		@Override
		protected void hello() {
			System.out.println("hello from cat");
		}
	}

	protected void hello() {
		System.out.println("hello from Animal");
	}

	public static void main(String[] args) {
		Animal dog = new Dog();
		Animal cat = new Cat();
		dog.hello();
		cat.hello();
	}


}
