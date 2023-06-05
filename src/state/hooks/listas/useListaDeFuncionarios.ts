import { useRecoilValue } from 'recoil';
import { listaDeFuncionarioState } from '../../atom';

const useListaDeFuncionarios = () => {
    return useRecoilValue(listaDeFuncionarioState);
};

export default useListaDeFuncionarios;