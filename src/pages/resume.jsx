import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { baseUrl } from '../seo.config'
import cv from '@/images/cv.pdf';


  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cv
    downloadLink.download = 'cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  
export default function Resume({ articles }) {
  return (
    <>
      <NextSeo canonical={`${baseUrl}resume/`} />
      <Container className="-mt-[64px] flex flex-col items-center justify-center mt-10">
      <Button
          onClick={handleDownload}

            variant="primary"
            className="group ml-1 sm:ml-60 mt-4 sm:mt-5 h-8 animate-fade-in tracking-widest ring-4 ring-indigo-400"
            >
            Download my CV
          </Button>
      <div className=" animate-fade-in flex justify-center items-center my-4 sm:my-10">
      
      <iframe
        src={cv} // استبدل بمسار ملف الـ PDF الخاص بك
        width="730"
        height="800"
        title="CV PDF"

        frameborder="0"
      ></iframe>
    </div>
      </Container>
    </>
  )
}
