var Calculadora = {

    adicao: '+',
    subtracao: '-',
    divisao:'/',
    multipicacao: '*',

    adicionar: function(num1, num2){
        return Calculadora.calcular(num1, num2, this.adicao);
    },

    subtrair: function(num1, num2){
        return Calculadora.calcular(num1, num2, this.subtracao);
    },

    dividir: function(num1, num2){
        if(num2 ==0){
            return 'ERROR';
        }
        return Calculadora.calcular(num1, num2, this.divisao);
    },
    
    multiplicar: function(num1, num2){
        return Calculadora.calcular(num1, num2, this.multipicacao);
    },

    calcular: function(num1, num2, operacao){
        var resultado = 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(isNaN(num1)|| isNaN(num2)){
            return 0;
        }

        switch(operacao){
            case Calculadora.adicao:
                resultado = num1 + num2;
                break;
            case Calculadora.subtracao:
                resultado = num1 - num2;
                break;
            case Calculadora.divisao:
                resultado = num1 / num2;
                break;
            case Calculadora.multipicacao:
                resultado = num1 * num2;
                break;
            default:
                resultado = 0;
                break;    

        }
        return resultado;

    }

};

if(typeof module !== 'undefined'
&& typeof module.exports !== 'undefined'){
    module.exports = Calculadora;

}