import { useEffect } from 'react';
import Tabela from '../../components/Tabela';
import { IUnidade } from '../../types/Unidade';
import { headersUnidade } from './DefaultValues';
import FormularioDinamico from '../../components/FormularioDinamico';
import useListaDeUnidades from '../../state/hooks/useListaDeUnidades';

export default function Unidade() {

    const listaUnidade : IUnidade[] = useListaDeUnidades();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Unidades'}
                headers={headersUnidade}
                listaDeValores={listaUnidade}
                obterValor={(item: IUnidade, key: string) => String(item[key as keyof IUnidade])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}