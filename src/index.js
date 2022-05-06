import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';
import './estilos.css'
// npm install react@17.0.0 react-dom@17.0.0

//!CALLBACK
// const nombre = 'Adolfo';
// const saludar = nombre => console.log(`Que onda Dev: ${nombre}`);
// const callback = (ejecutarCallback, pasarNombre) => ejecutarCallback(pasarNombre);
// callback(saludar, nombre);

// const saludar=()=>{console.log('hola')}
// setInterval(saludar, 1000);

//!FUNCION ANONIMA
// (function(nombre){
//   console.log('hola '+nombre)
// }('adolfo'))

// const anonimFunction= function(nom){
//   console.log('first'+nom)
// }
// anonimFunction('anonimanueva')

// console.log(saludar('adolfo'))
// function saludar(name){
//   return `Hola ${name} dev`
// }

// console.log(saludarFuerte('ADOLFO'))//Se tiene que decalarar antes de ejecutarla
// const saludarFuerte=function(nuevoNombre){
//   return `hola nuevo dev ${nuevoNombre}`
// }

// console.log(flecha('adolfo=>'))//Se tiene que decalarar antes de ejecutarla
// const flecha=(nom)=>{
//   return `hola flecha ${nom}`
// } 

(function(){
  console.log('hola')
}())

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
)