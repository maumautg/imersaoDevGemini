function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
 
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;


    // Transfoma campoPesquisa em minuscula
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let autor = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        //traz os dados para letras minusculas somente
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        autor = dado.autor.toLowerCase()
        tags = dado.tags.toLowerCase();

        //verifica se titulo ou autor ou descricao ou tags contem campoPesquisa
        if(titulo.includes(campoPesquisa) 
            || descricao.includes(campoPesquisa) 
            || autor.includes(campoPesquisa)
            || tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado, formatando o HTML com os dados do objeto
            resultados += `
            <div class="item-resultado">
              <h2>
                <p><a href="#" target="_blank">${dado.titulo}</a></p>
                <p><small>${dado.autor}</small></p>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Comprar</a>
            </div>
          `;
        } 
     }

     if (!resultados) {
        resultados=`<div class="item-resultado">
            Nenhum resultado encontrado
            </div>`
     }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }