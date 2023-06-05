import { IHeader } from '../../../types/Headers';

export const headersEstoque: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nomeDoProduto' },
    {nomeColuna: 'Estoque Livre', chave: 'estoque'}, {nomeColuna: 'Reservado', chave: 'reservado'},
    {nomeColuna: 'Estoque Total', chave: 'estoqueTotal'}];