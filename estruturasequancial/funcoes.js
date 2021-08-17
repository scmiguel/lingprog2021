function exe1(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    let resultado=nro1-nro2
    document.getElementById("resultado").innerHTML=resultado
}
function exe2(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    let nro3=Number(document.getElementById("nro3").value)
    let resultado=nro1*nro2*nro3
    document.getElementById("resultado").innerHTML=resultado
}
function exe3(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    if (nro2==0){
        document.getElementsById("resultado").innerHTML="Não possivel divisão por zero"
    }
    else{
        let resultado=nro1/nro2
        document.getElementsById("resultado").innerHTML=resultado
    }
}
function exe20(){
    let angulo=Number(document.getElementById("angulo").value)
    let distancia=Number(document.getElementById("distancia").value)
    let hipotenusa=distancia/Math.cos(angulo)
    document.getElementsById("resultado").innerHTML=hipotenusa
}
function exe5(){

}