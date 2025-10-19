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

function buscarEstudiantePorCedula(cedula) {
const estudiante = estudiantes.find(e => e.cedula === cedula);

if (estudiante) {
    console.log(" Estudiante encontrado:");
    console.log(estudiante);
} else {
    console.log(` No se encontró ningún estudiante con la cédula ${cedula}.`);
}
}