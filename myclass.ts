
//object and class
class person
{
    //attribute 
    //behiviour
    name:string;
    address:string;
    constructor()
    {
        //alert('constructor called')
        this.name = 'abhishek'
        this.address='pune'
    }
    //getName
    getName()
    {
     return this.name
    }
    setName(_name:string)
    {
     this.name=_name
    }
}
let p1=new person()
 p1.setName('raj')
 var mname=p1.getName()
 console.log(mname)
let p2=new person()
p2.setName('ram')
var myname=p2.getName()
console.log(myname)



