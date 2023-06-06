import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.grid}>

        <div className={styles.card}>
          This is another page
        </div>
      </div>
    </main>
  )
}
