import { CampoFormularioDinamico, PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import { IHeader } from '../../types/Headers';

export const headersUsuario: IHeader[] = [{ nomeColuna: 'ID', chave: 'id' }, { nomeColuna: 'Login', chave: 'login' }];


export const camposUsuario: CampoFormularioDinamico[] = [
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
        name: 'login',
        label: 'Login',
        size: 'grande'
    },
    {
        type: 'password',
        name: 'senha',
        label: 'Senha',
        size: 'grande'
    }
];

// export const usuarioPadrao: PropsFormularioDinamico = {
//     fields: camposUsuario,
//     onSubmit: () => console.log('Funcionou'),
//     title: 'Cadastro de Unidade'
// };