import Link from 'next/link'
import ShowLang from '/components/ShowLang'
import NavWithRouter from '/components/NavWithRouter'
import styles from '../page.module.css'

export default function Page3() {
  return (
    <main className={styles.main}>

      <div className={styles.grid}>
        <div className={styles.card}>
          This is another page
        </div>
        <div className={styles.card}>
          <ShowLang />
        </div>
        <div className={styles.card}>
          <Link href="/">
            Go back home
          </Link>
        </div>
        <div className={styles.card}>
          <NavWithRouter href="/">
            Go back home (with router)
          </NavWithRouter>
        </div>
      </div>
    </main>
  )
}
