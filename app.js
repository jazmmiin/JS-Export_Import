//ejercicio 2 app.js
import { Persona } from './persona.js';

const persona1 = new Persona('Juan', 30); //Creamos la persona Juan de 30 años
const persona2 = new Persona('María', 25); //Creamos la persona Maria de 25 años

persona1.mostrarInformacion(); // Debería mostrar "Nombre: Juan, Edad: 30"
persona2.mostrarInformacion(); // Debería mostrar "Nombre: María, Edad: 25"