import { CampoFormularioDinamico } from '../../../types/FormularioDinamicoProps';

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