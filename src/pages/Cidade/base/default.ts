import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposCidade } from './campos';

export const cidadePadrao: PropsFormularioDinamico = {
    fields: camposCidade,
    initialValues: {
        id: '',
        nome: '',
        codigoIbge: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Cidade'
};