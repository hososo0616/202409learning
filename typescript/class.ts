class Person {
  name: string;
  private age: number;

  //初期化処理　オブジェクトを作るときの最初の処理
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age++;
  }

  greeting(this: Person) {
    console.log(`hello! my name is ${this.name}. i'm ${this.age} years`)
  }
}

const quill = new Person('quill', 35);