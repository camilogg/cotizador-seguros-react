// obtiene la diferencia de años
export const obtenerDiferenciaYear = (year) => new Date().getFullYear() - year

// calcula el total a pagar según la marca
export const calcularMarca = (marca) => {
  let switcher = {
    europeo: 1.3,
    americano: 1.15,
    asiatico: 1.05,
  }

  return switcher[marca]
}

// Calcula el tipo de seguro
export const obtenerPlan = (plan) => (plan === 'basico' ? 1.2 : 1.5)

// Muestra la primer letra mayúscula
export const primerMayuscula = texto => texto[0].toUpperCase() + texto.slice(1)