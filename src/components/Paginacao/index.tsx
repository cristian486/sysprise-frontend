import axios from 'axios';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { paginacaoState } from '../../state/atom';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { RecoilState } from 'recoil';
import styles from './Paginacao.module.css';

interface IProps<T> {
    url: string;
    first: boolean;
    last: boolean;
    atomo: RecoilState<T>;
}


export default function PaginacaoDinamica<T>({ url, first, last, atomo }: IProps<T>) {

    const [number, setPaginacao] = useGenericRecoilAtom<number>(paginacaoState);
    const [value, setGenericValue] = useGenericRecoilAtom<T>(atomo);

    function handleClick(pagina: number) {
        console.log(`${url}?page=${pagina}`);
        setPaginacao(pagina);
        axios.get(`${url}?page=${pagina-1}`)
            .then(resp => {
                console.log(resp.data);
                setGenericValue(resp.data);
            });
    }

    return (
        <div className={styles.container}>
            <button onClick={() => (!first ? handleClick(number - 1) : null)} className={styles.botao}>
                <AiOutlineArrowLeft/>
            </button>
            {number}
            <button onClick={() => (!last ? handleClick(number + 1) : null)} className={styles.botao}>
                <AiOutlineArrowRight/>
            </button>

        </div>
    );
}