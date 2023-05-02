import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';



export const headersProduto : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' },
    { nomeColuna: 'Código de Barras', chave: 'codigoDeBarras' }];


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
        label: 'Código De Barras',
        size: 'grande'
    },
    {
        type: 'number',
        name: 'pesoBruto',
        label: 'Peso Bruto',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'pesoLiquido',
        label: 'Peso Liquido',
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
        label: 'Altura',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'largura',
        label: 'Largura',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'profundidade',
        label: 'Profundidade',
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
        size: 'medio'
    }
];

// export const produtoPadrao: PropsFormularioDinamico = {
//     fields: camposProduto,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Produto'
// };