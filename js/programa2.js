var AreaTriangulo = /** @class */ (function () {
    function AreaTriangulo() {
        // variables privadas
        this.base = 0;
        this.altura = 0;
        this.area = 0;
    }
    // metodos privados, llamar a las variables
    AreaTriangulo.prototype.obtenerBase = function (valor) {
        this.base = valor;
    };
    // metodos privados, llamar a las variables
    AreaTriangulo.prototype.obtenerAltura = function (valor) {
        this.altura = valor;
    };
    // metodos privados, llamar a las variables
    AreaTriangulo.prototype.obtenerArea = function (valor) {
        this.area = valor;
    };
    // obtenerbase
    AreaTriangulo.prototype.calcularArea = function () {
        this.area = (this.base * this.altura) / 2;
        return "El area es: " + this.area.toFixed(2) + "\n";
    };
    return AreaTriangulo;
}());
var areaTriangulo = new AreaTriangulo();
function calcularArea() {
    areaTriangulo.obtenerBase(parseFloat(document.getElementById("txtBase").value));
    areaTriangulo.obtenerAltura(parseFloat(document.getElementById("txtAltura").value));
    var resultado = document.getElementById('resultado');
    resultado.textContent = areaTriangulo.calcularArea();
}
