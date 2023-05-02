import { useRecoilValue } from 'recoil';
import { listaDeCategoriasState } from '../atom';

const useListaDeCategorias = () => {
    return useRecoilValue(listaDeCategoriasState);
};

export default useListaDeCategorias;