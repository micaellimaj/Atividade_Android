async function buscarDados() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
    };
}

async function exibirDados() {
    console.log("Buscando dados...");
    const dados = await buscarDados();
    console.log("Dados recebidos:", dados);
}

exibirDados();