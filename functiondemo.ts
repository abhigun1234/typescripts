
//function defination
// function addnumbers( i:number,j:number)
// {
//  return i+j
// }

// var result=addnumbers(10,20)
// alert(result)
function disp_details(id:number,name:string,mail_id?:string) {
    console.log("ID:", id); console.log("Name",name); 
if(mail_id!=undefined) 
   console.log("Email Id",mail_id); } 
disp_details(123,"Abhishek"); 
disp_details(111,"ram","abhi@gmail.com");