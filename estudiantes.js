const estudiantes = [
{
    cedula: "0951234567",
    apellidos: "García Pérez",
    nombres: "María José",
    programaAcademico: "Ingeniería en Sistemas",
    materias: ["Algoritmo", "Cálculo", "Inglés"],
    promedioNota: 8.75
},
{
    cedula: "0987654321",
    apellidos: "Martínez López",
    nombres: "Carlos Andrés",
    programaAcademico: "Medicina",
    materias: ["Química", "Biología", "Inglés"],
    promedioNota: 9.10
},
{
    cedula: "0912345678",
    apellidos: "Rodríguez Sánchez",
    nombres: "Ana Lucía",
    programaAcademico: "Derecho",
    materias: ["Humanidades", "Procesal", "Inglés"],
    promedioNota: 8.95
},
{
    cedula: "0976543210",
    apellidos: "Torres Zambrano",
    nombres: "Diego Alejandro",
    programaAcademico: "Arquitectura",
    materias: ["Diseño", "Cálculo", "Inglés"],
    promedioNota: 8.50
},
{
    cedula: "0989765432",
    apellidos: "Vera Castillo",
    nombres: "Sofía Valentina",
    programaAcademico: "Psicología",
    materias: ["Psicología", "Sociales", "Humanidades"],
    promedioNota: 9.25
}
];

function agregarEstudiante(nuevo) {
const existe = estudiantes.some(e => e.cedula === nuevo.cedula);
if (existe) {
    console.log(` Ya existe un estudiante con la cédula ${nuevo.cedula}.`);
    return;
}
estudiantes.push(nuevo);
console.log(" Estudiante agregado correctamente.");
}

function listarEstudiantes() {
const ordenados = [...estudiantes].sort((a, b) =>
    a.apellidos.localeCompare(b.apellidos)
);

console.log("\n LISTA DE ESTUDIANTES (ordenada por apellidos):");
ordenados.forEach(e => {
    console.log(`${e.apellidos}, ${e.nombres} — ${e.programaAcademico}`);
});
}

function buscarPorCedula(cedula) {
const estudiante = estudiantes.find(e => e.cedula === cedula);
if (estudiante) {
    console.log("\n Estudiante encontrado:");
    console.log(estudiante);
} else {
    console.log(` No se encontró ningún estudiante con la cédula ${cedula}.`);
}
}

function actualizarEstudiante(cedula, nuevosDatos) {
const index = estudiantes.findIndex(e => e.cedula === cedula);
if (index === -1) {
    console.log(` No se encontró ningún estudiante con la cédula ${cedula}.`);
    return;
}

estudiantes[index] = { ...estudiantes[index], ...nuevosDatos };
console.log(" Datos actualizados correctamente.");
}

function eliminarEstudiante(cedula) {
const index = estudiantes.findIndex(e => e.cedula === cedula);
if (index === -1) {
    console.log(` No se encontró ningún estudiante con la cédula ${cedula}.`);
    return;
}

estudiantes.splice(index, 1);
console.log(` Estudiante con cédula ${cedula} eliminado correctamente.`);
}

agregarEstudiante({
cedula: "0999999999",
apellidos: "Mendoza Ruiz",
nombres: "Laura Isabel",
programaAcademico: "Contabilidad",
materias: ["Contabilidad I", "Estadística"],
promedioNota: 8.7
});

listarEstudiantes();

buscarPorCedula("0912345678");
actualizarEstudiante("0951234567", { promedioNota: 9.0, programaAcademico: "Software" });
eliminarEstudiante("0976543210");
listarEstudiantes();