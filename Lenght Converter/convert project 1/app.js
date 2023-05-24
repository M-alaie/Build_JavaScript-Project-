const input = document.querySelector("#input");
const output = document.querySelector("#output");
const inputResult = document.querySelector("#inputResualt");
const outputResualt = document.querySelector("#outputResualt");

inputResult.addEventListener("change",myResult)
 outputResualt.addEventListener("change",myResult)
 input.addEventListener("keyup",myResult)

//reset with keyup evenListener in js?


function myResult() {

  let option_from = inputResult.value;
  let option_to = outputResualt.value;   
 
  if( option_from=="meter"){
    if(option_to=="kilometer"){
      output.value=Number(input.value)*0.001
    }else if(option_to=="cantimeter"){
      output.value=Number(input.value)*100
    }else if(option_to=="meter"){
      output.value=Number(input.value)
    }
  }
  else if( option_from=="cantimeter"){
    if(option_to=="kilometer"){
      output.value=Number(input.value)*0.00001
    }else if(option_to=="cantimeter"){
      output.value=Number(input.value)
    }else if(option_to=="meter"){
      output.value=Number(input.value)*0.01
    }
  }
  else if( option_from=="kilometer"){
    if(option_to=="kilometer"){
      output.value=Number(input.value)
    }else if(option_to=="cantimeter"){
      output.value=Number(input.value)*100000
    }else if(option_to=="meter"){
      output.value=Number(input.value)*1000
    }
  }
}
    

  

