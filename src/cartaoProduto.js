import { adicionarAoCarrinho } from "./menuCarrinho"
import { catalogo } from "./utilidades"

export function renderizarCatalago(){
    for (const produtoCatalogo of catalogo){
        const cardProduto = `
            <div class="shadow-xl shadow-slate-400 rounded-lg w-48 m-2 flex flex-col p-2 justify-between group" id="card-produto-${produtoCatalogo.id}">
                <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto-1" class="group-hover:scale-110 duration-300 my-3 rounded-lg"/>
                <p class="text-sm">${produtoCatalogo.marca}</p>
                <p class="text-sm">${produtoCatalogo.nome}</p>
                <p class="text-lg">${produtoCatalogo.preco}</p>
                <button id="adicioanr-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
            </div>`

        document.getElementById("container-produto").innerHTML += cardProduto
    }
    for (const produtoCatalogo of catalogo){
        document.getElementById(`adicioanr-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
    }
}