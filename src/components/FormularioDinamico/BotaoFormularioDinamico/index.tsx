import { AiOutlineCloseSquare } from 'react-icons/ai';
import useGenericRecoilAtom from '../../../state/hooks/useGenericRecoilAtom';
import { formularioDinamicoState } from '../../../state/atom';



export default function BotaoFormularioDinamico({limparValores}: { limparValores: () => void; }) {

    const [formSate, setFormState] = useGenericRecoilAtom<boolean>(formularioDinamicoState);
    
    return (
        <AiOutlineCloseSquare
            style={{ fontSize: '1.7rem', position: 'absolute', 'top': '1%', left: '2%', cursor: 'pointer' }}
            onClick={() => {
                setFormState(false);
                limparValores();
            }}
        />
    );
}