import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposCompra } from './campos';

export const compraPadrao: PropsFormularioDinamico = {
    fields: camposCompra,
    initialValues: {
        id: '',
        documento: '',
        observacao: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Compra'
};