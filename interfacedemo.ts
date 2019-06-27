interface Card
{
//public void  payment();
  payment: ()=>string 
}
 


class Icici implements Card
{


payment()
{

    alert('Icici master card')
return "Icici master card"
} 

}
// class Hdfc implements Card
// {

//     payment()
//     {
//         alert("hdfc master card")
//     }
   
// }

let I1=new Icici()
I1.payment()
