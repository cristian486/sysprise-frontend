export interface IPessoa {
    id: number,
    endereco: IEndereco,
    tipos: ITipo[],
    contatos: IContato[]
}

export interface IPessoaFisica extends IPessoa {
    nome: string,
    cpf: string,
    genero: 'MASCULINO' | 'FEMININO',
    dataDeNascimento: string
}

export interface IPessoaJuridica extends IPessoa {
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string
}

export interface IContato {
    id?: string,
    email: string,
    telefone: string,
    pessoa_id?: number
}

export interface IEndereco {
    id?: string,
    rua: string,
    numero: number,
    bairro: string,
    complemento: string,
    cep: string,
    cidade_id?: string;
    estado_id?: string;
}


export interface ITipo {
    id?: string,
    nome: string,
    checked?: boolean
}