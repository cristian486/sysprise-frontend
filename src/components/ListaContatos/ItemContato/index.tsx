import { useCallback } from 'react';
import { IContato } from '../../../types/Pessoa';
import styles from '../ListaContatos.module.css';

type INovoContato = {
    contato: IContato;
    onChange: (index: string, item: IContato) => void;
};


export default function ItemContato({ contato, onChange} : INovoContato) {

    const heandleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            const updatedItem = { ...contato, [name]: value };
            onChange(contato.id || '0', updatedItem);
        },
        [contato, onChange]
    );


    return (
        <div className={styles.containerItem}>
            <div>
                <label className={styles.item}>
                    E-mail:
                    <input
                        type="text"
                        value={contato.email}
                        onChange={e => heandleInputChange(e)}
                        name="email"
                        className={styles.item}
                    />
                </label>
            </div>

            <div>
                <label className={styles.item}>
                    Telefone:
                    <input
                        type="text"
                        value={contato.telefone}
                        onChange={e => heandleInputChange(e)}
                        name="telefone"
                        className={styles.item}
                    />
                </label>

            </div>
        </div>
    );

}