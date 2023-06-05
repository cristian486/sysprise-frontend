import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposUnidade: CampoFormularioDinamico[] = [
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
        name: 'abreviacao',
        label: 'Abreviação',
        size: 'grande'
    }
];