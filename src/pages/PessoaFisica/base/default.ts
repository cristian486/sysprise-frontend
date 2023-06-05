import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposPessoaFisica } from './campos';

export const pessoaFisicaPadrao: PropsFormularioDinamico = {
    fields: camposPessoaFisica,
    initialValues: {
        id: '',
        nome: '',
        cpf: '',
        genero: 'MASCULINO',
        dataDeNascimento: ''
    },
    criar: (values: { [key: string]: string }) => console.log(values),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Pessoa Física'
};