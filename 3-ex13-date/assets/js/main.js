const date = new Date()

const weekDay = (date) => {
  let weekDay
  switch (date.getDay()) {
    case 0:
      weekDay = 'Domingo'
      break;
    case 1:
      weekDay = 'Segunda'
      break;
    case 2:
      weekDay = 'Terca'
      break;
    case 3:
      weekDay = 'Quarta'
      break;
    case 4:
      weekDay = 'Quinta'
      break;
    case 5:
      weekDay = 'Sexta'
      break;
    case 6:
      weekDay = 'Sabado'
      break;
    default:
      weekDay = ''
      break;
  }
  return weekDay
}

const monthName = (date) => {
  let monthName
  switch (date.getMonth()) {
    case 0:
      monthName = 'Janeiro'
      break;
    case 1:
      monthName = 'Fevereiro'
      break;
    case 2:
      monthName = 'Marco'
      break;
    case 3:
      monthName = 'Abril'
      break;
    case 4:
      monthName = 'Maio'
      break;
    case 5:
      monthName = 'Junho'
      break;
    case 6:
      monthName = 'Julho'
      break;   
    default:
      monthName = 'Um mes ai'
      break;
  }
  return monthName
}

document.querySelector('h1').innerHTML = 
`${weekDay(date)}, ${date.getDate()} de ${monthName(date)} 
de ${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()}.`
