import { RecoilState } from "recoil";

export interface IPaginacao<T> {
    url: string;
    first: boolean;
    last: boolean;
    atomo: RecoilState<T>;
}