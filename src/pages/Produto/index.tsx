import { useEffect } from 'react';
import useListaDeProdutos from '../../state/hooks/useListaDeProdutos';
import { headersProduto } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IProduto } from '../../types/Produto';

export default function Produto() {
    const listaDeProdutos = useListaDeProdutos();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Produtos'}
                headers={headersProduto}
                listaDeValores={listaDeProdutos}
                obterValor={(item: IProduto, key: string) => String(item[key as keyof IProduto])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}