import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import Select from 'react-select';
import useListaDeProdutos from '../../state/hooks/useListaDeProdutos';
import { useState } from 'react';

import styles from './ListaProdutos.module.css';


export default function ListaProdutos() {

    const [mostrar, setMostrar] = useState<boolean>(false);

    const listaProdutos = [
        {
            label: 'Produto 1',
            value: 'PRODUTO 1'
        },
        {
            label: 'Produto 2',
            value: 'PRODUTO 2'
        },
        {
            label: 'Produto 3',
            value: 'PRODUTO 3'
        },
        {
            label: 'Produto 4',
            value: 'PRODUTO 4'
        },
        {
            label: 'Produto 5',
            value: 'PRODUTO 5'
        }
    ];

    return (
        <>
            <AiOutlinePlus className={`${styles.add} ${styles.button}`} onClick={() => setMostrar(true)}/>
            <BsTrash className={`${styles.remove} ${styles.button}`} onClick={() => setMostrar(false)}/>
            {
                mostrar ? <Select options={listaProdutos} /> : null
            }
        </>
    );
}