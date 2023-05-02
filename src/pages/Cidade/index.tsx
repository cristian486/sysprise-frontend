import { useEffect } from 'react';
import useListaDeCidades from '../../state/hooks/useListaDeCidades';
import { headersCidade } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { ICidade } from '../../types/Cidade';


export default function Cidade() {
    const listaDeCidades = useListaDeCidades();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Cidades'}
                headers={headersCidade}
                listaDeValores={listaDeCidades}
                obterValor={(item: ICidade, key: string) => String(item[key as keyof ICidade])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}