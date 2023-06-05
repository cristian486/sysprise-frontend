import { IPessoa } from './Pessoa';

export interface ICompra {
    id?: string,
    documento:string,
    observacao: string,
    dataDeCriacao?: string,
    dataDeRecebimento: string,
    status?: string,
    valorTotal: number,
    pessoa: IPessoa,
    itensDaCompra: IItemDaCompra[]

}

export interface IItemDaCompra {
    id?: string,
    produto_id: string,
    nomeDoProduto: string,
    quantidade: number,
    valorTotal: number,
    mostrar?: boolean
}