











// let LIST

// //creacion de fecha actualizada 
// const FECHA = new Date ()
// fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})

// let id // para que inicie en 0 cada tarea tendra un id diferente

// // funcion de agregar tarea 
// function agregarTarea(tarea, id, realizado, eliminado) {
//     if(eliminado) {return} // si existe eliminado es true si no es false 

//     const REALIZADO = realizado ? check : uncheck // si realizado es verdadero check si no uncheck

//     const LINE = realizado ? lineThrough : ''  // si realizado es true, tacharlo con lineThrough, sino nada

//     const elemento = `
//                         <li id="elemento">
//                         <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
//                         <p class="text ${LINE}">${tarea}</p>
//                         <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
//                         </li>
//                     `
//     lista.insertAdjacentHTML("beforeend",elemento)
// }

// // funcion de Tarea Realizada 
// function tareaRealizada(element) {
//     element.classList.toggle(check)
//     element.classList.toggle(uncheck)
//     element.parentNode.querySelector('.text').classList.toggle(lineThrough)
//     LIST[element.id].realizado = LIST[element.id].realizado ?false :true //Si
//     console.log(LIST)
//     console.log(LIST[element.id])
//     console.log(LIST[element.id].realizado)
// }

// function tareaEliminada(element){
//     console.log(element.parentNode)
//     console.log(element.parentNode.parentNode)
//     element.parentNode.parentNode.removeChild(element.parentNode)
//     LIST[element.id].eliminado = true
//     console.log(LIST)
// }

// // crear un evento para escuchar el enter y para habilitar el boton 

// botonEnter.addEventListener('click', ()=> {
//     const tarea = input.value
//     if(tarea){
//         agregarTarea(tarea,id,false,false)
//         LIST.push({
//             nombre : tarea,
//             id : id,
//             realizado : false,
//             eliminado : false
//         })
//         localStorage.setItem('TODO',JSON.stringify(LIST))
//         id++
//         input.value = ''
//     }

// })

// document.addEventListener('keyup', function (event) {
//     if (event.key=='Enter'){
//         const tarea = input.value
//         if(tarea) {
//             agregarTarea(tarea,id,false,false)
//         LIST.push({
//             nombre : tarea,
//             id : id,
//             realizado : false,
//             eliminado : false
//         })
//         localStorage.setItem('TODO',JSON.stringify(LIST))

//         input.value = ''
//         id++
//         console.log(LIST)
//         }
//     }
    
// })


// lista.addEventListener('click',function(event){
//     const element = event.target 
//     const elementData = element.attributes.data.value
//     console.log(elementData)
    
//     if(elementData == 'realizado') {
//         tareaRealizada(element)
//     }
//     else if(elementData == 'eliminado') {
//         tareaEliminada(element)
//         console.log("elimnado")
//     }
//     localStorage.setItem('TODO',JSON.stringify(LIST))
// })


// let data = localStorage.getItem('TODO')
// if(data){
//     LIST = JSON.parse(data)
//     console.log(LIST)
//     id = LIST.length
//     cargarLista(LIST)
// }else {
//     LIST = []
//     id = 0
// }


// function cargarLista(array) {
//     array.forEach(function(item){
//         agregarTarea(item.nombre,item.id,item.realizado,item.eliminado)
//     })
// }


// function mostrarContenidoNav(seleccion) {
//     let contenido = "";
//     if (seleccion === tareas)  {
//         contenido = "contenido de nota";
//     }
    
// }

// // function mostrarNota(numero) {
// //     var contenido = "";
// //     if (numero === 1) {
// //       contenido = "Contenido de la nota 1";
// //     } else if (numero === 2) {
// //       contenido = "Contenido de la nota 2";
// //     } else if (numero === 3) {
// //       contenido = "Contenido de la nota 3";
// //     }
// //     document.getElementById("contenido").innerText = contenido;
// //   }

// //   Este código utiliza JavaScript para cambiar el texto dentro del elemento <p> con id "contenido" según el botón que se haya clicado. Cada botón llama a la función mostrarNota(numero) con el número correspondiente a la nota que se quiere mostrar.