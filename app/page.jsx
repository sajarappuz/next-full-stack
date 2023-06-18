import Image from 'next/image'
import styles from './page.module.css'
import  Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
<h1 className={styles.title}>Better Designs For Your Products</h1>
<p className={styles.description}>
  Turning your ideas into reality. We bring your ideas to wings 
  that can fly higher.
</p>
 <Button url="/portfolio" text='See Our Works' />
      </div>
      <div className={styles.item}> 
      <Image src={Hero} alt='#' className={styles.img} />
    </div>
    </div>
  )
}
