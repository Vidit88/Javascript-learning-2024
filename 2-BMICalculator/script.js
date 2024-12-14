const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results =document.querySelector('#results')
   const result2 =document.querySelector('#result2')
   // code for bmi
   let bmi=0;
   if(height===""|| height<0 || isNaN(height)){
     results.innerHTML = "Please give a valid height";
   }
   else if(weight===""|| weight<0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight";
  }
  else{
     bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`;
  }
// code for result 
  if(bmi<18.6)
  {
    result2.innerHTML="You are under Weight";
  }
  else if(bmi>=18.6 && bmi<=24.9)
    {
      result2.innerHTML="You are in Normal Range";
    }
  else if(bmi > 24.9)
    {
        result2.innerHTML="You are Over Weight";
    }
          
        
});