let feet=document.querySelector("#feet")
let meter=document.querySelector("#meter")
let inch=document.querySelector("#inch")
let cm=document.querySelector("#cm")
let yard=document.querySelector("#yard")
let km=document.querySelector("#kilo")
let miles=document.querySelector("#miles")


  
function FeetToOther(val){
    meter.value=(val*3.2808);
    inch.value=(val*12);
    cm.value=(val*0.032808);
    yard.value=(val*0.333);
    km.value=(val*3280.8);
    miles.value=(val*0.00018939);

}
function meterToOther(val){
    feet.value=(val*3.2808 );
    inch.value=(val*39.370);
    cm.value=(val/0.01);
    yard.value=(val*1.0936);
    km.value=(val/10000);
    miles.value=(val*0.00062137);
}
function inchToOther(val){
    feet.value=(val* 0.08333 );
    meter.value=(val/39.370);
    cm.value=(val/0.39370);
    yard.value=(val*0.027778);
    km.value=(val/39370);
    miles.value=(val*0.00015783);
}
function cmhToOther(val){
    feet.value=(val* 0.032808 );
    meter.value=(val/100);
    inch.value=(val/0.010936);
    yard.value=(val*0.010936);
    km.value=(val/100000);
    miles.value=(val*0.0000062137);
}
function yardToOther(val){
    feet.value=(val* 0.032808 );
    meter.value=(val/100);
    inch.value=(val/0.010936);
    cm.value=(val*0.010936);
    km.value=(val/100000);
    miles.value=(val*0.0000062137);
}
function kmToOther(val){
    feet.value=(val* 3280.8 );
    meter.value=(val/10000);
    inch.value=(val/39370);
    cm.value=(val*10000);
    yard.value=(val/1093.6);
    miles.value=(val*0.62137);
}
function milesToOther(val){
    feet.value=(val* 3280.8 );
    meter.value=(val/10000);
    inch.value=(val/39370);
    cm.value=(val*10000);
    yard.value=(val/1093.6);
    miles.value=(val*0.62137);
}

feet.addEventListener('input',function(){
    convertToOther('feet',this.value)
    console.log(this.value);
});
meter.addEventListener('input',function(){
    convertToOther('meter',this.value)
})
function convertToOther(ConverFrom,value){
    switch(ConverFrom){
        case 'feet':FeetToOther(parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case"inch": inchToOther(parseFloat(value)); break;
        case "cm": cmhToOther(parseFloat(value)); break;
        case "yard": yardToOther(parseFloat(value)); break;
        case "km": kmToOther(parseFloat(value)); break;
        case "miles": cmhToOther(parseFloat(value)); break;

    }
    
}