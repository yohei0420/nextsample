import Head from 'next/head'
import Image from 'next/image'

export default function Second() {
    return (
      <>
        <Head>
          <title>三社大祭</title>
        </Head>
        <h1>八戸三社大祭</h1>
        <h2>始まり</h2>
        <p>享保5年（1720）、凶作に悩む八戸の有力者たちが、法霊大明神（現在のおがみ神社）に天候の回復と豊作を祈願したところ、無事に秋の収穫を迎えることができました。その御礼として、八戸藩の許可のもと、武士や町人から寄進を募って神輿を建造し、享保6年（1721）に長者山三社堂（現在の新羅神社）に渡御したことが、八戸三社大祭の始まりと言われています。</p>
        <hr/>
        <Image src="/sansya1.jpg"  width={400} height={300} />
        <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
      </>
    )
  }