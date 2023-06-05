import { ICategoria } from './Categoria';
import { IUnidade } from './Unidade';

export interface IProduto {
    id?: string,
    nome: string,
    descricao: string,
    observacao: string,
    codigoDeBarras: string,
    pesoBruto: number,
    pesoLiquido: number, 
    precoDeCompra: number,
    precoDeVenda: number,
    altura: number,
    largura: number,
    profundidade: number,
    estoqueMinimo: number,
    vendaFracionada: boolean,
    unidade: IUnidade,
    categoria: ICategoria
}