describe("Suite de teste multiplicacao", function(){
    var Calculadora = require('../../src/js/calculadora');

    it("deve retornar 6 para 2 e 3 ", function(){
        expect(Calculadora.multiplicar(2,3)).toEqual(6);

    });

    it("deve retornar 6 para 2 e 3 com valor texto", function(){
        expect(Calculadora.multiplicar('2','3')).toEqual(6);

    });

    it("deve retornar 4.5 para 1.5 e 3 com valor texto", function(){
        expect(Calculadora.multiplicar(1.5,3)).toEqual(4.5);
    });

    it("deve retornar o para valor 1 indefinido", function(){
        expect(Calculadora.multiplicar(undefined, 3)).toEqual(0);
    });

    it("deve retornar o para valor 2 indefinido", function(){
        expect(Calculadora.multiplicar(3, undefined)).toEqual(0);
    });

});