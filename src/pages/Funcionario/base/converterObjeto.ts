import { IFuncionario } from '../../../types/Funcionario';
import { funcionarioPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IFuncionario) {
    funcionarioPadrao.initialValues = {
        id: objeto.id?.toString() ||'',
        nome: objeto.nome ||'',
        cpf: objeto.cpf ||'',
        rg: objeto.rg ||'',
        idade: objeto.idade.toString() ||'',
        dataDeNascimento: objeto.dataDeNascimento ||'',
        orgaoEmissor: objeto.orgaoEmissor ||'',
        genero: 'MASCULINO',
        estadoCivil: 'SOLTEIRO',
        cargo: objeto.cargo ||'',
        remuneracao: objeto.remuneracao.toString() ||'',
        jornadaDeTrabalho: objeto.jornadaDeTrabalho ||'',
    };
}
