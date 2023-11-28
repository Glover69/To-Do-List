'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import Image from "next/image";


const BackButton = () => {

 const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  
  return (
    <>
     <Image onClick={handleGoBack} src="/svgs/chevron-left.svg" width={25} height={25} alt="" />
    </>
  )
}

export default BackButton