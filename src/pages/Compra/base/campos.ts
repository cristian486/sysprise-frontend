import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

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
        size: 'grande'
    }
];