import { IUsuario } from '../../../types/Usuario';
import { usuarioPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IUsuario) {
    console.log(objeto);
    usuarioPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        login: objeto.login || '',
        senha: objeto.senha || ''
    };
}