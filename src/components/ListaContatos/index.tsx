import { useCallback } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IContato } from '../../types/Pessoa';
import ItemContato from './ItemContato';
import styles from './ListaContatos.module.css';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { contatosState } from '../../state/atom';

export default function ListaContatos() {

    const contatoDefault: IContato = { id: '0', email: '', telefone: '', pessoa_id: 0 };
    const [contatos, setListaContatos] = useGenericRecoilAtom<IContato[]>(contatosState);

    function adicionarNovoContato() {
        setListaContatos([...contatos, contatoDefault]);
    }


    const handleItemChange = useCallback(
        (index: number, contato: IContato) => {
            const listaContatos = [...contatos];
            listaContatos[index] = contato;
            setListaContatos(listaContatos);
        },
        [contatos]
    );

    return (
        <div className={styles.container}>
            <hr />

            <AiOutlinePlus className={`${styles.button} ${styles.add} ${styles.icon}`} onClick={adicionarNovoContato} />

            {
                contatos.map((contato, index) => {
                    return (
                        <ItemContato
                            contato={contato}
                            key={index}
                            onChange={(id, updatedItem) => handleItemChange(index, updatedItem)} />
                    );
                })
            }
        </div>
    );
}