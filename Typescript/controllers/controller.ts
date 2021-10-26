//declare global variable to transmit the type of data
let car : Car;

//create the function with all the arguments with its type of data
function createCar(plate:string, brand:string, color:string){
    car = new Car(plate,color,brand);
    


  



    //condition plate
    if ( validate_plate !== undefined) {
        console.log('Please, enter an alfanumeric value!')
     
      };
    //condition color
    if ( validate_color !== undefined) {
        console.log('Please, enter a color value!')
   
      };

    //condition brand
    if ( validate_brand !== undefined) {
        console.log('Please, enter a brand value!')
      
      };
      
    
      
    

    //car.addWheel(new Wheel(2,"SEAT"));

    //document.body.innerText="CAR: PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + brand 
    //+ " WHEELS: " + JSON.stringify(car.wheels);
};

// call function to send Car form details
function sendFormCar(event: any){

//event PreventDefault

event.preventDefault();
    let plate = <HTMLInputElement>document.getElementById("enter_plate");
    let brand = <HTMLInputElement>document.getElementById("enter_brand");
    let color = <HTMLInputElement>document.getElementById("enter_color");

    console.log('My car has got a plate number:'+ plate.value +' '+ 'is a model:'+ brand.value + ' ' +'and has a color:'+ color.value);

  //declare condition with ts own parameters
if (!validateCar(plate, brand, color) ){
    
    alert("Congratulation, you filled up a right validation form!");
    
    return true; 

  
} else {

    alert("Incorrect validation form!");
    
    return false;
}


}





//Typescript Validation form


//declare constant of carForm (id ==> HTML)
const carForm = document.getElementById('carFormId');


//call the inputs function (have a look of HTML inputs)
function validateCar(inputPlate: HTMLInputElement, inputBrand: HTMLInputElement, inputColor:HTMLInputElement) {
    var errors = 0; //variable to describe errors

    //carForm.classList.remove('is-invalid');

    
//--- condition validate to write on inner body HTML of the page

 if (!validate_brand(inputBrand.value) || (!validate_plate(inputPlate.value))||(!validate_color(inputColor.value))) {

    inputBrand.classList.add("is-invalid");
    //document.body.innerText  = "Congratulation, you filled up a right Validation! ";
    document.body.innerText  = "The car is a model:"+ inputBrand.value + " has got a plate number:"+ inputPlate.value +' ' +"and has got a"+ ' '+inputColor.value +' '+"color";
    errors++;
   }



//general condition for any value
if (errors > 0) {
     console.log('Compliments, you have filled up correctly the form!') 
    return false;

} else {
    
    return true;
} 
}

  

  




//create a function to validate plate
function validate_plate(Plate: any) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(Plate) ? true : false;
}

//create a function to validate brand
function validate_brand(Brand: any) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(Brand) ? true : false;
}

//create a function to validate color
function validate_color(Color: any) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(Color) ? true : false;
}















