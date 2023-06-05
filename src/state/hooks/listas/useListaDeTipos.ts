import { useRecoilValue } from 'recoil';
import { listaDeTipoState } from '../../atom';

const useListaDeTipos = () => {
    return useRecoilValue(listaDeTipoState);
};

export default useListaDeTipos;