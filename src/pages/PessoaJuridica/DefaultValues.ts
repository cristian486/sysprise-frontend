import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';



export const headersPessoaJuridca : IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Nome', chave: 'nome' },
    { nomeColuna: 'Razão Social', chave: 'razaoSocial' }];


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

// export const pessoaJuridicaPadrao: PropsFormularioDinamico = {
//     fields: camposPessoaJuridica,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Pessoa Jurídica'
// };