import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className='relative h-screen lg:h-[140vh] overflow-hidden bg-gradient-to-b from-transparent to-black'>
      <Header/>
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />

        <MovieRow sectionTitle="Featured" />
        <MovieRow sectionTitle="Top Rated" />
      </main>
    </div>
  )
}
