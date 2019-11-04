
/***************************************************
 * Desarrollar una función que reciba por parámetro
 * un día de la semana y devuelva el número que 
 * le corresponde.
 * Comenzar por los casos de test, y luego hacer 
 * la función.
 */
/*
 const getdia = (dia) =>{
     // hacer un swtich por cada dia de la semana
     // que este todo en minusculas
     // asignarle un numero a cada dia

     switch (dia) {
        case "lunes":
            return 1;

        case "martes":
            return 2;

        case "miercoles":
            return 3;

        case "jueves":
            return 4;

        case "viernes":
            return 5;

        case "sabado":
            return 6;

        case "domingo":
            return 7;

        default: 
            throw "ingresaste mal el dia";
        
    }

}



 test ("Le paso Lunes y devuelve 1", () => {

    expect (getdia ("lunes")).toBe (1);

 });

 test('le paso "demango" tira error',() =>{

     expect(() => {
         
         getdia("demango");

     }).toThrow("El dia no existe");

 });
*/
 /**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */

  /*
  const getSegundos = (minutos) =>{

    // 1 minuto = 60 segundos
    // hacer una multiplicacion x 60 por la cantidad de minutos
    // ej: 3 minutos x 60 segundos = 180 segundos
    // Hacer un error predeterminado para la gente que no ponga numeros
        if (typeof minutos == "number"){

            return (minutos * 60 );
        }
        
        else{

            throw "las palabras no se convierten magicamente en numeros";
        }


  }

  test ("Le paso 3 minutos, me devuelve 180 segundos", () => {

    expect (getSegundos (3)).toBe (180);

 });

 test ("Le paso 190 minutos y  me devuelve 11400", () => {

    expect (getSegundos (190)).toBe (11400);

 });


 test('le paso "palabra" tira error',() =>{

    expect(() => {
        
        getSegundos("palabra");

    }).toThrow("las palabras no se convierten magicamente en numeros");
});
*/
/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * 
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * 
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. 
 * 
 * Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * 
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */


 let lista_tareas =[];

const validar_tareas = () =>{
    // restringir para que sirve cada tipo
if (typeof titulo != "string"){
    throw "titulo es cualquier cosa"
    }
    
    typeof descripcion == "string";
    typeof tarea_check == "boolean";

}

 const getTarea = (titulo, descripcion, tarea_check) => {

     //hacer un array de arrays
     // el sub array TAREA tiene que tener un TITULO, DESCRIPCION y un check de si esta lista o no
     
    validar_tareas();

    let tarea = [];
    tarea.push(titulo,descripcion,tarea_check);

    lista_tarea.push(tarea);
    return (lista_tareas);

 }

 test ("saber que mi lista tiene 2 strings y un booleano", () => {
    
    getTarea("caca", "hacer caca", true);

    expect (lista_tareas[0][0]).toBe (typeof string);
    expect (lista_tareas[0][1]).toBe ("string);
    expect (typeof lista_tareas[0][2]).toBe ("boolean");

 });
