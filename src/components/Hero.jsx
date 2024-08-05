import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
  id="cta"
  className="flex flex-col items-center justify-center opacity-0 translate-y-20 transition-opacity transition-transform duration-700 ease-out"
>
  <a
    href="#highlights"
    className="btn bg-black-300 text-white-299 py-2 px-8 rounded-full shadow-xl border-2 border-transparent hover:border-gray-300 hover:bg-transparent hover:text-white-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
  >
    Dapatkan Mulai Harga $199/Bulan atau $999 Langung.
  </a>
  <h1 className="mt-4 text-center text-lg font-semibold text-white-800">
    Dapatkan perawatan/service iPhone 15 Pro Max terbaik di Purwokerto, Indonesia
  </h1>
</div>


    </section>
  )
}

export default Hero