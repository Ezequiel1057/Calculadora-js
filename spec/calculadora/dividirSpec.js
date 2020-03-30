describe("", function(){
    var Calculadora = require('../../src/js/calculadora');

    it('deve retornar 2 para 6 e 3', function(){
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    });

    it('deve retornar 2 para 6 e 3 formato texto', function(){
        expect(Calculadora.dividir('6', '3')).toEqual(2);
    });

    it('deve retornar 1.4 para 4.5 e 3 formato texto', function(){
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it('deve retornar Erro para divisao por 0', function(){
        expect(Calculadora.dividir(6, 0)).toEqual('ERROR');
    });

    it('deve retornar 0 para valor 1 invalido', function(){
        expect(Calculadora.dividir(undefined, 2)).toEqual(0);
    });
    it('deve retornar 0 para valor 2 invalido', function(){
        expect(Calculadora.dividir(2, undefined)).toEqual(0);
    });

})