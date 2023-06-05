import { IEndereco } from './Pessoa';

export interface IFuncionario {
    id?: string,
    nome: string,
    idade: number,
    cpf: string,
    rg: string,
    orgaoEmissor: string,
    genero: 'MASCULINO' | 'FEMININO',
    dataDeNascimento: string,
    estadoCivil: 'SOLTEIRO' | 'CASADO' | 'SEPARADO' | 'DIVORCIADO' | 'VIUVO',
    cargo: string,
    remuneracao: number,
    jornadaDeTrabalho: string,
    endereco: IEndereco
}
