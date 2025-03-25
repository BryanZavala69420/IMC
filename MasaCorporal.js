function IMCe(){
    let kilos, altura, res;
    kilos = parseFloat(document.IMCorporal.peso.value);

    altura = parseFloat(document.IMCorporal.altura.value);

    res = kilos/(altura*altura);

    document.IMCorporal.resultado.value = res;

    if(res<18.49){
        document.IMCorporal.Odiomivida.value =" Su IMC es bajo";

    }else if(res>=18.50 && res<=24.99){
        document.IMCorporal.Odiomivida.value =" Su IMC es normal";

    }else if(res>=25 && res<=29.99){
        document.IMCorporal.Odiomivida.value =" Su IMC es sobrepeso";


    } else if(res>=30 && res<=34.99){
        document.IMCorporal.Odiomivida.value =" Su IMC es obesidad leve";


    }else if(res>=35 && res<=39.99){
        document.IMCorporal.Odiomivida.value =" Su IMC es obesidad media";


    }else if(res>=40){
        document.IMCorporal.Odiomivida.value =" Su IMC es obesidad morbida";


    }
}
