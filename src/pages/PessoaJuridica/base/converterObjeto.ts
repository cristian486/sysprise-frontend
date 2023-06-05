import { IPessoaJuridica } from '../../../types/Pessoa';
import { pessoaJuridicaPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IPessoaJuridica) {
    pessoaJuridicaPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        razaoSocial: objeto.razaoSocial || '',
        nomeFantasia: objeto.nomeFantasia || '',
        cnpj: objeto.cnpj || ''
    };
}
