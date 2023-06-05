import { useRecoilValue } from 'recoil';
import { listaDePessoaFisicaState } from '../../atom';

const useListaDePessoaFisica = () => {
    return useRecoilValue(listaDePessoaFisicaState);
};

export default useListaDePessoaFisica;