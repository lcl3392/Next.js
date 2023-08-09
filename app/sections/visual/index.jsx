import styles from './visual.module.css'

export const Visual = () => {
    return (
        <section id="visual" className={styles.visual}>
            <div className={`inner ${styles.visual_inner}`}>
                <h2>
                    <span>EZEN</span>
                    <span>PROTFOLIO</span>
                </h2>
                <p>새로운 분야에 도전할수 있는 노력하는 프론트엔드 개발자가 되겠습니다.</p>
                <p>Next.js로 PORTFOLIO사이트를 제작했습니다.</p>
            </div>
        </section>
    );
};
