import Layout from '../components/layout/Layout'
import AboutUs from '../components/UI/Home/AboutUs/AboutUs'
import Hero from '../components/UI/Home/Hero/Hero'

export default function Home() {
  return (
    <Layout pageTitle="Home | FinSweet Restaurant">
      <Hero />
      <AboutUs />
    </Layout>
  )
}
