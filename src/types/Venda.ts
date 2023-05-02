import { IPessoaFisica, IPessoaJuridica } from './Pessoa';

export interface IVenda {
    id?: number,
    documento:string,
    observacao: string,
    dataDeCriacao?: Date,
    dataDeEntrega: Date,
    status?: string,
    desconto: number,
    valorTotal: number,
    pessoa: IPessoaFisica | IPessoaJuridica,
    itensDaVenda: IItemDaVenda[]

}

export interface IItemDaVenda {
    id?: number,
    produto_id: number,
    nomeDoProduto: string,
    quantidade: number,
    valorTotal: number
}