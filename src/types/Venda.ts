import { IPessoaFisica, IPessoaJuridica } from './Pessoa';

export interface IVenda {
    id?: string,
    documento:string,
    observacao: string,
    dataDeCriacao?: string,
    dataDeEntrega: string,
    status?: string,
    desconto: number,
    valorTotal: number,
    pessoa: IPessoaFisica | IPessoaJuridica,
    itensDaVenda: IItemDaVenda[]

}

export interface IItemDaVenda {
    id?: string,
    produto_id: string,
    nomeDoProduto: string,
    quantidade: number,
    valorTotal: number,
    mostrar?: boolean
}