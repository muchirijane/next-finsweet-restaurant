import Layout from '../components/layout/Layout'
import AboutUs from '../components/UI/Home/AboutUs/AboutUs'
import Hero from '../components/UI/Home/Hero/Hero'
import Serving from '../components/UI/Home/Serving/Serving'

export default function Home() {
  return (
    <Layout pageTitle="Home | FinSweet Restaurant">
      <Hero />
      <AboutUs />
      <Serving />
    </Layout>
  )
}
