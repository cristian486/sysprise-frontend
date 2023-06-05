import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposProduto } from './campos';

export const produtoPadrao: PropsFormularioDinamico = {
    fields: camposProduto,
    initialValues: {
        id: '',
        nome: '',
        descricao: '',
        observacao: '',
        codigoDeBarras: '',
        pesoBruto: '',
        pesoLiquido: '',
        precoDeCompra: '',
        precoDeVenda: '',
        altura: '',
        largura: '',
        profundidade: '',
        estoqueMinimo: '',
        vendaFracionada: 'false'
    },
    criar: (values: { [key: string]: string }) => {
        console.log('Atualizar Produto:', values);
    },
    atualizar: (values: { [key: string]: string }) => {
        console.log('Atualizar Produto:', values);
    },
    deletar: (values: { [key: string]: string }) => {
        console.log('Deletar Produto:', values);
    },
    title: 'Cadastro de Produto'
};