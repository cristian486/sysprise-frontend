import React, { useState, useCallback, useEffect } from 'react';
import { IItemDaVenda } from '../../../types/Venda';
import useListaDeProdutos from '../../../state/hooks/listas/useListaDeProdutos';
import { IProduto } from '../../../types/Produto';
import styles from '../ListaProdutos.module.css';
import { IItemDaCompra } from '../../../types/Compra';

type ItemDaVendaProps = {
    item: IItemDaCompra;
    onChange: (index: string, item: IItemDaVenda) => void;
};

const ItemDaCompra: React.FC<ItemDaVendaProps> = ({ item, onChange }) => {

    const listaDeProdutosParaPesquisa = useListaDeProdutos();
    const [listaDePesquisa, setListaDePesquisa] = useState<IProduto[]>([]);


    useEffect(() => {
        setListaDePesquisa(listaDeProdutosParaPesquisa);
    }, []);


    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            const updatedItem = { ...item, [name]: value };
            if (name === 'nomeDoProduto' && value === '') updatedItem.mostrar = true;
            onChange(item.id || '0', updatedItem);
        },
        [item, onChange]
    );

    const produtoEscolhido = useCallback(
        (prod: IProduto) => {
            const updatedItem = { ...item, nomeDoProduto: prod.nome, produto_id: prod.id || '0', mostrar: false };
            onChange(item.id || '0', updatedItem);
        },
        [item, onChange]
    );

    return (
        <div className={styles.containerItem}>
            <div>
                <label className={styles.item}>
                    Produto:
                    <input
                        type="text"
                        value={item.nomeDoProduto}
                        onChange={e => {
                            handleInputChange(e);
                        }}
                        name="nomeDoProduto"
                        className={styles.item}
                    />
                </label>

                {
                    item.mostrar
                    &&
                    <div style={{ height: '15vh', overflowY: 'scroll', backgroundColor: 'white' }}>
                        {
                            listaDePesquisa.map(prod => {
                                return (
                                    <div
                                        key={prod.nome}
                                        className={styles.itemLista}
                                        onClick={() => produtoEscolhido(prod)}
                                    >
                                        {prod.nome}
                                    </div>
                                );
                            })
                        }
                    </div>
                }

            </div>

            <div>
                <label className={styles.item}>
                    Quantidade:
                    <input
                        type="number"
                        value={item.quantidade}
                        onChange={handleInputChange}
                        name="quantidade"
                        className={styles.item}
                    />
                </label>

            </div>
        </div>
    );
};

export default ItemDaCompra;