import { useEffect } from 'react';
import useListaDePessoaJuridica from '../../state/hooks/useListaDePessoaJuridica';
import { headersPessoaJuridca } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IPessoaJuridica } from '../../types/Pessoa';

export default function PessoaJuridica() {
    const listaDePessoaJuridica = useListaDePessoaJuridica();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Vendas'}
                headers={headersPessoaJuridca}
                listaDeValores={listaDePessoaJuridica}
                obterValor={(item: IPessoaJuridica, key: string) => String(item[key as keyof IPessoaJuridica])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}