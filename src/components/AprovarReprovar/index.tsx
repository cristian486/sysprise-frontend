import { atualizarStatusMovimentacaoState } from '../../state/atom';
import useAsyncCall from '../../state/hooks/useAsyncCall';
import useGenericRecoilAtom from '../../state/hooks/useGenericRecoilAtom';
import { IAtualizarStatusMovimentacao } from '../../types/AtualizarStatus';
import styles from '../FormularioDinamico/FormularioDinamico.module.css';

export default function AprovarReprovar() {

    const [statusAtualizacao, setStatusAtualizacao] = useGenericRecoilAtom<IAtualizarStatusMovimentacao>(atualizarStatusMovimentacaoState);

    function clickHandle(aprovar: boolean) {
        const useCall = useAsyncCall();
        const { url, id } = statusAtualizacao;
        console.log(url);
        console.log(id);
        console.log(aprovar);
        useCall(url, 'patch', { id, aprovar }).catch(error => console.log(error));
    }

    return (
        <div className={styles.menu} style={{ paddingTop: '1rem' }}>
            <button onClick={e => {
                e.preventDefault();
                clickHandle(true);
            }} disabled={statusAtualizacao.id === 0} className={`${styles.custom_btn}  ${styles.btn_3} ${styles.botcaoMetadeLargura}`}>
                Aprovar
            </button>
            <button onClick={() => clickHandle(false)} disabled={statusAtualizacao.id === 0} className={`${styles.custom_btn}  ${styles.btn_5} ${styles.botcaoMetadeLargura}`}>
                Reprovar
            </button>
        </div>
    );
}