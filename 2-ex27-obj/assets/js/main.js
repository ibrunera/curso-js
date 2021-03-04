const form = document.querySelector('#form')
const pessoas =[]

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  
  
  const pessoa = {
    nome: e.target.querySelector('#nome').value,
    sobrenome: e.target.querySelector('#sobrenome').value,
    peso: Number(e.target.querySelector('#peso').value).toFixed(0),
    altura: (Number(e.target.querySelector('#altura').value)).toFixed(2)
  }

  pessoas.push(pessoa)
  
  console.log(pessoas)

  
  document.querySelector('#list').innerHTML += 
    `<p>${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.peso} ${pessoa.altura}<p>`
  

  
})