//2. Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, 
//es decir que todo el código debe estar englobado en un objeto llamado Calculadora. 
//Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar 
//con la ejecución del programa.
var resultado = 0,
    num1 = 0,
    num2 = 0;
var calculadora = {
        init: function () {
            var pantalla = document.getElementById('pantalla');
            var on = document.getElementById('on');
            var sign= document.getElementById('sign');
            var raiz= document.getElementById('raiz');
            var dividido= document.getElementById('dividido');
            var siete= document.getElementById('7');
            var ocho= document.getElementById('8');
            var nueve= document.getElementById('9');
            var por= document.getElementById('por');
            var cuatro= document.getElementById('4');
            var cinco= document.getElementById('5');
            var seis= document.getElementById('6');
            var menos= document.getElementById('menos');
            var uno= document.getElementById('1');
            var dos= document.getElementById('2');
            var tres= document.getElementById('3');
            var cero= document.getElementById('0');
            var punto= document.getElementById('punto');
            var igual= document.getElementById('igual');
            var mas= document.getElementById('mas');



        }
    }