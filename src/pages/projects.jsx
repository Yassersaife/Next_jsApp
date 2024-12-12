import { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import clsx from 'clsx';
import { BsYoutube, BsGithub, BsGooglePlay } from 'react-icons/bs';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { baseUrl } from '../seo.config';
import data from '@/data/projects.js';

const databaseId = process.env.NOTION_PROJECT_DB_ID;
const delay = ['', 'delay-200', 'delay-500', 'delay-1000'];

function Project({ project, index }) {
  const [isLoading, setLoading] = useState(true);

  // Use useEffect to set loading to false after the component mounts
  useEffect(() => {
    setLoading(false);
  }, []);

  const { title, description, techUsed, github, link, play, image } = project;

  return (
    <Card as="li">
      <div className="aspect-w-16 aspect-h-9 group relative z-10 flex h-56 w-full items-center justify-center transition duration-500 dark:ring-0 tab:h-80 md:group-hover:scale-110 lg:h-64">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          className={clsx(
            `h-full w-full object-contain duration-1000 ease-in-out ${delay[index]}`,
            isLoading ? 'blur-lg' : 'blur-0'
          )}
          height="300"
          width="500"
          placeholder="blur"
        />
      </div>
      <h2 className="z-10 mt-6 font-heading text-xl tracking-wider text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-100/80 opacity-0 transition dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl md:group-hover:scale-100 md:group-hover:opacity-100" />
      <div className="z-10 pt-2">
        {techUsed.map((item, i) => (
          <Fragment key={i}>
            <span className="mr-2 inline-flex rounded-md font-poppins text-sm font-medium text-indigo-500/80 dark:text-indigo-400/70">
              {item}
            </span>
            {techUsed.length - 1 !== i && (
              <span className="mr-2 text-zinc-400 dark:text-zinc-500">|</span>
            )}
          </Fragment>
        ))}
      </div>
      <Card.Description>{description}</Card.Description>
      <p className="relative z-10 mt-4 flex items-center space-x-4 font-poppins text-xs font-medium text-zinc-500 transition dark:text-zinc-200">
        {github && (
          <Link
            href={github}
            className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 md:hover:text-indigo-500"
          >
            <BsGithub className="h-[0.9rem] w-[0.9rem] flex-none fill-current transition" />
            <span className="ml-2">Source Code</span>
          </Link>
        )}
        {link && (
          <Link
            href={link}
            className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 md:hover:text-indigo-500"
          >
            <BsYoutube className="h-4 w-4 flex-none fill-current transition" />
            <span className="-ml-4">Video Demo</span>
          </Link>
        )}
        {play && (
          <Link
            href={play}
            className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 md:hover:text-indigo-500"
          >
            <BsGooglePlay className="h-4 w-4 flex-none fill-current transition" />
            <span className="-ml-4">Google Play</span>
          </Link>
        )}
      </p>
    </Card>
  );
}

export default function ProjectsIndex({ projects }) {
  return (
    <>
      <NextSeo
        title="Projects"
        description="A collection of projects I've worked on."
        canonical={`${baseUrl}projects/`}
        openGraph={{
          url: `${baseUrl}projects/`,
          title: 'Projects',
          description: "A collection of projects I've worked on.",
          images: [
            {
              url: `${baseUrl}api/og?title=Projects`,
              width: 1200,
              height: 600,
              alt: `Projects | Yasser Saife `,
            },
          ],
        }}
      />
      <SimpleLayout
        preTitle="My projects"
        title=" that carry my personal touch."
        intro="I've worked on tons of little projects over the past few years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul role="list" className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2">
          {data.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
