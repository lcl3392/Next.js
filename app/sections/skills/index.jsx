import styles from './skills.module.css'
import './skills.css'
const skillList = [
    {id: 1, text: 'HTML', css: 'html', per: '100%'},
    {id: 2, text: 'CSS', css: 'css', per: '95%'},
    {id: 3, text: 'JAVASCRIPT', css: 'javascript', per: '90%'},
    {id: 4, text: 'REACT', css: 'react', per: '90%'},
    {id: 5, text: 'NODEJS', css: 'nodejs', per: '40%'},
    {id: 6, text: 'REACTJS', css: 'reactjs', per: '75%'},
    {id: 7, text: 'EXPRESSJS', css: 'expressjs', per: '80%'}
]
const imgList = [
    {id: 1, imgurl: '', text: ''}
]
export const Skills = () => {
    return (
        <section id="skills" className={`con ${styles.skills_wrap}` }>
            <div className="inner">
                <h2>Skills </h2>
                <div className={styles.skills_box}>
                <article>
                    {
                        skillList.map(item => <div key={item.id} className={styles.skill_box}>
                            <span className={styles.title}>{item.text}</span>
                            <div className={styles.skill_bar}>
                                <span className={`${styles.skill_per} ${item.css}`}>
                                    <span className={styles.tooltip}>{item.per}</span>
                                </span>
                            </div>
                        </div>)
                    }
                  </article>
                  <article>
                    <ul className={styles.list}>
                    </ul>
                  </article>
                </div>
            </div>
        </section>
    );
};