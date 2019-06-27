class Person
{
    public p_id:string;
    public p_name:string;
    constructor(person_id:string,person_name:string)
    {
        this.p_id=person_id
        this.p_name=person_name
        alert(this.p_id)
        alert(this.p_name)
    }

    public getName()
    {

     return this.p_name
    }
    public setName(name:string)
    {
     this.p_name=name
    }
    public  display()
    {

        console.log("hello person")
        alert('hello')
    }   
 
}
let p=new Person("123","abhishek")
// p.display()
// p.setName("abhishek")
// var pname=p.getName()
// alert(pname)
