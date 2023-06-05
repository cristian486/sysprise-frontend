import { useState } from 'react';
import { PropsFormularioDinamico } from '../../types/FormularioDinamicoProps';
import styles from './FormularioDinamico.module.css';
import BotaoFormularioDinamico from './BotaoFormularioDinamico';

export default function FormularioDinamico({ fields, criar, atualizar, deletar, title, customFields, initialValues, limparValores, disableAll }: PropsFormularioDinamico) {

    let id = 0;

    for (const [chave, valor] of Object.entries(initialValues)) {
        if (chave === 'id')
            id = Number(valor);
    }

    const [formValues, setFormValues] = useState(initialValues);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }


    function meuLimparValores() {
        console.log('');
    }

    function handleCreate() {
        criar(formValues);
    }

    function handleUpdate() {
        atualizar(formValues);
    }

    function handleDelete() {
        deletar(formValues) ;
    }

    return (
        <div className={styles.container}>
            <BotaoFormularioDinamico
                limparValores={limparValores || meuLimparValores}
            />

            <h2>
                {title}
            </h2>
            <div className={styles.menu}>
                {
                    id !== undefined && Number(id) > 0 ?
                        <>
                            <button className={`${styles.custom_btn}  ${styles.btn_3} ${styles.botcaoMetadeLargura}`} onClick={handleUpdate} disabled={disableAll || false}>
                                <span>Atualizar</span>
                            </button>
                            <button className={`${styles.custom_btn} ${styles.btn_5} ${styles.botcaoMetadeLargura}`} onClick={handleDelete} disabled={disableAll || false}>
                                <span>Excluir</span>
                            </button>
                        </>
                        :
                        <button className={`${styles.custom_btn} ${styles.btn_4} ${styles.botaoTodaLargua}`} onClick={handleCreate}>
                            Gravar
                        </button>
                }
            </div>

            <form className={styles.formulario}>
                {fields.map((field) => {
                    if (field.type === 'text') {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <input
                                    type="text"
                                    name={field.name}
                                    className={`${styles[field.size]}`}
                                    disabled={field.options ? field.options.disabled : false}
                                    value={formValues[field.name]}
                                    onChange={handleInputChange}
                                    required={field.required || false}
                                />
                            </label>
                        );
                    } else if (field.type === 'password') {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <input
                                    type="password"
                                    name={field.name}
                                    className={`${styles[field.size]}`}
                                    disabled={field.options ? field.options.disabled : false}
                                    value={formValues ? formValues[field.name] : undefined}
                                    onChange={handleInputChange}
                                    required={field.required || false}
                                />
                            </label>
                        );
                    } else if (field.type === 'select' && field.selectOptions) {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <select
                                    name={field.name}
                                    value={formValues ? formValues[field.name] : undefined}
                                    onChange={handleSelectChange}
                                    className={`${styles[field.size]}`}
                                    required={field.required || false}>

                                    {field.selectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        );
                    } else if (field.type === 'date') {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <input
                                    type="date"
                                    name={field.name}
                                    className={`${styles[field.size]}`}
                                    disabled={field.options ? field.options.disabled : false}
                                    value={formValues ? formValues[field.name] : undefined}
                                    onChange={handleInputChange}
                                    required={field.required || false}
                                />
                            </label>
                        );
                    } else if (field.type === 'number') {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <input
                                    type="number"
                                    name={field.name}
                                    min={field.options ? field.options.min : 0}
                                    max={field.options ? field.options.max : 0}
                                    disabled={field.options ? field.options.disabled : false}
                                    className={`${styles[field.size]}`}
                                    value={formValues ? formValues[field.name] : undefined}
                                    onChange={handleInputChange}
                                    required={field.required || false}
                                />
                            </label>
                        );
                    } else if (field.type === 'checkbox') {
                        return (
                            <label key={field.name} className={`${styles[field.size]}`}>
                                {field.label}
                                <input
                                    type="checkbox"
                                    name={field.name}
                                    min={field.options ? field.options.min : 0}
                                    max={field.options ? field.options.max : 0}
                                    disabled={field.options ? field.options.disabled : false}
                                    className={`${styles[field.size]}`}
                                    value={formValues ? formValues[field.name] : undefined}
                                    onChange={handleInputChange}
                                    checked={formValues ? Boolean(formValues[field.name]) : false}
                                    required={field.required || false}
                                />
                            </label>
                        );
                    }
                })}

                {
                    customFields?.map((customField) => {
                        return (
                            <label key={customField.name} className={`${styles['grande']}`}>
                                {customField.label}
                                <div>
                                    {customField.component}
                                </div>
                            </label>
                        );
                    })
                }
            </form>


        </div>
    );
}