var PromedioNumeros = /** @class */ (function () {
    function PromedioNumeros() {
        // variables privadas
        this.numero1 = 0;
        this.numero2 = 0;
        this.numero3 = 0;
        this.resultado = 0;
    }
    // metodos privados, llamar a las variables
    PromedioNumeros.prototype.asignarNumero1 = function (valor) {
        this.numero1 = valor;
    };
    PromedioNumeros.prototype.asignarNumero2 = function (valor) {
        this.numero2 = valor;
    };
    PromedioNumeros.prototype.asignarNumero3 = function (valor) {
        this.numero3 = valor;
    };
    PromedioNumeros.prototype.promedio = function () {
        this.resultado = (this.numero1 + this.numero2 + this.numero3) / 3;
        return "El promedio es: " + this.resultado.toFixed(2) + "\n";
    };
    return PromedioNumeros;
}());
// llamar a la clase
var promedioNumeros = new PromedioNumeros();
// donde se mostraran los resultados
var divDatos = document.getElementById('datos');
// llamar al HTML
function obtenerDatos() {
    // asignando a los atributos del objeto los valores de los controles del formulario
    promedioNumeros.asignarNumero1(parseFloat(document.getElementById("txtNumero1").value));
    promedioNumeros.asignarNumero2(parseFloat(document.getElementById("txtNumero2").value));
    promedioNumeros.asignarNumero3(parseFloat(document.getElementById("txtNumero2").value));
}
// FUNCION PROMEDIO
function calcularPromedio() {
    obtenerDatos();
    divDatos.textContent = promedioNumeros.promedio();
}
