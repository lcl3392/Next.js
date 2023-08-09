import Image from 'next/image'
import styles from './page.module.css'
import { About } from './sections/about'
import { Visual } from './sections/visual'
import { Skills } from './sections/skills'
import { Project } from './sections/project'
import { Career } from './sections/career'


export default function Home() {
  return (
    <main id="container">
      <Visual />
      <About />
      <Skills />
      <Project />
      <Career />
    </main>
  )
}
