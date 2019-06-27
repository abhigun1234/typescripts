class A
{

    constructor()
    {

        alert('class A ')
    }
    mymethod()
    {
        alert('mymethod')
    }
}
class B extends A
{
constructor()
{
    super()
}

}
class C extends B{
 constructor()
 {
     super()
 }

}
let c=new C()
c.mymethod()