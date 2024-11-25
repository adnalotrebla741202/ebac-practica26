// Función que calcula la edad a partir de la fecha de nacimiento
var calculateAge = function (dateBirth) {
    // Expresión regular para verificar el formato YYYY-MM-DD
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    // Verificar si la fecha cumple con el formato
    if (!regex.test(dateBirth)) {
        return "Error: La fecha de nacimiento no tiene el formato correcto (YYYY-MM-DD).";
    }
    // Convertir la fecha de nacimiento en un objeto Date
    var dateBirthInformation = new Date(dateBirth);
    // Verificar si la fecha es válida
    if (isNaN(dateBirthInformation.getTime())) {
        return "Error: La fecha de nacimiento no es válida.";
    }
    // Verificar si la fecha de nacimiento es mayor a la fecha actual
    var currentDate = new Date();
    if (dateBirthInformation > currentDate) {
        return "Error: La fecha de nacimiento no puede ser mayor a la fecha actual.";
    }
    // Si la persona nació en el año actual, calcular los meses o días de edad
    var currentYear = currentDate.getFullYear();
    var birthYear = dateBirthInformation.getFullYear();
    if (birthYear === currentYear) {
        // Si nació este año, calcular la diferencia en meses y días
        var monthsAge = currentDate.getMonth() - dateBirthInformation.getMonth();
        var daysAge = Math.floor((currentDate.getTime() - dateBirthInformation.getTime()) / (1000 * 3600 * 24));
        if (monthsAge === 0) {
            return "La persona tiene ".concat(daysAge, " d\u00EDa(s) de edad.");
        }
        else {
            return "La persona tiene ".concat(monthsAge, " mes(es) y ").concat(daysAge, " d\u00EDa(s) de edad.");
        }
    }
    // Calcular la diferencia en años
    var age = currentDate.getFullYear() - dateBirthInformation.getFullYear();
    // Ajustar si la fecha actual aún no ha pasado el cumpleaños de este año
    var monthBirth = dateBirthInformation.getMonth();
    var dayBirth = dateBirthInformation.getDate();
    if (currentDate.getMonth() < monthBirth ||
        (currentDate.getMonth() === monthBirth && currentDate.getDate() < dayBirth)) {
        age--; // No ha cumplido años aún este año
    }
    return "La persona tiene ".concat(age, " a\u00F1os de edad.");
};
// Informacion
console.log(calculateAge('1990-05-15'));
console.log(calculateAge('02-12-1974'));
console.log(calculateAge('15-02-1974'));
console.log(calculateAge('1974-15-02'));
console.log(calculateAge('1974-12-02'));
console.log(calculateAge('2024-04-01'));
console.log(calculateAge('2024-05-20'));
console.log(calculateAge('2024-08-15'));
console.log(calculateAge('2024-12-31'));
console.log(calculateAge('2024-11-24'));
