class AreaTriangulo {

     // variables privadas
     private base: number=0; 
     private altura: number=0;
     private area : number = 0;

     // metodos privados, llamar a las variables
    public obtenerBase(valor: number){
        this.base = valor;
    }

    // metodos privados, llamar a las variables
    public obtenerAltura(valor: number){
        this.altura = valor;
    }

     // metodos privados, llamar a las variables
     public obtenerArea(valor: number){
        this.area = valor;
    }

    // obtenerbase
    public calcularArea(){
        this.area =(this.base * this.altura)/2;
        return "El area es: " + this.area.toFixed(2) + "\n";
    }
}

const areaTriangulo = new AreaTriangulo();

function calcularArea() : void {
    areaTriangulo.obtenerBase(parseFloat((document.getElementById("txtBase") as HTMLInputElement).value));
    areaTriangulo.obtenerAltura(parseFloat((document.getElementById("txtAltura") as HTMLInputElement).value));
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    resultado.textContent = areaTriangulo.calcularArea();

}