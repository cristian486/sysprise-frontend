import { IEndereco } from './Pessoa';

export interface IFuncionario {
    id?: number,
    nome: string,
    idade: number,
    cpf: string,
    rg: string,
    orgaoEmissor: string,
    genero: IGenero,
    dataDeNascimento: Date,
    estadoCivil:IEstadoCivil,
    cargo: string,
    jornadaDeTrabalho: string,
    endereco: IEndereco
}

export interface IGenero {
    genero: 'MASCULINO' | 'FEMININO'
}

export interface IEstadoCivil {
    estadoCivil: 'SOLTEIRO' | 'CASADO' | 'SEPARADO' | 'DIVORCIADO' | 'VIUVO'
}