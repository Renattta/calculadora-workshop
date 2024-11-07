import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/ouro.svg';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
}

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {
                item.seuOuro &&
                <div className={styles.yourImc}>
                    Depósito de ouro: {item.seuOuro.toFixed(1)} g.
                </div>
            }
        </div>
    )
}