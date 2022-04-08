//import SSR caching image tag
import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About(){
    return(
        <div>
            <h1 className={styles.coolText}>About Me</h1>
            <p>i am so cool</p>
            {/* loading an image locally */}
            <Image 
                src="/vercel.svg"
                alt='the vercel logo for demo purposes'
                width={500}
                height={500}
            />
            {/* loading an image from another hosting domain */}
            <Image 
                src="https://placekitten.com/300/300"
                alt="a kitten picture"
                width={500}
                height={500}
                // layout='fill'
            />
        </div>
    )
}