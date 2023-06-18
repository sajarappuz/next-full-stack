import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
     cache: 'no-store' 
  });
 
  if (!res.ok) {
  
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            desc
          </p>
          <div className={styles.author}>
             <Image
              src='https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
             />
             <span className={styles.username}>
              John Doe
             </span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image 
           src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
           alt=''
           fill={true}
           className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        As the golden sun ascends in the cerulean sky, a symphony of nature unfolds before our eyes. In the verdant meadows, dew-kissed blades of grass sway gently in the ethereal breeze, creating a mesmerizing dance of emerald hues. Delicate wildflowers, like vibrant brushstrokes, adorn the tapestry of the landscape, showcasing a kaleidoscope of colors that captivate the soul.
<br />
<br />
The majestic mountains, clad in their majestic attire, reach towards the heavens with unwavering pride. Their snow-capped peaks, glistening under the warm embrace of sunlight, stand as sentinels guarding the secrets of the earth. Cascading waterfalls, with their liquid ribbons, descend from lofty heights, their crystalline torrents singing an eternal lullaby as they nourish the valley below.
<br />
<br />
In the heart of the forest, a tranquil sanctuary awaits, where ancient trees stand tall, their gnarled branches outstretched in timeless wisdom. Sunbeams filter through the emerald canopy, illuminating the forest floor with specks of light, creating a celestial pattern of dappled shadows. The gentle rustle of leaves and the whispered chatter of woodland creatures form a harmonious chorus, inviting us to surrender to the embrace of nature's melody.
<br />
<br />
By the shore, the endless expanse of the ocean beckons, its cerulean waves caressing the sandy shores with a rhythmic embrace. Seagulls dance on the wind, their graceful flight a testament to the freedom bestowed upon them. The salty air carries a symphony of briny scents, awakening our senses to the vastness and grandeur of the aquatic world.
        </p>
      </div>
    </div>
  )
}

export default BlogPost