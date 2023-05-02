import { AiOutlineCloseSquare } from 'react-icons/ai';
import setFormularioDinamicoState from '../../../state/hooks/setFormularioDinamico';

export default function BotaoFormularioDinamico() {

    const setFormState = setFormularioDinamicoState();
    
    return (
        <AiOutlineCloseSquare
            style={{ fontSize: '1.7rem', position: 'absolute', 'top': '1%', left: '2%', cursor: 'pointer' }}
            onClick={() => setFormState(false)}
        />
    );
}