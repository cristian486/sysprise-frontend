import { useEffect } from 'react';

import useListaDeCompras from '../../state/hooks/useListaDeCompras';
import { headersCompra } from './DefaultValues';
import { ICompra } from '../../types/Compra';
import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import ListaProdutos from '../../components/ListaProdutos';

export default function Compra() {
    const listaDeCompras = useListaDeCompras();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Vendas'}
                headers={headersCompra}
                listaDeValores={listaDeCompras}
                obterValor={(item: ICompra, key: string) => String(item[key as keyof ICompra])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}