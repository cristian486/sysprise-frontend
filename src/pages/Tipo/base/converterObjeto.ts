import { ITipo } from '../../../types/Pessoa';
import { tipoPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: ITipo) {
    tipoPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || ''
    };
}