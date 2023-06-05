import { useRecoilState, RecoilState } from 'recoil';

type SetterFn<T> = (newValue: T) => void;
type ReturnValue<T> = [T, SetterFn<T>];

export default function useGenericRecoilAtom<T>(atom: RecoilState<T>): ReturnValue<T> {
    const [value, setValue] = useRecoilState<T>(atom);

    const setNewValue: SetterFn<T> = (newValue) => {
        setValue(newValue);
    };

    return [value, setNewValue];
}