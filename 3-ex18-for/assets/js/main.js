const elementos = [
  {tag:'p', texto:'Frase1'},
  {tag:'div', texto:'Frase2'},
  {tag:'footer', texto:'Frase3'},
  {tag:'section', texto:'Frase4'},
]

document.querySelector('.container').appendChild(
  document.createElement('div')
)

for(let i=0;i<elementos.length;i++){
  const {tag, texto} = elementos[i]
  const element = document.createElement(tag)
  element.innerHTML = texto
  document.querySelector('div').appendChild(element) 
}