import { PropsFormularioDinamico } from '../../../types/FormularioDinamicoProps';
import { camposFuncionario } from './campos';

export const funcionarioPadrao: PropsFormularioDinamico = {
    fields: camposFuncionario,
    initialValues: {
        id: '',
        nome: '',
        cpf: '',
        rg: '',
        idade: '',
        dataDeNascimento: '',
        orgaoEmissor: '',
        genero: 'MASCULINO',
        estadoCivil: 'SOLTEIRO',
        cargo: '',
        remuneracao: '',
        jornadaDeTrabalho: ''
    },
    criar: () => console.log('Funcionou'),
    atualizar: () => console.log('Funcionou'),
    deletar: () => console.log('Funcionou'),
    title: 'Cadastro de Funcionario'
};