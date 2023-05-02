import { useSetRecoilState } from 'recoil';
import { formularioDinamicoState } from '../atom';

const setFormularioDinamicoState = () => {
    
    const setDetalhamento = useSetRecoilState(formularioDinamicoState);

    return (mostrar: boolean) => {
        setDetalhamento({ mostrar });
    };
};

export default setFormularioDinamicoState;