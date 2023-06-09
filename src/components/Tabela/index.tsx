import React from 'react';
import { IHeader } from '../../types/Headers';
import FiltroPesquisa from '../FiltroPesquisa';
import styles from './Tabela.module.css';

interface IPropsTabelaDinamica<T> {
    nomeDaTabela: string,
    headers: IHeader[],
    listaDeValores: T[],
    clickLinha?(id: number): void,
    obterValor(item: T, key: string): string
    paginacao?: React.ReactNode;
}

export default function Tabela<T>({ nomeDaTabela, headers, listaDeValores, obterValor, clickLinha, paginacao }: IPropsTabelaDinamica<T>) {
    function renderizerTableHeader() {
        if (headers) {
            return (
                <tr>
                    {headers.map((header, index) => {
                        return (
                            <th key={index}>
                                {header.nomeColuna}
                            </th>
                        );
                    })}
                </tr>);
        }

    }

    function renderizerTableBody() {
        if (listaDeValores) {
            return listaDeValores.map((item: T, key: number) => {
                return (
                    <tr key={String(key)} onClick={async () => {
                        if (clickLinha) {
                            const itemId = Number(obterValor(item, 'id'));
                            clickLinha(itemId);
                        }
                    }}>
                        {headers.map((header, index) => {
                            return (
                                <td key={index}>
                                    {obterValor(item, header.chave)}
                                </td>
                            );
                        })}
                    </tr>
                );
            });
        } else
            return (
                <tr>
                    <td colSpan={headers.length} style={{ fontWeight: 'bolder' }}> Sem dados encontrados </td>
                </tr>
            );

    }

    return (
        <div className={styles.container}>
            <section className={styles.tabelaHeader}>
                <h1>{nomeDaTabela}</h1>
            </section>
            <section className={styles.tabelaContent}>
                <FiltroPesquisa />
                <table>
                    <thead>
                        {renderizerTableHeader()}
                    </thead>


                    <tbody>
                        {renderizerTableBody()}
                    </tbody>
                </table>
            </section>
            
            {paginacao}
        </div>
    );
}