import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';


export const headersCompra : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Fornecedor', chave: 'nomeFornecedor' },
    { nomeColuna: 'Entrega', chave: 'dataDeEntrega' }, { nomeColuna: 'Observação', chave: 'observacao' },
    { nomeColuna: 'Status', chave: 'status' }];


export const camposCompra: CampoFormularioDinamico[] = [
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
        name: 'dataDeRecebimento',
        label: 'Data de Recebimento',
        size: 'medio'
    }
];

// export const compraPadrao: PropsFormularioDinamico = {
//     fields: camposCompra,
//     initialValues: {
//         id: '15',
//         documento: 'Teste',
//         observacao: 'Testando 123'
//     },
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Compra'
// };