var listarProdutos = () => {
  let lista = JSON.parse(localStorage.getItem("listaProdutos"));
  lista.forEach(prencheLista);
};

function prencheLista(item, index) {
  let produto = item;
  let linha = document.getElementById("lista");
  let li = document.createElement("li");
  li.innerHTML = `<br />
                    ${produto.nome_Produto}
                    <br />
                    ${produto.descricao}
                    <br />
                    ${produto.valor}`;

  linha.appendChild(li);
}

listarProdutos();
