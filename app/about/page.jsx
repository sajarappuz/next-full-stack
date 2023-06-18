import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='' 
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>HandCrafting award winning Digital Experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
         <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
          We are a dynamic and innovative digital company committed to shaping the future of technology. With a passion for cutting-edge solutions, we harness the power of digital transformation to help businesses thrive in the digital age. Our team of talented professionals brings together a diverse range of expertise, from software development and data analytics to user experience design and digital marketing.
            <br />
            <br />
            <br />
At our core, we believe in the transformative power of technology and its ability to revolutionize industries. We constantly stay ahead of the curve, exploring emerging trends and incorporating the latest advancements into our solutions. By staying at the forefront of technological innovation, we empower our clients to adapt, grow, and succeed in an ever-evolving digital landscape.
          </p>
         </div>
         <div className={styles.item}>
          <h1 className={styles.title}>What we do ?</h1>
          <p className={styles.desc}>
          As a leading digital company, we specialize in providing a comprehensive range of services that empower businesses to succeed in the digital realm. Our expertise spans across various domains, allowing us to deliver holistic solutions tailored to our clients' specific needs.
 <br />
 <br />
 <br />
First and foremost, we are adept at crafting engaging and user-centric websites and applications. Our talented team of designers and developers collaborate closely to create visually stunning and highly functional digital experiences. From responsive web design to intuitive mobile applications, we ensure that our clients' digital presence captures attention and drives user engagement.
            </p> 
            <Button url="/contact" text='contact'/>
         </div>
      </div>
    </div>
  )
}

export default About