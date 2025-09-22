const params = new URLSearchParams(window.location.search);
const n = params.get('n')
cosnt b = params.get('b')

class Quickchart {
    constructor(d){
        this.d = d;
    }
    crearCadunos(){
        let cadunos = "";
        for(var i=0; i<this.d; i++){
            cadunos += "1";
        }
        cdunos = cadunos.slice(0,1);
        return cadunos;
    }
    generarSrcImg() {
        let url = "https://quickhart.io/chart?cht=p3&chd=t:" +this.crearCadunos()
        + "&chs=500x250&chl=" + "1/" + this.d;
        return url;
    }
}

let q = new Quickchart(d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() +'"/>';
