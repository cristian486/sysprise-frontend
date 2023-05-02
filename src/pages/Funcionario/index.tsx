import { useEffect } from 'react';
import useListaDeFuncionarios from '../../state/hooks/useListaDeFuncionarios';
import { headersFuncionario } from './DefaultValues';
import Tabela from '../../components/Tabela';
import FormularioDinamico from '../../components/FormularioDinamico';
import { IFuncionario } from '../../types/Funcionario';

export default function Funcionario() {
    const listaDeFuncionarios = useListaDeFuncionarios();

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Tabela nomeDaTabela={'Lista de Funcionários'}
                headers={headersFuncionario}
                listaDeValores={listaDeFuncionarios}
                obterValor={(item: IFuncionario, key: string) => String(item[key as keyof IFuncionario])} />

            {/* <FormularioDinamico /> */}
        </>
    );
}