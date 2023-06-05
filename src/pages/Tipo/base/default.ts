import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposTipo } from './campos';

export const tipoPadrao: PropsFormularioDinamico = {
    fields: camposTipo,
    initialValues: {
        id: '',
        nome: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Tipo'
};