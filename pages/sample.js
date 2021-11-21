import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll';
import utilStyles from '../styles/utils.module.css'

export default function History() {
    return (
      <>
        <Head>
          <title>sample集</title>
        </Head>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
  　<div className={utilStyles.scroll}>
    <nav>
        <Scroll to="concept">スクロール</Scroll>
      </nav>
    </div>

        <h2>リストやってみるよー</h2>
        <ul>
            <li>リスト1</li>
            <li>リスト2</li>
            <li>リスト3</li>
      </ul>

      <section id="concept">
          <h1>ここまで</h1>
       </section>

<hr/>
        <Image src="/dashi.jpg"  width={400} height={300} />
        <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
        
      </>
    )
  }