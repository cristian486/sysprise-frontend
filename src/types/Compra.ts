import { IPessoa } from './Pessoa';

export interface ICompra {
    id?: number,
    documento:string,
    observacao: string,
    dataDeCriacao?: Date,
    dataDeRecebimento: Date,
    status?: string,
    valorTotal: number,
    pessoa: IPessoa,
    itensDaVenda: IItemDaCompra[]

}

export interface IItemDaCompra {
    id?: number,
    produto_id: number,
    nomeDoProduto: string,
    quantidade: number,
    valorTotal: number
}