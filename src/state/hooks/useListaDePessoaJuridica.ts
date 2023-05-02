import { useRecoilValue } from 'recoil';
import { listaDePessoaJuridicaState } from '../atom';

const useListaDePessoaJuridica = () => {
    return useRecoilValue(listaDePessoaJuridicaState);
};

export default useListaDePessoaJuridica;