/*Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos) */

import Cl_Estudiante from "./estudiante.js";
import Cl_seccion from "./seccion.js";

let estudiante1= new Cl_Estudiante("888", 60);
let estudiante2= new Cl_Estudiante("777", 50);
let estudiante3= new Cl_Estudiante("999", 40);
let estudiante4= new Cl_Estudiante("333", 90);
let estudiante5= new Cl_Estudiante("111", 30);
let estudiante6= new Cl_Estudiante("666", 90);
let estudiante7= new Cl_Estudiante("444", 48);
let estudiante8= new Cl_Estudiante("222", 60);

let seccion= new Cl_seccion()
seccion.procesarEstudiante(estudiante1);
seccion.procesarEstudiante(estudiante2);
seccion.procesarEstudiante(estudiante3);
seccion.procesarEstudiante(estudiante4);
seccion.procesarEstudiante(estudiante5);
seccion.procesarEstudiante(estudiante6);
seccion.procesarEstudiante(estudiante7);
seccion.procesarEstudiante(estudiante8);

let salida = document.getElementById("salida")
salida.innerHTML+= "Porcentaje de aprobados:  " +seccion.porcentajeAprob()+"%";
salida.innerHTML+= "<br> Cédula de uno de los mejores estudiantes: "+seccion.devolverAuxCedula();