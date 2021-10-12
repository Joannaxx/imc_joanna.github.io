const  calculo  =  document.getElementById('calculo');

function IMC(){
    const  nome  =  document.getElementById('nome').value;
    const  altura  =  document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value;
    const  resultado  =  document.getElementById('resultado');
    
    if(nome !== '' && altura !== '' && peso!== ''){
        const calc = (peso/(altura**2)).toFixed(1);
        let tipo = '';
        if (calc <=16.9) {
            tipo="muito abaixo do peso.";
        }else

        if(calc <=18.4){
            tipo="abaixo do peso."
        }else

        if(calc <=24.9){
            tipo="com o peso ideal."
        }else

        if(calc <=29.9){
            tipo="acima do peso."
        }else

        if(calc <=34.9){
            tipo="com obesidade grau I."
        }else

        if(calc <=40){
            tipo="com obesidade grau II."
        }else{
            tipo="com obesidade grau III- mórbida."
        }
        
        resultado.textContent = `${nome}  seu IMC é de ${calc} e você está ${tipo}`;
        
        
    }
    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(resultado);
    console.log(calculo);

}
calculo.addEventListener('click',IMC);
