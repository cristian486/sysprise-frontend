import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposCategoria } from './campos';

export const categoriaPadrao: PropsFormularioDinamico = {
    fields: camposCategoria,
    initialValues: {
        id: '',
        nome: '',
        descricao: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Categoria'
};