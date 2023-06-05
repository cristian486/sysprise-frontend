import { IPessoaFisica } from '../../../types/Pessoa';
import { pessoaFisicaPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IPessoaFisica) {
    pessoaFisicaPadrao.initialValues = {
        id: objeto.id?.toString() ||'',
        nome: objeto.nome ||'',
        cpf: objeto.cpf ||'',
        genero: objeto.genero || 'MASCULINO',
        dataDeNascimento: objeto.dataDeNascimento ||''
    };
}
