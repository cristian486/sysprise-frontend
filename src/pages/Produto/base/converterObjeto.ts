import { IProduto } from '../../../types/Produto';
import { produtoPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IProduto) {
    produtoPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || '',
        descricao: objeto.descricao || '',
        observacao: objeto.observacao || '',
        codigoDeBarras: objeto.codigoDeBarras || '',
        pesoBruto: objeto.pesoBruto.toString() || '',
        pesoLiquido: objeto.pesoLiquido.toString() || '',
        precoDeCompra: objeto.precoDeCompra.toString() || '',
        precoDeVenda: objeto.precoDeVenda.toString() || '',
        altura: objeto.altura.toString() || '',
        largura: objeto.largura.toString() || '',
        profundidade: objeto.profundidade.toString() || '',
        estoqueMinimo: objeto.estoqueMinimo.toString() || '',
        vendaFracionada:  '' + objeto.vendaFracionada || 'false'
    };
}