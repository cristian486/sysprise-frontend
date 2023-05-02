import { useEffect } from 'react';
import useListaDePessoaFisica from '../../state/hooks/useListaDePessoaFisica';
import { headersPessoaFisica } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IPessoaFisica } from '../../types/Pessoa';

export default function PessoaFisica() {
    const listaPessoaFisica = useListaDePessoaFisica();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Pessoas Físicas'}
                headers={headersPessoaFisica}
                listaDeValores={listaPessoaFisica}
                obterValor={(item: IPessoaFisica, key: string) => String(item[key as keyof IPessoaFisica])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}