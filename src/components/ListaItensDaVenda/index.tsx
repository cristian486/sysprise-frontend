import { AiOutlinePlus } from 'react-icons/ai';
import { useCallback, useMemo } from 'react';
import { IItemDaVenda } from '../../types/Venda';
import ItemDaVenda from './ItemDaVenda';
import styles from './ListaProdutos.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { itensDaVendaState } from '../../state/atom';

export default function ListaItensDaVenda() {
    const itemDefault: IItemDaVenda = {id: '0', produto_id: '0', nomeDoProduto: '', quantidade: 0, valorTotal: 0, mostrar: true};
    const [itensDaVenda, setItens] = useGenericRecoilAtom<IItemDaVenda[]>(itensDaVendaState);

    const adicionarNovoItemDaVenda = () => {
        setItens([...itensDaVenda, itemDefault]);
    };

    const handleItemChange = useCallback(
        (index: number, updatedItem: IItemDaVenda) => {
            const updatedItens = [...itensDaVenda];
            updatedItens[index] = updatedItem;
            setItens(updatedItens);
        },
        [itensDaVenda]
    );

    const memoizedItensDaVenda = useMemo(
        () =>
            itensDaVenda.map((item, index) => (
                <ItemDaVenda
                    key={index}
                    item={item}
                    onChange={(id, updatedItem) => handleItemChange(index, updatedItem)}
                />
            )),
        [itensDaVenda, handleItemChange]
    );

    return (
        <div className={styles.container}>
            <hr />

            <AiOutlinePlus className={`${styles.button} ${styles.add} ${styles.icon}`} onClick={adicionarNovoItemDaVenda} />

            {memoizedItensDaVenda}
        </div>
    );
}

