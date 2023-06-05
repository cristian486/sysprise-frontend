import { IEstado } from '../../../types/Estado';
import { estadoPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IEstado) {
    estadoPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        nome: objeto.nome || '',
        codigoIbge: objeto.codigoIbge || '',
        sigla: objeto.sigla || ''
    };
}