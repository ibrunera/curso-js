const elementos = [
  {tag:'p', texto:'Frase1'},
  {tag:'div', texto:'Frase2'},
  {tag:'footer', texto:'Frase3'},
  {tag:'section', texto:'Frase4'},
]


for(i=0;i<elementos.length;i++){
  document.querySelector('div').innerHTML+=
  `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}> `
}