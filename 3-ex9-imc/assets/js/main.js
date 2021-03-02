const form = document.querySelector('#form-imc')

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const peso = Number(e.target.querySelector('#peso').value)

  const altura = Number(e.target.querySelector('#altura').value)

  const imc = (peso / (altura*altura)).toFixed(1)

  let imcText='';

  if(imc<18.5) imcText='Abaixo do peso'
  else if(imc <= 24.9) imcText = 'Peso Normal'
  else if(imc <= 29.9) imcText = 'Sobrepeso'
  else if(imc <= 34.9) imcText = 'Obesidade grau 1'
  else if(imc <= 39.9) imcText = 'Obesidade grau 2'
  else imcText = 'Obesidade grau 3'

  
  const resultado = document.querySelector('#resultado');

  if(peso && altura){
    resultado.innerHTML = `<p> IMC: ${imc} - ${imcText}</p>`
  }else{
    resultado.innerHTML = `<p> Peso ou altura invalidos </p>`
  }
  
})