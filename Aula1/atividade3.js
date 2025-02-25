const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    descricao(){
        return `Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}.`;
    }
};

console.log(carro.descricao());