import styles from './BotaoTab.module.css'




export default function BotaoTab({children, onSelect}) {

    

    return (<button className={styles.botaoAba} onClick={onSelect}>{children}</button>)
}