import { AiOutlinePlus } from 'react-icons/ai';
import { useCallback, useMemo } from 'react';
import styles from './ListaProdutos.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { itensDaCompraState } from '../../state/atom';
import { IItemDaCompra } from '../../types/Compra';
import ItemDaCompra from './ItemDaCompra';

export default function ListaItensDaCompra() {
    const itemDefault: IItemDaCompra = {id: '0', produto_id: '0', nomeDoProduto: '', quantidade: 0, valorTotal: 0, mostrar: true};
    const [itensDaCompra, setItens] = useGenericRecoilAtom<IItemDaCompra[]>(itensDaCompraState);

    const adicionarNovoItemDaCompra = () => {
        setItens([...itensDaCompra, itemDefault]);
    };

    const handleItemChange = useCallback(
        (index: number, updatedItem: IItemDaCompra) => {
            const updatedItens = [...itensDaCompra];
            updatedItens[index] = updatedItem;
            setItens(updatedItens);
        },
        [itensDaCompra]
    );

    const memoizedItensDaCompra = useMemo(
        () =>
            itensDaCompra.map((item, index) => (
                <ItemDaCompra
                    key={index}
                    item={item}
                    onChange={(id, updatedItem) => handleItemChange(index, updatedItem)}
                />
            )),
        [itensDaCompra, handleItemChange]
    );

    return (
        <div className={styles.container}>
            <hr />

            <AiOutlinePlus className={`${styles.button} ${styles.add} ${styles.icon}`} onClick={adicionarNovoItemDaCompra} />

            {memoizedItensDaCompra}
        </div>
    );
}

