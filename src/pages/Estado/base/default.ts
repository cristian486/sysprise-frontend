import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposEstado } from './campos';

export const estadoPadrao: PropsFormularioDinamico = {
    fields: camposEstado,
    initialValues: {
        id: '',
        nome: '',
        codigoIbge: '',
        sigla: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Estado'
};