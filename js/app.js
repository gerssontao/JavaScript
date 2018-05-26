//2. Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, 
//es decir que todo el código debe estar englobado en un objeto llamado Calculadora. 
//Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones que se deben iniciar 
//con la ejecución del programa.
var count=0, selector="", operacion="", num1=0, num2=0;
var calculadora = {
    init: function () {

        //Variables
        var display = document.getElementById('display');
        var on = document.getElementById('on');
        var sign = document.getElementById('sign');
        var raiz = document.getElementById('raiz');
        var dividido = document.getElementById('dividido');
        var siete = document.getElementById('7');
        var ocho = document.getElementById('8');
        var nueve = document.getElementById('9');
        var por = document.getElementById('por');
        var cuatro = document.getElementById('4');
        var cinco = document.getElementById('5');
        var seis = document.getElementById('6');
        var menos = document.getElementById('menos');
        var uno = document.getElementById('1');
        var dos = document.getElementById('2');
        var tres = document.getElementById('3');
        var cero = document.getElementById('0');
        var punto = document.getElementById('punto');
        var igual = document.getElementById('igual');
        var mas = document.getElementById('mas');
        

        //EVENTOS//
        on.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            calculadora.resetear()
        }
        on.onmouseup = function () {
            calculadora.liberarBoton();
        }
        raiz.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            console.log("Funcion no implementada")
        }
        raiz.onmouseup = function () {
            calculadora.liberarBoton()
        }
        dividido.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            num1 = display.textContent;
            if (num1.length > 8) {
                alert("El operador excede los 8 digitos, digite nuevamente");
                num1 = 0;
                calculadora.limpiar();
            } else {
                operacion = "/";
                calculadora.limpiar();
            }
        }
        dividido.onmouseup = function () {
            calculadora.liberarBoton()
        }
        por.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            num1 = display.textContent;
            if (num1.length > 8) {
                alert("El operador excede los 8 digitos, digite nuevamente");
                num1 = 0;
                calculadora.limpiar();
            } else {
                operacion = "*";
                calculadora.limpiar();
            }
        }
        por.onmouseup = function () {
            calculadora.liberarBoton()
        }
        menos.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            num1 = display.textContent;
            if (num1.length > 8) {
                alert("El operador excede los 8 digitos, digite nuevamente");
                num1 = 0;
                calculadora.limpiar();
            } else {
                operacion = "-";
                calculadora.limpiar();
            }
        }
        menos.onmouseup = function () {
            calculadora.liberarBoton()
        }
        mas.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            num1 = display.textContent;
            if (num1.length > 8) {
                alert("El operador excede los 8 digitos, digite nuevamente");
                num1 = 0;
                calculadora.limpiar();
            } else {
                operacion = "+";
                calculadora.limpiar();
            }

        }
        mas.onmouseup = function () {
            calculadora.liberarBoton()
        }
        punto.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (count == 0 && display.textContent.search(".") != "."){
                display.textContent = display.textContent + ".";
            }


        }
        punto.onmouseup = function () {
            calculadora.liberarBoton()
            count=1;
        }

        igual.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            num2 = display.textContent;
            if (num2.lenght > 8) {
                alert("El operador excede los 8 digitos")
            } else {
                calculadora.resolver();
            }
        }
        igual.onmouseup = function () {
            calculadora.liberarBoton()
        }
        //NUMEROS//
        uno.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "1";
            } else {
                display.textContent = display.textContent + "1";
            }
        }
        uno.onmouseup = function () {
            calculadora.liberarBoton()
        }
        dos.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "2";
            } else {
                display.textContent = display.textContent + "2";
            }
        }
        dos.onmouseup = function () {
            calculadora.liberarBoton()
        }
        tres.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "3";
            } else {
                display.textContent = display.textContent + "3";
            }
        }
        tres.onmouseup = function () {
            calculadora.liberarBoton()
        }
        cuatro.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "4";
            } else {
                display.textContent = display.textContent + "4";
            }
        }
        cuatro.onmouseup = function () {
            calculadora.liberarBoton()
        }
        cinco.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "5";
            } else {
                display.textContent = display.textContent + "5";
            }
        }
        cinco.onmouseup = function () {
            calculadora.liberarBoton()
        }
        seis.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "6";
            } else {
                display.textContent = display.textContent + "6";
            }
        }
        seis.onmouseup = function () {
            calculadora.liberarBoton()
        }
        siete.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "7";
            } else {
                display.textContent = display.textContent + "7";
            }
        }
        siete.onmouseup = function () {
            calculadora.liberarBoton()
        }
        ocho.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "8";
            } else {
                display.textContent = display.textContent + "8";
            }
        }
        ocho.onmouseup = function () {
            calculadora.liberarBoton()
        }
        nueve.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "9";
            } else {
                display.textContent = display.textContent + "9";
            }
        }
        nueve.onmouseup = function () {
            calculadora.liberarBoton()
        }
        cero.onmousedown = function (e) {
            calculadora.presionarBoton(e);
            if (display.textContent == "0") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent + "0";
            }
        }
        cero.onmouseup = function () {
            calculadora.liberarBoton()
        }
    },
    limpiar: function () {
        display.textContent = "0";
        count=0;
    },
    resetear: function () {
        display.textContent = "0";
        operacion = "";
        num1 = 0;
        num2 = 0;
        signo = 0;
        count=0;
    },
    //4. Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: 
    //suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo 
    //hace parte del diseño general de la calculadora y no es necesario que lo implementes.
    resolver: function () {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                res = parseFloat(num1) / parseFloat(num2);
                break;
        }
        calculadora.resetear
        display.textContent = res;
    },
    //3. Crea los métodos que consideres necesarios para hacer que la tecla presionada 
    //reduzca su tamaño y vuelva a su forma original al soltarla.
    presionarBoton: function (event) {
        selector = document.getElementById(event.currentTarget.id);
        switch (selector.id) {
            case "0":
            case "punto":
            case "igual":
            case "1":
            case "2":
            case "3":
                selector.style = "width: 28%; height: 60.74px;"
                break;
            case "on":
            case "sign":
            case "raiz":
            case "dividido":
            case "7":
            case "8":
            case "9":
            case "por":
            case "4":
            case "5":
            case "6":
            case "menos":
                selector.style = "width: 21%; height: 60.05px"
                break;
            case "mas":
                selector.style = "width: 85%; height: 94.44%"
                break;
        }
    },
    liberarBoton: function () {
        switch (selector.id) {
            case "0":
            case "punto":
            case "igual":
            case "1":
            case "2":
            case "3":
                selector.style = "width: 29%; height: 62.91px;"
                break;
            case "on":
            case "sign":
            case "raiz":
            case "dividido":
            case "7":
            case "8":
            case "9":
            case "por":
            case "4":
            case "5":
            case "6":
            case "menos":
                selector.style = "width: 22%; height: 62.91px"
                break;
            case "mas":
                selector.style = "width: 90%; height: 100%"
        }
    }
}

calculadora.init()