import { useRecoilValue } from 'recoil';
import { listaDeCidadeState } from '../atom';

const useListaDeCidades = () => {
    return useRecoilValue(listaDeCidadeState);
};

export default useListaDeCidades;