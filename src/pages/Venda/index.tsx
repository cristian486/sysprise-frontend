import { useEffect } from 'react';
import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useListaDeVendas from '../../state/hooks/useListaDeVendas';
import { IVenda } from '../../types/Venda';
import { headersVenda } from './DefaultValues';

export default function Venda() {
    const listaDeVendas = useListaDeVendas();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Vendas'}
                headers={headersVenda}
                listaDeValores={listaDeVendas}
                obterValor={(item: IVenda, key: string) => String(item[key as keyof IVenda])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}