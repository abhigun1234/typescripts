class car
{
  constructor()
  {
     alert('car constructor') 
  }
    run()
{
    alert('car running')
}
}
class audi extends car{

    constructor()
    {
        super()

    }
}

let au =new audi()
au.run()