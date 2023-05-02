import { useEffect } from 'react';
import useListaDeUsuarios from '../../state/hooks/useListaDeUsuarios';
import { headersUsuario } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IUsuario } from '../../types/Usuario';

export default function Usuario() {

    const listaDeUsuarios = useListaDeUsuarios();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Usuários'}
                headers={headersUsuario}
                listaDeValores={listaDeUsuarios}
                obterValor={(item: IUsuario, key: string) => String(item[key as keyof IUsuario])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}