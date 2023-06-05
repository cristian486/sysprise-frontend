import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposCidade: CampoFormularioDinamico[] = [
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
        name: 'codigoIbge',
        label: 'Código IBGE',
        size: 'grande'
    }
];