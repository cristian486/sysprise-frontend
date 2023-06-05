import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposUnidade } from './campos';

export const unidadePadrao: PropsFormularioDinamico = {
    fields: camposUnidade,
    initialValues: {
        id: '',
        nome: '',
        abreviacao: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Unidade'
};