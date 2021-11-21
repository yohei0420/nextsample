import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link as Scroll } from 'react-scroll';

export default  function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="bg-dark">
      <Container>
    <Navbar expand="md" variant="dark">
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto">
        <Nav.Item as="li">
            <Link href="/" className="nav-link" activeClassName="active"><a>Home</a></Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link href="/sample" className="nav-link" activeClassName="active"><a>Sample</a></Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link href="/blog" className="nav-link" activeClassName="active"><a>Blog</a></Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container> 
  </header>
      <main className={utilStyles.main}>
      <section id="concept">
      <section className={utilStyles.headingMd}>
          <h1>どうも,青森大学4年の佐々木陽平です。</h1>
       </section>
       </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>----Blog----</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
        
      </section>
      <h2>----history----</h2>
      
      <Link href="/history/history">history</Link>
      <br/>
      <Link href="/history/second">second</Link>
      <nav>
        <Scroll to="concept"><Button>TOP</Button></Scroll>
      </nav>
      
      </main>
    </Layout>
    
  ) 

}



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

