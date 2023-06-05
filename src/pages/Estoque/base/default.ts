import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposEstoque } from './campos';


export const estoquePadrao: PropsFormularioDinamico = {
    fields: camposEstoque,
    initialValues: {},
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Estado'
};