import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

export const camposPessoaFisica: CampoFormularioDinamico[] = [
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
        name: 'cpf',
        label: 'CPF',
        size: 'grande'
    },
    {
        type: 'select',
        name: 'genero',
        label: 'Gênero',
        size: 'medio',
        selectOptions: [
            {
                label: 'Masculino',
                value: 'MASCULINO'
            },
            {
                label: 'Feminino',
                value: 'FEMININO'
            }
        ]
    },
    {
        type: 'date',
        name: 'dataDeNascimento',
        label: 'Data de Nascimento',
        size: 'medio'
    }
];