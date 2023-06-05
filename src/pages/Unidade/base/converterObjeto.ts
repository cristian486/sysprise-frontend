import { IUnidade } from '../../../types/Unidade';
import { unidadePadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IUnidade) {
    unidadePadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || '',
        abreviacao: objeto.abreviacao || ''
    };
}