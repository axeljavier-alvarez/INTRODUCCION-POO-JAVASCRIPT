class PromedioNumeros {

    // variables privadas
    private numero1: number=0; 
    private numero2: number=0;
    private numero3: number=0;
    private resultado : number = 0;

    // metodos privados, llamar a las variables
    public asignarNumero1(valor: number){
        this.numero1 = valor;
    }

    public asignarNumero2(valor: number){
        this.numero2 = valor;
    }
    
    public asignarNumero3(valor: number){
        this.numero3 = valor;
    }

    public promedio(){
        this.resultado =(this.numero1 + this.numero2 + this.numero3)/3;
        return "El promedio es: " + this.resultado.toFixed(2) + "\n";
    }

}

// llamar a la clase
const promedioNumeros = new PromedioNumeros();
// donde se mostraran los resultados
let divDatos = document.getElementById('datos') as HTMLParagraphElement;

// llamar al HTML
function obtenerDatos(){
    // asignando a los atributos del objeto los valores de los controles del formulario
    promedioNumeros.asignarNumero1(
        parseFloat((document.getElementById("txtNumero1") as HTMLInputElement).value)
    );
    promedioNumeros.asignarNumero2(
        parseFloat((document.getElementById("txtNumero2") as HTMLInputElement).value)
    );
    promedioNumeros.asignarNumero3(
        parseFloat((document.getElementById("txtNumero2") as HTMLInputElement).value)
    );
}

// FUNCION PROMEDIO
function calcularPromedio() : void {
    
    obtenerDatos();
        divDatos.textContent = promedioNumeros.promedio();

}
