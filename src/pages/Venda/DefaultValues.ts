import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';



export const headersVenda : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Cliente', chave: 'nomeCliente' },
    { nomeColuna: 'Entrega', chave: 'dataDeEntrega' }, { nomeColuna: 'Observação', chave: 'observacao' },
    { nomeColuna: 'Status', chave: 'status' }];


export const camposVenda: CampoFormularioDinamico[] = [
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
        name: 'documento',
        label: 'Documento',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'observacao',
        label: 'Observação',
        size: 'grande',
        options: {
            disabled: true
        }
    },
    {
        type: 'date',
        name: 'dataDeEntrega',
        label: 'Data de Entrega',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'desconto',
        label: 'Desconto',
        options: {
            min: 0.00,
            max: 100
        },
        size: 'medio'
    }
];

// export const vendaPadrao: PropsFormularioDinamico = {
//     fields: camposVenda,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Venda'
// };