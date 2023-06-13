import Link from 'next/link'
import ShowLang from '/components/ShowLang'
import NavWithRouter from '/components/NavWithRouter'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          This is the home page
        </div>
        <div className={styles.card}>
          <ShowLang />
        </div>
        <div className={styles.card}>
          <Link href="/page2">
            Go to page 2 (same layout)
          </Link>
        </div>
        <div className={styles.card}>
          <NavWithRouter href="/page2">
            Go to page 2 (same layout, nav with router)
          </NavWithRouter>
        </div>
        <div className={styles.card}>
          <Link href="/page3">
            Go to page 3 (other layout)
          </Link>
        </div>
        <div className={styles.card}>
          <NavWithRouter href="/page3">
            Go to page 3 (other layout, nav with router)
          </NavWithRouter>
        </div>
      </div>
    </main>
  )
}
