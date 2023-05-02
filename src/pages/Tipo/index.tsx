import { useEffect } from 'react';
import useListaDeTipos from '../../state/hooks/useListaDeTipos';
import { headersTipo } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { ITipo } from '../../types/Pessoa';

export default function Tipo() {
    const listaDeTipos = useListaDeTipos();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Tipos de Pessoa'}
                headers={headersTipo}
                listaDeValores={listaDeTipos}
                obterValor={(item: ITipo, key: string) => String(item[key as keyof ITipo])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}