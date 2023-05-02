import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';


export const headersFuncionario : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' },
    { nomeColuna: 'Cargo', chave: 'cargo' }, { nomeColuna: 'Gênero', chave: 'genero' }];


export const camposFuncionario: CampoFormularioDinamico[] = [
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
        size: 'medio'
    },
    {
        type: 'text',
        name: 'rg',
        label: 'RG',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'idade',
        label: 'Idade',
        size: 'medio',
        options: {
            min: 18,
            max: 100
        }
    },
    {
        type: 'date',
        name: 'dataDeNascimento',
        label: 'Data de Nascimento',
        size: 'medio'
    },
    {
        type: 'text',
        name: 'orgaoEmissor',
        label: 'Órgão Emissor',
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
        type: 'select',
        name: 'estadoCivil',
        label: 'Estado Civil',
        size: 'medio',
        selectOptions: [
            {
                label: 'Solteiro(a)',
                value: 'SOLTEIRO'
            },
            {
                label: 'Casado(a)',
                value: 'CASADO'
            },
            {
                label: 'Separado(a)',
                value: 'SEPARADO'
            },
            {
                label: 'Divorciado(a)',
                value: 'DIVORCIADO'
            },
            {
                label: 'Viúvo(a)',
                value: 'VIUVO'
            }
        ]
    },
    {
        type: 'text',
        name: 'cargo',
        label: 'Cargo',
        size: 'medio'
    },
    {
        type: 'number',
        name: 'remuneracao',
        label: 'Remuneração',
        size: 'medio',
        options: {
            min: 500,
            max: 100000
        }
    },
    {
        type: 'text',
        name: 'jornadaDeTrabalho',
        label: 'Jornada De Trabalho',
        size: 'grande'
    }
];

// export const funcionarioPadrao: PropsFormularioDinamico = {
//     fields: camposFuncionario,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Funcionario'
// };