import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemListaNavegacao, ItemSubListaNavegacao } from '../../../types/Navegacao';
import styles from './ItemNavegacao.module.css';


export default function ItemNavegacao({ item }: ItemListaNavegacao) {
    const [subLista, setSubLista] = useState(false);

    return (
        <>
            <li style={{width: '100%'}}>
                <Link to={item.subNav ? '#' : item.path} className={styles.link} onClick={() => item.subNav ? setSubLista(!subLista) : null}>
                    <div>
                        {item.icon}
                        <span className={styles.label}>{item.title}</span>
                    </div>

                    {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {item.subNav && subLista
                            ? item.iconOpened
                            : item.subNav
                                ? item.iconClosed
                                : null}
                    </div> */}
                </Link>
            </li>

            {/* {
                item.subNav && subLista &&
                <ul>
                    {item.subNav?.map((subItem: ItemSubListaNavegacao, index: string) => {
                        return (
                            <li key={index}>
                                <Link to={subItem.path} className={styles.subLink}>
                                    {subItem.icon} 
                                    <span className={styles.label}>{subItem.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            } */}
        </>
    );
}