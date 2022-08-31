let form = document.querySelector("form")
let card = document.getElementById("card")
let btn = document.getElementById("botao")
let select = document.querySelector("select")


function enviar(){
  let h2Titulo = form['titulo'].value.toUpperCase()
  let pDescricao = form['descricao'].value
  let img = form['urlImagem'].value
  let spanTipo = form["tipo"].value;
  let spanTipos = form['tipos'].value
  
  
  
  card.innerHTML =`
  <img src=${img} />
   <h4>${h2Titulo}</h4>
  <div class="divTipo">
  <span class="cor-${spanTipo}">${spanTipo}</span>
  <span class="cor-${spanTipos}">${spanTipos}</span>
  </div>
  <p> ${pDescricao} </p>
  
  `
  let rmSpan = document.getElementById('spanTipo2')
  if (spanTipos === '' ) {
    rmSpan.remove()
    }
  
    
}




  btn.addEventListener("click", enviar)
  

  VanillaTilt.init(document.querySelector(".card"), {
    max: 40,
    speed: 800,
    glare: true,
    "max-glare": 2.5,
  });


  