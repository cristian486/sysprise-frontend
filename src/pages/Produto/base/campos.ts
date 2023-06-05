import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposProduto: CampoFormularioDinamico[] = [
    {
        type: 'number',
        name: 'id',
        label: 'Id',
        size: 'grande',
        options: {
            disabled: true
        }
    },
    {
        type: 'text',
        name: 'nome',
        label: 'Nome',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'descricao',
        label: 'Descrição',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'observacao',
        label: 'Observação',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'codigoDeBarras',
        label: 'Código De Barras (13 - 15 dígitos)',
        size: 'grande'
    },
    {
        type: 'number',
        name: 'pesoBruto',
        label: 'Peso Bruto (g)',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'pesoLiquido',
        label: 'Peso Liquido (g)',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'precoDeCompra',
        label: 'Preço de Compra',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'precoDeVenda',
        label: 'Preço de Venda',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'altura',
        label: 'Altura (cm)',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'largura',
        label: 'Largura (cm)',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'profundidade',
        label: 'Profundidade (cm)',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'estoqueMinimo',
        label: 'Estoque Mínimo',
        size: 'medio'
    },
    {
        type: 'checkbox',
        name: 'vendaFracionada',
        label: 'Permite Venda Fracionada',
        size: 'grande'
    }
];