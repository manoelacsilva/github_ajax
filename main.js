document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/manoelacsilva')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
})

//const projetos = [
//    "https://site-gamesshop-iota-hazel.vercel.app/",
//    "https://mcs-ebac-tech-talks.vercel.app/"
//]

//function galeriaDeProjetos() {
//    const galeria = document.querySelector(".projeto-galeria");

//    projetos.forEach((projetoUrl) => {
//        const projetoContainer = document.createElement("div");
//        projetoContainer.className = "projeto-container";

//        const link = document.createElement("a");
//        link.href = projetoUrl;
//        link.target = "_blank";

//        const image = document.createElement("img");
//        image.src = `https://api.site-shot.com/1024x768/JPEG/1024/Z100/?url=${projetoUrl}&userkey=ABAIEYKBJAFIA56IU2GCYYA3UW`;
//        image.alt = "Projeto";
//        image.className = "projeto-window";

//        link.appendChild(image);
//        projetoContainer.appendChild(link);
//        galeria.appendChild(projetoContainer);
//    });
//}

//document.addEventListener("DOMContentLoaded", function() {
//    galeriaDeProjetos();
//})