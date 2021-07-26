/* Cadastrando o nome, email e senha */

const form = document.querySelector("#form-cad");

form.addEventListener("submit", (e) => {
  // impede que a página atualize
  e.preventDefault();

  // pega o valor que for inserido no input
  let name = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // guarda no localStorage
  let data = { name, email, password };

  // guardando no localStorage e transformando em string
  localStorage.setItem("pessoa", JSON.stringify(data));

  //resgatando os dados do localStorage
  let dataString = localStorage.getItem("pessoa");

  // transformando os dados em objetos que podem ser acessados
  let dataObj = JSON.parse(dataString);

  // mostrando o nome e o email na tela
  let blocoCadastro = document.querySelector(".mostra-msg");
  blocoCadastro.innerHTML = `<p>${dataObj.name}, <br />seu cadastro foi realizado.<br /> A confirmação foi enviada para ${dataObj.email}</p>`;

  // função para alterar o estilo do bloco
  function alterarEstiloBloc(blocoCadastro) {
    blocoCadastro.style.fontSize = "15px";
    blocoCadastro.style.textAlign = "center";
    blocoCadastro.style.fontFamily = "'Noto sans', sans serif";
  }
  alterarEstiloBloc(blocoCadastro);
});

/* FIM Cadastrando o nome, email e senha */

var listaProdutos = [];
/* Adicionando produto 1 ao carrinho */

const pegaProduto1 = {
  nome_Produto: "Lipstick révolution collection",
  descricao: "Matte lipstick nude",
  valor: "R$ 150,00"
};

const produto1 = document.querySelector(".form-prod1");

produto1.addEventListener("submit", (e) => {
  e.preventDefault();
  listaProdutos.push(pegaProduto1);
  localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
  localStorage.setItem("product1", JSON.stringify(listaProdutos));

  const addCart1 = document.querySelector("#add-cart1");
  addCart1.value = "adicionado";

  function mundaBotao(addCart1) {
    addCart1.style.backgroundColor = "indianred";
    addCart1.style.color = "#fff";
  }

  mundaBotao(addCart1);
});

/* Adicionando produto 2 ao carrinho */

const pegaProduto2 = {
  nome_Produto: "Lipstick Chanel collection",
  descricao: "Matte lipstick red",
  valor: "R$ 150,00"
};

const produto2 = document.querySelector(".form-prod2");

produto2.addEventListener("submit", (e) => {
  e.preventDefault();

  listaProdutos.push(pegaProduto2);
  localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

  localStorage.setItem("product2", JSON.stringify(pegaProduto2));

  const addCart2 = document.querySelector("#add-cart2");
  addCart2.value = "adicionado";

  function mundaBotao(addCart2) {
    addCart2.style.backgroundColor = "indianred";
    addCart2.style.color = "#fff";
  }

  mundaBotao(addCart2);
});

/* Adicionando produto 3 ao carrinho */

const pegaProduto3 = {
  nome_Produto: "Révolution powder collection",
  descricao: "powder medium matte",
  valor: "R$ 100,00"
};

const produto3 = document.querySelector(".form-prod3");

produto3.addEventListener("submit", (e) => {
  e.preventDefault();

  listaProdutos.push(pegaProduto3);
  localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

  localStorage.setItem("product3", JSON.stringify(pegaProduto3));

  const addCart3 = document.querySelector("#add-cart3");
  addCart3.value = "adicionado";

  function mundaBotao(addCart3) {
    addCart3.style.backgroundColor = "indianred";
    addCart3.style.color = "#fff";
  }

  mundaBotao(addCart3);
});

/* Adicionando produto 4 ao carrinho */

const pegaProduto4 = {
  nome_Produto: "Révolution lipstick collection",
  descricao: "Matte lipstick pink",
  valor: "R$ 80,00"
};

const produto4 = document.querySelector(".form-prod4");

produto4.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("product4", JSON.stringify(pegaProduto4));

  listaProdutos.push(pegaProduto4);
  localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

  const addCart4 = document.querySelector("#add-cart4");
  addCart4.value = "adicionado";

  function mundaBotao(addCart3) {
    addCart4.style.backgroundColor = "indianred";
    addCart4.style.color = "#fff";
  }

  mundaBotao(addCart4);
});
