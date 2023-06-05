import { ITipo } from '../../../types/Pessoa';
import styles from './ItemTipo.module.css';

interface IProps {
    tipo: ITipo;
    onChange: (id: string) => void;
    checked: boolean;
}


export default function ItemTipo({ tipo, onChange, checked }: IProps) {
    return (
        <div className={styles.container}>
            <label htmlFor={tipo.nome}>
                {tipo.nome}
            </label>
            <input
                type='checkbox'
                name='tipo'
                value={tipo.id}
                id={tipo.nome}
                checked={checked}
                onChange={() => onChange(tipo.id || '0')}
            />
        </div>
    );
}