              //<<<<<<<<<<<  What is object ? >>>>>>>>>>>>>>

// In typescript objects are used to represent data with key - value pairs .
   //Each key in the subject is string (or a symbol)

   //let consider a product detail using a typescript objects
          //? => name ,price , quantity

            // ------object => {}=> {key : value} pair ----------
//for example object
let product : {
    name :String
    price : number
    quantity : number
    isavailable : boolean
} = {
    name : "Stawberryjam",
    price :680,
    quantity : 20,
    isavailable : true
}

console.log(product);
console.log(product.name);
 console.log(product.price);
 console.log(product.isavailable);


     
             //  Some example of nested object  
 // ------Nested object means --------
                              //object that contain another object inside them are called nested object
 let productdetail = {
    name : "ahmed jam",
    price : 680,
    quantity :  20,
    isavailable : true,
    highlights :{
        brand : "ahmed foods",
        weight : 180,
    }
 }
 console.log(productdetail.name);
 console.log(productdetail.price);
 console.log(productdetail.quantity);
 console.log(productdetail.isavailable);
 console.log(productdetail.highlights);

 //ARRAY OF OBJECT => {[]}
 let Applejam = {
    colour : "Red",
    brand : "National",
    ingredient : ["apple" , "Cinnamon" , "lemonjuice" , "sugar" , "water"]


 }
 
 console.log(Applejam);
 console.log(Applejam .ingredient[2])


    
 

 




    






    


 