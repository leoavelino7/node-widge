class Pessoa {
    dizOi() {
        alert('oi')
    }
}

(function(){

    novaPessoa = new Pessoa()

    const container = document.createElement("div");

    container.innerHTML = `
        <h1 id="title">Sou um conteúdo externo injetado através do JS</h1>
    `;

    document.querySelector("body").appendChild(container);

    document.querySelector("#title").addEventListener("click", (e) => novaPessoa.dizOi());
})();