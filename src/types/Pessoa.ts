import { ICidade } from './Cidade';
import { IGenero } from './Funcionario';

export interface IPessoa {
    id: number,
    endereco: IEndereco,
    tipos: ITipo[],
    contatos: IContato[]
}

export interface IPessoaFisica extends IPessoa {
    razaoSocail: string,
    nomeFantasia: string,
    cnpj: string
}

export interface IPessoaJuridica extends IPessoa {
    nome: string,
    cpf: string,
    genero: IGenero,
    dataDeNascimento: Date
}

export interface IContato {
    id?: number,
    email: string,
    telefone: string
}

export interface IEndereco {
    id: number,
    rua: string,
    numero: number,
    bairro: string,
    complemento: string,
    cep: string,
    cidade: ICidade
}


export interface ITipo {
    id: number,
    nome: string
}