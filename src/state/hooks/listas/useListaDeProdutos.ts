import { useRecoilValue } from 'recoil';
import { listaDeProdutosState } from '../../atom';

const useListaDeProdutos = () => {
    return useRecoilValue(listaDeProdutosState);
};

export default useListaDeProdutos;