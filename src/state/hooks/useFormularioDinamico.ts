import { useRecoilValue } from 'recoil';
import { formularioDinamicoState } from '../atom';

const useFormularioDinamicoState = () => {
    
    return useRecoilValue(formularioDinamicoState);
};

export default useFormularioDinamicoState;