
import type { NextPage } from 'next'
import Main from "@components/Main";
import Timeline from "@components/TimelineCustom";
import Testimonials from "@components/Testimonials";
import MyResume from "@components/MyResume";

const Home: NextPage = () => {
  return (
      <div className="space-y-14 lg:space-y-24">
        <main className="max-w-4xl mx-auto antialiased">
          <Main />
          <div className='h-24'></div>
          <Timeline />
          <Testimonials />
          <MyResume />
        </main>
      </div>
  )
}

export default Home;

