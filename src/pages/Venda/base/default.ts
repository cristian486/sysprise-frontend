import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposVenda } from './campos';

export const vendaPadrao: PropsFormularioDinamico = {
    fields: camposVenda,
    initialValues: {
        id: '',
        documento: '',
        observacao: '',
        dataDeEntrega: '',
        desconto: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Venda'
};