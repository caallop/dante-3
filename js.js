function jogar() {
    // Gera um número aleatório entre 1 e 200
    let sorteio = Math.floor(Math.random() * 200) + 1;

    // Cria o caminho da imagem usando o número sorteado
    let caminhoImagem = `imagens/imagem${sorteio}.jpg`;  // Ajuste conforme o formato e nome das suas imagens

    // Seleciona o elemento da imagem (supondo que você tenha um <img> com id "imagem")
    let imagem = document.getElementById('imagem');

    // Atualiza o atributo "src" da imagem com o caminho gerado
    imagem.src = caminhoImagem;

    // Torna a imagem visível
    imagem.style.display = 'block';

    alert (imagem.src)
}

// Chama a função "jogar" para rodar a cada clique, por exemplo:
document.getElementById('mostrarImagem').addEventListener('click', jogar);