import Typewriter from 'typewriter-effect'
import Confetti from 'react-confetti'
import { motion } from "framer-motion"
import useWindowSize from 'react-use/lib/useWindowSize'
import { wishes } from './assets/data/wishes'

function App() {
  const { width, height } = useWindowSize()


  document.addEventListener('mousemove', (e) => {
    const rotatingWishes = document.querySelectorAll('.rotating-wish');

    rotatingWishes.forEach((wish) => {
      const rect = wish.getBoundingClientRect();
      const centerX = rect.left + rect.width / 6;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const rotation = angle * (180 / Math.PI);
    });

  });



  return (

    <div className='w-screen h-screen text-center bg-black  text-white relative overflow-y-scroll  custom-cursor'
    //  style={{ background: `url(/bg.svg)` }}
     >
      <Confetti width={width} height={height} />

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 3, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div className='p-20'>
          <img src="/dawg.png" alt="" className='w-[11rem]  mx-auto mb-6 mbfth' />

          <h1 className='text-6xl font-bold font-["Macondo"] ' >It's MINISTER's bd 🎉🎉</h1>
        </div>
      </motion.div>
      <p className='text-2xl px-[20vw]'>
        <Typewriter options={{ delay : 20}}
          onInit={(typewriter) => {
            typewriter
                .typeString("Happy Birthday! 🎂")
                .typeString("<br/>")
                .pauseFor(2500)
                .typeString(
                    "On this joyous day, I want to take a moment to celebrate you, the incredible person you are. 🌟"
                )
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString(
                    "May your day be filled with laughter, love, and unforgettable moments. May the coming year bring you endless opportunities, happiness, and success. 🌈"
                )
                .pauseFor(2500)
                .typeString(
                    "May your heart be light, your smile be bright, and your spirit forever free. 🥳"
                )
                .pauseFor(2500)
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString("Encore joyeux anniversaire ! Que Dieu te bénisse et te guide dans la foi, et profite au maximum de cette journée !On t'aime fort🎉🎂🎂💖 ")
                .typeString("<b>--@Lorie</b>")
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString("Happy Birthday Ghislain 🎉, may you grow in God's grace and may He bestow you His favor on this day. Enjoy your day bro ! Happy Birthday again. ")
                .typeString("<b> --@Bella_Ariane</b>")
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString("I wish you a happy birthday. May God watch over your steps and may u be the ever warm and welcoming person that u are.")
                .typeString("<b> --@Sandra</b>")
                .typeString("<br/>")
                .typeString("<br/>")
                .typeString("Happy Birthday broskie🎂🎂 and enjoy to the fullest🍾🍾🧐")
                .typeString("<b> --@D_Regis</b>")
                .typeString("<br/>")
                .typeString("<br/>")
                .callFunction(() => {})
                .start();
          }}
        />
      </p>
      <audio src='/club.mp3' autoPlay >
        
      </audio>
      <div className='w-[20vw] h-[40vh] bg-red-500/10 absolute left-40 top-0 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-blue-200/20 absolute right-40 blur-3xl' />
      <div className='w-[20vw] h-[20vh] bg-green-200 absolute bottom-10 left-40 blur-[200px]' />
      <img src="/ballons.png" alt="" className='w-36 fixed bottom-0 left-0 mbfth' />
      <img src="/skate.png" alt="" className='w-36 fixed top-16 right-16 mbfth' />
      <img src="/bouquet.webp" alt="" className='w-64 fixed bottom-0 right-10 mbfth ' />

      <div className="wishes grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-4 px-24 mt-12 pb-12">
        {wishes.map((wish, index) => (
          <div key={index} className={`wishDiv shadow-md bg-white/10 rounded-xl backdrop-blur-lg p-2 border border-white/10 h-auto`}>
            <div className="">
              <span>"{wish.wish}"</span>
            </div>
            <div className="mt-4">
              <span className='text-lg font-bold'>{wish.from}</span>
            </div>
          </div>
        ))}
      </div>

      <p className='fixed w-full text-center bottom-0'>@GhLn - 2023</p>

    </div>

  )
}

export default App
