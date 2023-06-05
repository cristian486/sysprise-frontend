import { IVenda } from '../../../types/Venda';
import { vendaPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: IVenda) {
    console.log(objeto);
    vendaPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        documento: objeto.documento || '',
        observacao: objeto.observacao || '',
        dataDeEntrega: objeto.dataDeEntrega || '',
        desconto: objeto.desconto.toString() || '',
    };
}