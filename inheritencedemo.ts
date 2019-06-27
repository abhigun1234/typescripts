class Animal
{


    display()
    {
      alert("animal")
    }

}
class Dog extends Animal
{

    bark()
    {
    alert("dog barking")
    }

}
let d1=new Dog()
d1.display()
d1.bark()