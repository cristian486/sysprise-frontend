import { ICidade } from '../../../types/Cidade';
import { cidadePadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: ICidade) {
    cidadePadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || '',
        codigoIbge: objeto.codigoIbge || ''
    };
}