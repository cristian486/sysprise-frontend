import { useEffect } from 'react';
import FormularioDinamico from '../../components/FormularioDinamico';
import Tabela from '../../components/Tabela';
import useListaDeEstados from '../../state/hooks/useListaDeEstados';
import { IEstado } from '../../types/Estado';
import { headersEstado } from './DefaultValues';


export default function Estado() {
    const listaDeEstados = useListaDeEstados();

    useEffect(() => {
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Vendas'}
                headers={headersEstado}
                listaDeValores={listaDeEstados}
                obterValor={(item: IEstado, key: string) => String(item[key as keyof IEstado])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}