function fun()
{
     var x = document.forms["form"]["search"].value;
console.log(100);
// document.getElementById("sol").red
 x=x.toLowerCase();
 if(x!= ""){
//  if(x=="programming languages" || x=="programminglanguages")
//  x="/programmingLanguages";
//  else{
//  if( x=="web development" || x=="webdevelopment")
//  x="/webDevelopment";
//  else if(x=="cloud")
//  x="/cloud";
//  }
 x+=".html";
    
     document.forms["form"].action=x;
 }
 
}