import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposCategoria: CampoFormularioDinamico[] = [
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
        size: 'grande',
        required: true
    },
    {
        type: 'text',
        name: 'descricao',
        label: 'Descrição',
        size: 'grande',
        required: true
    }
];