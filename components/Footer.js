import styles from '../styles/Footer.module.css'


function Footer(props){
        const name = props.footerInfo.name;
        const address = props.footerInfo.address;
        const email = props.footerInfo.email;
        const github = props.footerInfo.github;

        return(
            <div className={styles.outerContainer}>
                    <p className={styles.footerContents}>
                        😺 owner : {name}, 🏡 address : {address}, ✉ email : {email}, 🧸 github : {github}
                    </p>
            </div>
        )
}

export default Footer;