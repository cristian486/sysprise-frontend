import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposPessoaJuridica } from './campos';

export const pessoaJuridicaPadrao: PropsFormularioDinamico = {
    fields: camposPessoaJuridica,
    initialValues: {
        id: '',
        razaoSocial: '',
        nomeFantasia: '',
        cnpj: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Pessoa Jurídica'
};