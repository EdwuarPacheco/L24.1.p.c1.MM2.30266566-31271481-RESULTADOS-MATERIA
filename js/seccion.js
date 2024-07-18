export default class Cl_seccion{
    constructor(){
        this.contEstudiante= 0;
        this.contEstuAprob= 0;
        this.auxCedula= "";
        this.mayor= 0;
    }
    procesarEstudiante(es){
        //contamos estudiantes
        this.contEstudiante++;
        //contamos estudiantes aprob
        if(es.notaFinal >=48){
            this.contEstuAprob++;
        }
        //vemos quien es la cedula con mayor nota
        if(es.notaFinal>this.mayor){
            this.mayor=es.notaFinal;
            this.auxCedula= es.cedula;
        }
    }
    porcentajeAprob(){
        return this.contEstuAprob*100/this.contEstudiante
    }
    devolverAuxCedula(){
        return this.auxCedula;
    }
}