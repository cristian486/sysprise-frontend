import { ChangeEvent } from 'react';

export interface CampoFormularioDinamico {
    type: 'text' | 'select' | 'number' | 'date' | 'checkbox' | 'password';
    name: string;
    label: string;
    options?: {
        min?: number;
        max?: number;
        value?: number;
        disabled?: boolean;
        step?: number;
    },
    required?: boolean,
    selectOptions?: {
        value: string;
        label: string;
    }[],

    size: 'pequeno' | 'medio' | 'grande';
}

export interface IFormCustomField {
    component: React.ReactNode;
    name: string;
    label: string;
    required?: boolean;
}

export interface PropsFormularioDinamico {
    fields: CampoFormularioDinamico[];
    initialValues: { [key: string]: string };
    criar: (values: { [key: string]: string }) => void;
    atualizar: (values: { [key: string]: string }) => void;
    deletar: (values: { [key: string]: string }) => void;
    limparValores?: () => void;
    title: string;
    customFields?: IFormCustomField[];
    disableAll?: boolean;
}