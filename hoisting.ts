//hoisting
function greetPerson(name:string)
{   
    if(name=='abhishek')
        {
             greet="hello Abhishek"
        }
        else{
         greet="Hi there"
        }
        console.log(greet)
        var greet;
}
greetPerson("ravi")