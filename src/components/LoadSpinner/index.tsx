import styles from './LoadSpinner.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function LoadSpinner() {
    return (
        <div className={styles.container}>
            <ThreeDots
                height="300"
                width="300"
                radius="9"
                color="#000"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </div>
    );
}