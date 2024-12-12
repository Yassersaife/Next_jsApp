import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import { Card } from '@/components/Card'

import { BsTwitter, BsGithub, BsArrowDown } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiBootstrap,
  SiFirebase,
  SiJupyter,
  SiFlask,
} from 'react-icons/si'
import { DiFlutter } from 'react-icons/di';


import { DiNodejs } from 'react-icons/di'
import nodejs from '../images/node.png'
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import portraitImage from '@/images/yasser.png'
import { baseUrl } from '../seo.config'
import node from '../images/node.png'

import pal from '../images/pal.png'

const Certificates = [
  {
    name: 'Node js',
    image: node,
  },
  {
    name: 'QA Manual Tester',

    image: pal,
  },
]

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          className,
          'group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'
        )}
      >
        <Icon className="mr-3 h-[1.2rem] w-[1.2rem] flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Skills({ className, icon: Icon, children }) {
  return (
    <li>
      <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
        <Icon
          className={clsx(
            className,
            'mr-3 h-[1.2rem] w-[1.2rem] fill-indigo-500/70 dark:fill-indigo-300'
          )}
        />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description=" I am a junior-level expert in frontend mobile apps, web applications, and QA testing."
        canonical={`${baseUrl}about/`}
        openGraph={{
          url: `${baseUrl}about/`,
          title: 'About',
          description:
            " I am a junior-level expert in frontend mobile apps, web applications, and QA testing.",

          images: [
            {
              url: `${baseUrl}api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Blog | Yasser Saife`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5">
                <Image
                  src={portraitImage}
                  alt="Yasser Saife"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="saturate-130 transition duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="font-heading text-4xl tracking-wider text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m{' '}
              <span
                className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text
            text-transparent dark:from-purple-400 dark:via-indigo-400
            dark:to-pink-400"
              >
                Yasser Saife.
              </span>{' '}
              <br />I live in Tulkarm, where I break things & learn fast.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a junior-level expert in frontend mobile apps, web applications, and QA testing. I have solid experience
                in web development, having worked on various projects during university and completed full training at
                Paltel. I specialize in frontend development and QA, with strong skills in multiple technologies and
                frameworks.
              </p>
              <div className="cursor-default">
                <span className="font-poppins font-bold tracking-widest underline">
                  Skills I have
                </span>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 font-poppins md:grid-cols-3"
                >
                                  <div>

                <Skills
                  icon={DiFlutter}
                  className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                >
                  Flutter
                </Skills>
                </div>

                  <div>
                    <Skills
                      icon={SiJavascript}
                      className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                    >
                      Javascript
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiReact}
                      className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                    >
                      React
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiTailwindcss}
                      className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                    >
                      Tailwind css
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiNextdotjs}
                      className="group-hover:fill-black dark:group-hover:fill-white"
                    >
                      Next.js
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={DiNodejs}
                      className="group-hover:fill-blue-400"
                    >
                      Node js
                    </Skills>
                  </div>

                  <div>
                    <Skills
                      icon={SiFirebase}
                      className="group-hover:fill-yellow-400 dark:group-hover:fill-yellow-300"
                    >
                      Firebase
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={AiOutlineCheckCircle}
                      className="group-hover:fill-blue-400 dark:group-hover:fill-blue-300"
                    >
                       QA Testing

                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiReact}
                      className="group-hover:fill-orange-400"
                    >
                      React Native
                    </Skills>
                  </div>
                  <div>
                    <Skills
                      icon={SiFlask}
                      className="group-hover:fill-black dark:group-hover:fill-white"
                    >
                      Flask
                    </Skills>
                  </div>
                </ul>
              </div>
              <div className="cursor-default">
                <h1 className="my-10 text-center text-4xl font-bold">
                  Certificates i have
                  <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-purple-500"></hr>
                </h1>

                <div className="flex flex-col space-y-28">
                  {Certificates.map((project, idx) => {
                    return (
                      <div key={idx}>
                        <div className="animate-slideUpCubiBezier animation-delay-2  flex flex-col md:flex-row md:space-x-12">
                          <div className=" md:w-1/2">
                            <Image
                              src={project.image}
                              alt=""
                              width={1000}
                              height={1000}
                              className="rounded-xl shadow-xl hover:opacity-70"
                            />
                          </div>
                          <div className="mt-8 md:w-1/2">
                            <h1 className="mb-6 text-4xl font-bold">
                              {project.name}
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex justify-center pt-8 md:hidden">
                <Button
                  href="/projects"
                  variant="primary"
                  className="group h-8 tracking-widest ring-2 ring-indigo-400"
                >
                  See my projects
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden font-poppins lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center">
              <ul role="list" className="space-y-6">
                <SocialLink
                  href="https://github.com/Yassersaife"
                  icon={BsGithub}
                  className=""
                >
                  Connect on GitHub
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/yasser-saife-220b82240/"
                  icon={FaLinkedinIn}
                  className=""
                >
                  Connect on LinkedIn
                </SocialLink>
                <div className="flex justify-center">
                  <div className="w-24 border-t border-zinc-300 dark:border-zinc-600/40"></div>
                </div>
                <SocialLink
                  href="mailto:y.saife2@gmail.com"
                  icon={MdEmail}
                  className=""
                >
                  y.saife2@gmail.com
                </SocialLink>
                <Button
                  href="/projects"
                  variant="primary"
                  className="group w-full tracking-widest ring-2 ring-indigo-400"
                >
                  See my projects
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  )
}
