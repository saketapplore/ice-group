import Image from "next/image";
import styles from './ServiceCard.module.css';

interface ServiceProps {
    title: string;
    description: string;
    image: string;
}

export default function ServiceCard({ title, description, image }: ServiceProps) {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrap}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
}
