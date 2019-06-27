interface ICard
{
    mastercard: ()=>string 

}
class Hdfc implements ICard
{

    mastercard()
    {   //
        alert('hdfc master card')
        console.log('master card of hdfc')

        return ''
    }

}
class IciciBank implements ICard
{
  public  mastercard()
  {   alert('Icici master card')
      return ''
  }
  h1=new Hdfc()
}
let h1=new Hdfc()
h1.mastercard()
let i1=new IciciBank()
i1.mastercard()
