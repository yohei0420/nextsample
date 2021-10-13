import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function History() {
    return (
      <>
        <Head>
          <title>ねぶた</title>
        </Head>
        <h1>青森ねぶた祭り</h1>
        <p>「ねぶた祭」は主に青森県の各地で行われ、明かりを灯した巨大な灯籠（＝ねぶた）を山車に乗せて練り歩く大変華やかなお祭りです。その起源は奈良時代の七夕祭りまで遡ると言われており、地元の多くの人にとって一年で最も重要なイベントとされています。
中でも青森ねぶた祭は毎年200万人以上を動員し、仙台の七夕祭り、秋田竿燈（かんとう）祭りと並んで東北の三大祭りに名を連ねる大人気のお祭りです。
「ハネト」と呼ばれる踊り手がねぶたの周りを取り囲み、お囃子の音に合わせて元気よく飛び跳ねる姿を一目見ようと、全国からの観光客で賑わいます。</p>
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