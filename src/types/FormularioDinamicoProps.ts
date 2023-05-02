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
    selectOptions?: {
        value: string;
        label: string;
      }[],
      
    size: 'pequeno' | 'medio' | 'grande';
}

export interface PropsFormularioDinamico {
    fields: CampoFormularioDinamico[];
    initialValues: { [key: string]: string };
    onSubmit: (values: { [key: string]: string }) => void;
    title: string;
    customFields?: {
        component: React.ReactNode;
        name: string;
    }[];
}