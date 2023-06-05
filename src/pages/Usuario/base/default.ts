import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposUsuario } from './campos';

export const usuarioPadrao: PropsFormularioDinamico = {
    fields: camposUsuario,
    initialValues: {
        id: '',
        login: '',
        senha: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Unidade'
};