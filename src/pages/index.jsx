import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import { generateRssFeed } from '@/lib/generateRssFeed'
import { baseUrl } from '../seo.config'
import imgyasser from '@/images/yasser2.png'
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
import cv from '../images/pdf/cv.pdf';

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = {cv};
    downloadLink.download = 'cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
export default function Home({ articles }) {
  return (
    <>
      <NextSeo canonical={`${baseUrl}`} />
      <Container className="  -mt-[64px] flex h-screen items-center justify-center md:-mt-50">
      <div className="  flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-10 md:text-left">
        <div className="  max-w-xs px-1 md:w-1/2">

          <Image
            src={imgyasser}
            alt=""
            width={400}
            height={400}
            sizes="(min-width: 50px) 16rem, 15rem"
            priority

            className="  saturate-130 transition duration-500 hover:scale-110  animate-title rounded-full shadow-2x1"
          />
        
        </div>
        <div className="max-w-2xl">
          <div className="animate-fade-in pb-4 pl-1 font-poppins text-sm font-bold tracking-widest text-zinc-600 dark:text-zinc-400 md:text-base">
            Hi, my name is
          </div>
          <div className="animate-glow hidden h-px animate-fade-left bg-gradient-to-r from-zinc-500/0 via-zinc-300/50 to-zinc-500/0 dark:from-zinc-500/0 dark:via-zinc-500/50 dark:to-zinc-500/0 md:block" />
          <h1
            className="dark:text-edge-outline-dark text-edge-outline-light z-10 animate-title bg-zinc-900 bg-clip-text font-heading 
            text-4xl tracking-wider text-zinc-800 text-transparent duration-1000 dark:bg-white sm:text-5xl"
          >
            Yasser Saife.
          </h1>
          <div className="animate-glow hidden h-px animate-fade-right bg-gradient-to-r from-zinc-500/0 via-zinc-300/50 to-zinc-500/0 dark:from-zinc-500/0 dark:via-zinc-500/50 dark:to-zinc-500/0 md:block" />
          <div className="animate-fade-in">
            <h1
              className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text pt-4 font-heading text-[1.6rem]
            tracking-wider text-transparent dark:from-purple-400
            dark:via-indigo-400 dark:to-pink-400 sm:text-5xl"
            >
              I build things for the web and mobile.
            </h1>
          </div>
          <p className="mt-4 mb-6 animate-fade-in pl-1 text-base text-zinc-600 dark:text-zinc-400 md:my-6">
            I&apos;m a full-stack engineer specializing in building in web and mobile app. My current tech stack includes React native, Javascript .
          </p>
          <Button
          onClick={handleDownload}

            variant="primary"
            className="group ml-1 h-8 animate-fade-in tracking-widest ring-2 ring-indigo-400"
          >
            Download my CV
          </Button>
          
        </div>
        </div>
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }
