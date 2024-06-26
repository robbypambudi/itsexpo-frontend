import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import { hadiahWahanaSeniContents } from '@/contents/main-event/wahana-seni/tampilan-awal';
import clsxm from '@/lib/clsxm';

export default function HadiahCard() {
  return (
    <div className='p-4 md:p-6 space-y-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography
        as='h6'
        variant='h6'
        className='font-bold text-typo-primary text-center md:text-left'
      >
        Hadiah
      </Typography>
      <div
        className={clsxm(
          'grid grid-cols-1 grid-flow-row gap-4',
          'md:grid-rows-2 md:grid-cols-none md:grid-flow-col md:gap-6'
        )}
      >
        {hadiahWahanaSeniContents.map(({ img, text, prize }, index) => (
          <div className='relative text-center' key={index}>
            <NextImage
              {...img}
              className='w-full'
              imgClassName='rounded-lg md:rounded-2xl'
              useSkeleton
              blurClassName='bg-typo-inline rounded-lg md:rounded-2xl z-10'
            />
            <div
              className={clsxm(
                'absolute top-0 w-full h-full',
                'flex flex-col justify-center items-center'
              )}
            >
              <Typography variant='p' className='font-semibold text-white'>
                {text}
              </Typography>
              <Typography variant='h5' className='font-bold text-white'>
                {prize}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
