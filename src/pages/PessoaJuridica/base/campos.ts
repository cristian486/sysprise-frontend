import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposPessoaJuridica: CampoFormularioDinamico[] = [
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
        name: 'razaoSocial',
        label: 'Razão Social',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'nomeFantasia',
        label: 'Nome Fantasia',
        size: 'grande'
    },
    {
        type: 'text',
        name: 'cnpj',
        label: 'CNPJ',
        size: 'grande'
    },
];
