export default class Cl_Estudiante{
    constructor(c,nf){
        this.cedula=c;
        this.notaFinal=nf;
    }
    set cedula(c){
        this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }
    set notaFinal(nf){
        this._notaFinal = nf;
    }
    get notaFinal(){
        return this._notaFinal;
    }
}

