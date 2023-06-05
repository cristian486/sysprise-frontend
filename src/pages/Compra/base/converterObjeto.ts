import { ICompra } from '../../../types/Compra';
import { compraPadrao } from './default';

export function converterObjetoParaValoresIniciais(objeto: ICompra) {
    compraPadrao.initialValues = {
        id: objeto.id?.toString() || '',
        documento: objeto.documento || '',
        observacao: objeto.observacao || '',
        dataDeRecebimento: objeto.dataDeRecebimento || ''
    };

    compraPadrao.fields.forEach(f => {
        f.options= {
            disabled: objeto.status === 'Finalizado'
        };
    });
}