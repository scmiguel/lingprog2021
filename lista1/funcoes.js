function exe1(){
    let nota1=Number(document.getElementById("nota1").value)
    let nota2=Number(document.getElementById("nota2").value)
    let nota3=Number(document.getElementById("nota3").value)
    let nota4=Number(document.getElementById("nota4").value)
    let media=(nota1+nota2+nota3+nota4)/4
    if (media >=7){
        document.getElementById("resultado").innerHTML=`A média é de ${media}, Aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML=`A média é de ${media}, Reprovado`
    }
}
function exe2(){
    let nota1=Number(document.getElementById("nota1").value)
    let nota2=Number(document.getElementById("nota2").value)
    let media=(nota1+nota2)/2
    if ((media >=0)&&(media <3)){
        resultado=`Reprovado com média ${media}`
    }
    else if ((media >=3)&&(media <7)){
        resultado=`Aluno em exame com média ${media}`
    }
    else if ((media >=7)&&(media <=10)){
        resultado=`Aprovado com média ${media}`
    }
}
function exe3(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    if (nro1<nro2){
        document.getElementById("resultado").innerHTML=`O menor numero é ${nro1}`        
    }
    else if (nro2<nro1){
        document.getElementById("resultado").innerHTML=`O menor numero é ${nro2}`
    }
    else {
        document.getElementById("resultado").innerHTML=`Os numeros são iguais`
    }
}
function exe4(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    let nro3=Number(document.getElementById("nro3").value)
    if ((nro1==nro2)&&(nro2==nro3)){
        document.getElementById("resultado").innerHTML=`Todos os numeros são iguais`
    }
    else if ((nro1<nro2)&&(nro1<nro3)){
        document.getElementById("resultado").innerHTML=`O maior numero é ${nro1}`
    }
    else if (nro2>nro3){
        document.getElementById("resultado").innerHTML=`O maior numero é ${nro2}`
    }
    else {
        document.getElementById("resultado").innerHTML=`O menor numero é ${nro3}`
    }
}
function exe5(){
    let nro1=Number(document.getElementById("nro1").value)
    let nro2=Number(document.getElementById("nro2").value)
    let opcao=Number(document.getElementById("opcao").value)
    let resultado
    switch(opcao){
        case 1: resultado=(nro1+nro2)/2
               break
        case 2: if (nro1>=nro2){
                    resultado=nro1-nro2
                }
                else {
                    resultado=nro2-nro1
                }
                break
        case 3: resultado=(nro1*nro2)
                break
        case 4: if (nro2!=0){
                    resultado=nro1/nro2
                }
                else {
                    resultado="Divisão por zero"
                }
                break
        default: resultado="opção inválida"
    }
    document.getElementById("resultado").innerHTML=resultado
}

function exe6(){
     let nro1=Number(document.getElementById("nro1").value)
     let nro2=Number(document.getElementById("nro2").value)
     let opcao=document.getElementById("opcao").value
     let resultado
     switch(opcao){
         case 'a': resultado=`O valor é ${Math.pow(nro1, nro2)}`
                    break
         case 'b': resultado=`O valor é ${Math.sqrt(nro1)} e ${Math.sqrt(nro2)}`
                   break
         case 'c': resultado=`O valor é ${Math.cbrt(nro1)} e ${Math.cbrt(nro2)}`
                    break
         default: resultado=`Valor inválido`
     }
     document.getElementById("resultado").innerHTML=resultado
}

function exe7(){
     // entrada de dados
     let salario=Number(document.getElementById("salario").value)
     let aumento=0
    if (salario<500){
        aumento=(salario*30)/100
    }
    if (aumento==0){
        document.getElementById("resultado").innerHTML=`Não houve aumento`
    }
    else {
        document.getElementById("resultado").innerHTML=`Aumento ${aumento} e salário reajustado: ${salario + aumento}`
    }
}