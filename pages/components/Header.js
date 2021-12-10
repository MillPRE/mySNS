import img from "../../public/logo.jpg"
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

function Header({ title }) {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <Image className={styles.innerContainerItem} src={img} alt={"logo image"} width={50} height={50} />
                <h1 className={styles.innerContainerItem}>{title}</h1>
            </div>
        </div>
    );
}

export default Header;