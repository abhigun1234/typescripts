interface IAnimal
{
// declaring 
    walk: ()=>string 
    
}
class Tiger implements IAnimal
{
    walk()
    {
      console.log('tiger is walking')  
      return "tiger  
    }
}