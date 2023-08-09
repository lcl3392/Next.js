import { AiFillGithub } from 'react-icons/ai';
import styles from './about.module.css'
export const About = () => {
    return (
        <section id='about' className={`con`}>
            <div className="inner">
                <h2>About me</h2>
                <div>
                    <div className={styles.about_wrap}>
                    <article>
                        <img src="/about/p.jpeg" alt="" />
                    </article>
                    <article className={styles.desc}>
                        <h3>이초롱</h3>
                        <ul>
                            <li><b>이름</b><strong>이초롱</strong></li>
                            <li><b>연락처</b><strong>010-3323-11182</strong></li>
                            <li><b>생년월일</b><strong>94.04.21</strong></li>
                            <li><b>주소</b><strong>인천시 미추홀구</strong></li>
                            <li><b>이메일</b><strong>chfhdvlcl@naver.com</strong></li>
                            <li><b>학력</b><strong>대졸</strong></li>
                            <li><b>자격증</b><strong>없음</strong></li>
                        </ul>
                        <p>
                            <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                            <a href="#" target='_blank'><i><AiFillGithub /></i></a>
                        </p>
                    </article>
                </div>
                    <div className={styles.about_bottom}>
                    Frontend를 목표로 하는 주니어 개발자입니다.<br />
                    열심히 개발에 대한 관심사를 넓혀나가고 있습니다.<br />
                    , 회사에 실질적인 도움이 되는 프론트엔드 개발자로 일하고 싶습니다.
                    </div>
                </div>
            </div>
        </section>
    );
};