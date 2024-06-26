import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

import AOS from 'aos';
import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/components/buttons/Button';
import SwiperButton from '@/components/buttons/SwiperButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import SEO from '@/components/SEO';
import Typography from '@/components/typography/Typography';
import {
  aboutUsSwiperContents,
  sejarahITSExpo,
  slogan,
} from '@/contents/about-us';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import {
  HeroBackground,
  HeroCaptionBackground,
} from '@/pages/about-us/container/HeroBackground';
import MascotBackground from '@/pages/about-us/container/MascotBackground';
import { SejarahBackground2 } from '@/pages/about-us/container/SejarahBackground';
function AboutUs() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  const [tema, setTema] = useState<number>(0);
  return (
    <Layout>
      <SEO title='About Us' description='This is about us page' />
      <main className='flex flex-col bg-tainted-100 scroll-smooth'>
        {/* About Us */}
        <section id='about-us' className='relative'>
          <div className='relative overflow-hidden min-h-screen'>
            <div className='justify-center md:w-fit md:mx-auto items-center pt-24 z-10 md:pt-32'>
              <div className='flex-col pt-28 relative md:flex'>
                <Typography
                  variant='h1'
                  as='h1'
                  className='font-primary text-center w-full'
                  data-aos='fade-up'
                >
                  about its expo
                </Typography>
                <UnstyledLink
                  href='#about-itsexpo'
                  className={clsxm(
                    'mt-10 w-10 h-10 z-50 flex mx-auto justify-center items-center rounded-full bg-success-600',
                    'animate-bounce'
                  )}
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <IoIosArrowDown className='z-50 fill-warning-100 w-5 h-5' />
                </UnstyledLink>
              </div>
              <div className='w-full flex justify-between md:absolute md:max-w-lg md:top-40'>
                <NextImage
                  src='/aboutus/hero-left-bird.png'
                  alt='Hero Left Bird Image'
                  width={200}
                  height={250}
                  className='md:pt-10 md:-left-60 -left-10 absolute '
                  data-aos='fade-right'
                  data-aos-delay='400'
                />
                <NextImage
                  src='/aboutus/hero-right-bird.png'
                  alt='Hero Right Bird Image'
                  width={190}
                  height={250}
                  className='md:pt-10 md:-right-20 absolute -right-10 '
                  data-aos='fade-left'
                  data-aos-delay='400'
                />
              </div>
            </div>
            {/* Hero Background */}
            <HeroBackground />
          </div>
        </section>

        {/* Apa itu ITS EXPO ? */}
        <section id='about-itsexpo'>
          <div className='bg-gradient-to-b from-[#DD8D00] to-[#804400] pt-10  md:py-16 relative'>
            <div
              className='w-full h-full relative pb-20 md:pb-36
            '
            >
              <HeroCaptionBackground />
              <div
                className='flex flex-col space-y-4 layout md:space-y-6 md:pt-10'
                data-aos='fade-down'
              >
                <Typography
                  variant='h2'
                  as='h2'
                  className='text-typo-white font-primary text-center '
                  data-aos='fade-down'
                  data-aos-delay='200'
                >
                  apa itu its expo
                </Typography>
                <Typography
                  variant='p'
                  as='p'
                  className='text-typo-white font-normal text-justify md:text-center md:max-w-6xl px-2 mx-auto '
                  data-aos='fade-down'
                  data-aos-delay='300'
                >
                  ITS Expo merupakan sebuah acara yang mewadahi seluruh Keluarga
                  Mahasiswa ITS untuk mempertunjukan hasil pemikirannya kepada
                  masyarakat umum yang diharapkan membawa kebermanfaatan nyata
                  untuk masyarakat, dimana di dalamnya memiliki tiga elemen
                  yaitu Seni, Ilmu, dan Budaya. ITS EXPO 2023 memiliki tujuan
                  utama yaitu Menampilkan dan menunjukkan Karya Mahasiswa ITS di
                  lingkungan masyarakat guna mengikis gap antara mahasiswa dan
                  masyarakat.
                </Typography>
              </div>
            </div>
            <div className='w-full relative pb-32 sm:pb-48 md:pb-0 -bottom-32 md:pt-16 md:top-14 z-50 '>
              <div className='absolute  w-full h-full'>
                <Swiper
                  spaceBetween={24}
                  slidesPerView={'auto'}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop
                  modules={[Autoplay]}
                  className='md:w-full -mt-20 md:-mt-32'
                  data-aos='fade-left'
                >
                  <div className='absolute top-0 left-0 h-full flex items-center px-4 z-10'>
                    <SwiperButton direction='prev' size='large' />
                  </div>
                  <div className='absolute top-0 right-0 h-full flex items-center px-4 z-10'>
                    <SwiperButton direction='next' size='large' />
                  </div>

                  {aboutUsSwiperContents.map((content, index) => (
                    <SwiperSlide key={index} className='md:max-w-fit'>
                      <div className='w-full flex justify-center'>
                        <NextImage
                          className='w-3/5 md:w-96'
                          imgClassName='rounded-lg'
                          {...content}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Sejarah */}
        <section
          id='sejarah'
          className='relative w-full flex flex-col items-center bg-[#2A607B] overflow-hidden'
        >
          <Typography
            variant='h3'
            as='h3'
            className='text-typo-white font-primary mb-11 mt-52'
          >
            sejarah its expo
          </Typography>

          {/* Sejarah Background */}
          <div className='w-full h-full flex justify-center overflow-y-hidden'>
            <NextImage
              src='/aboutus/background-sejarah-mobile.png'
              alt='sejarah mobile background'
              width='334'
              height='2000'
              className='absolute w-[334px] sm:w-[600px] block h-full md:hidden'
            />
            <NextImage
              src='/aboutus/background-sejarah-desktop.png'
              alt='sejarah desktop background'
              width='688'
              height='2401'
              className='absolute hidden w-full md:max-w-[900px] xl:max-w-[1000px] layout md:block h-full'
            />
            <div className='absolute w-full top-[12%] h-full md:top-[15%] flex justify-between items-end'>
              <NextImage
                src='/aboutus/sejarah-desktop-left-decoration.png'
                alt='sejarah left background'
                width='350'
                height='2000'
                className='hidden md:block h-full'
              />
              <NextImage
                src='/aboutus/sejarah-desktop-right-decoration.png'
                alt='sejarah right background'
                width='300'
                height='1600'
                className='hidden md:block h-full'
              />
              <NextImage
                src='/aboutus/sejarah-mobile-left-decoration.png'
                alt='sejarah left mobile background '
                width='550'
                height='2000'
                className='block md:hidden h-full'
              />
              <NextImage
                src='/aboutus/sejarah-mobile-right-decoration.png'
                alt='sejarah right mobile background '
                width='500'
                height='2000'
                className='block md:hidden h-full'
              />
            </div>

            {/* Sejarah Content */}
            <div
              className={clsxm(
                'relative w-full layout lg:w-7/12 overflow-hidden lg:overflow-visible',
                'flex flex-col items-center gap-y-10 md:gap-y-20',
                'p-7 md:mt-12 font-secondary pt-10 md:pt-0 '
              )}
            >
              <div
                className={clsxm(
                  'absolute top-0 w-full h-full flex justify-center',
                  'pt-20 sm:pt-16 md:pt-14 pb-24 md:pb-14'
                )}
                data-aos='fade-up'
                data-aos-offset='200'
              >
                <div className='w-1 h-full bg-typo md:mr-0  mr-44 sm:mr-72' />
              </div>

              {sejarahITSExpo.map((content, index) => {
                const parity = index % 2 === 0 ? 'even' : 'odd';

                return (
                  <div
                    key={index}
                    className={clsxm(
                      'grid grid-rows-1 grid-cols-2 md:grid-cols-5',
                      'md:gap-x-8 gap-y-2 md:gap-y-0',
                      'md:grid-flow-col-dense'
                    )}
                  >
                    <div
                      className='md:col-start-3 flex justify-center items-center'
                      data-aos='fade-up'
                    >
                      <NextImage {...content.img} />
                    </div>
                    <div
                      className={clsxm(
                        'flex flex-col items-center gap-y-2 md:gap-y-0',
                        'text-start md:col-span-2',
                        [
                          parity === 'odd' &&
                            'md:col-start-1 md:text-right lg:mr-10',
                          parity === 'even' &&
                            'md:col-start-4 md:text-left lg:ml-10',
                        ]
                      )}
                      data-aos={
                        (parity === 'odd' && 'fade-left') ||
                        (parity === 'even' && 'fade-right')
                      }
                      data-aos-delay='300'
                    >
                      <Typography
                        variant='h6'
                        className='w-full font-bold text-typo-white md:w-72 lg:w-96'
                      >
                        {content.year}
                      </Typography>
                      <Typography
                        variant='b2'
                        className='text-typo-white w-44 sm:w-72 md:w-72 lg:w-96 md:break-words'
                      >
                        {content.caption}
                      </Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Sejarah Illustration */}
          <SejarahBackground2 />
        </section>

        {/* Tema section */}
        <section
          id='tema'
          className='relative bg-landing-preevent pt-20 md:pt-8 overflow-hidden'
        >
          <div className='layout my-12'>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white hidden md:block sm:text-center'
              data-aos='fade-down'
            >
              tema its expo
            </Typography>
            <Typography
              variant='h2'
              className='font-primary text-center text-typo-white block md:hidden sm:text-center'
              data-aos='fade-down'
            >
              tema its expo
            </Typography>
            <div className='w-full flex flex-col gap-4 mt-8 mb-4 md:flex-row-reverse max-w-lg mx-auto md:max-w-7xl md:gap-x-16 md:pt-16 md:pb-28 z-50'>
              <div
                className='flex flex-col gap-y-4 md:w-1/2 md:gap-y-9 z-50'
                data-aos='fade-left'
              >
                <div className='flex gap-x-6 z-50'>
                  <Button
                    variant='green'
                    size='large'
                    className={clsx([
                      'bg-turquoise-500  w-1/2  ',
                      tema === 0 && 'border border-white',
                    ])}
                    onClick={() => setTema(0)}
                  >
                    <Typography
                      variant='b1'
                      className='font-secondary font-semibold text-typo-white'
                    >
                      Grand Theme
                    </Typography>
                  </Button>
                  <Button
                    variant='green'
                    size='large'
                    className={clsx([
                      'bg-turquoise-500 text-typo-white font-secondary font-semibold w-1/2 z-50',
                      tema === 1 && 'border border-white',
                    ])}
                    onClick={() => setTema(1)}
                  >
                    <Typography
                      variant='b1'
                      className='font-secondary font-semibold text-typo-white'
                    >
                      Slogan
                    </Typography>
                  </Button>
                </div>
                <div className="w-full h-96 md:h-full border-4 rounded-lg border-white/95 bg-white bg-opacity-30 overflow-hidden relative bg-[url('/images/aboutus/tema-bg-card.png')] bg-cover">
                  {tema === 1 ? (
                    <div className='px-5 py-7 md:py-11 md:px-12 flex flex-col lg:justify-start md:gap-y-11  sm:justify-around h-full w-full '>
                      <Typography
                        variant='t'
                        className='font-secondary md:hidden font-bold text-navy-100'
                      >
                        Salam Seni, Ilmu, dan Budaya
                      </Typography>
                      <Typography
                        variant='h5'
                        className='font-secondary hidden md:block font-bold text-navy-100 '
                      >
                        Salam Seni, Ilmu, dan Budaya
                      </Typography>
                      <ul className='pt-10 sm:pt-0 flex flex-col gap-y-2'>
                        {slogan.map((content, index) => (
                          <li
                            className='list-item list-disc mx-4  pb-0 md:pb-4 lg:pb-10  text-typo-white'
                            key={index}
                          >
                            <Typography
                              variant='t'
                              className='font-secondary text-navy-100  ml-4'
                            >
                              <span className='font-semibold'>
                                {content.title}
                              </span>
                              {content.caption}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className='px-5 py-7 md:py-11 md:px-12 flex flex-col lg:justify-start md:gap-y-11 justify-between sm:justify-around h-full w-full '>
                      <Typography
                        variant='t'
                        className='font-secondary md:hidden font-bold text-navy-100'
                      >
                        Gunita Akatara
                      </Typography>
                      <Typography
                        variant='h5'
                        className='font-secondary hidden md:block font-bold text-navy-100 '
                      >
                        Gunita Akatara
                      </Typography>
                      <Typography
                        variant='t'
                        className='text-navy-100 text-justify'
                      >
                        Gunita memiiki arti kebudayaan, keilmuan, dan
                        kepandaian. Akatara memiliki arti cahaya.
                      </Typography>
                      <Typography
                        variant='t'
                        className='text-navy-100 text-justify'
                      >
                        Secara filosofis, ITS EXPO 2023 kembali hadir dengan
                        membawa cahaya baru untuk ITS dan ITS EXPO berupa
                        kegiatan yang menggabungkan 3 bidang yaitu seni, ilmu,
                        dan budaya.
                      </Typography>
                    </div>
                  )}
                </div>
              </div>
              <div
                className='sm:w-full gap-x-4 flex gap-y-4 md:w-1/2 md:gap-x-10'
                data-aos='fade-right'
              >
                <NextImage
                  src='/aboutus/tema-figure.png'
                  alt='tema figure'
                  width={164}
                  height={320}
                  className='w-full h-full z-10'
                />
                <NextImage
                  src='/aboutus/tema-figure2.png'
                  alt='tema figure'
                  width={164}
                  height={320}
                  className=' w-full h-full pt-10 md:pt-20 z-10'
                />
              </div>
            </div>

            {/* Tema Background */}
            <NextImage
              src='/aboutus/tema-bg-left.png'
              alt='tema-bg-left'
              width='260'
              height='471'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -left-20 md:-left-10 md:w-[40%] max-w-2xl'
            />
            <NextImage
              src='/aboutus/tema-bg-right.png'
              alt='tema-bg-right'
              width='260'
              height='471'
              imgClassName='object-contain'
              className='absolute z-0 -bottom-[10vw] -right-20 md:-right-10 md:w-[40%] max-w-2xl'
            />
          </div>
          <NextImage
            src='/aboutus/ourmascot-barrier-desktop.png'
            alt='pattern illustration'
            width='1440'
            height='88'
            className='w-[1440px] min-w-full'
            priority={true}
          />
        </section>

        {/* Mascot */}
        <section id='mascot' className='relative '>
          <Typography
            variant='h1'
            as='h1'
            className='text-center pt-10'
            font='upakarti'
            data-aos='fade-down'
          >
            meet our mascot
          </Typography>

          <MascotBackground />

          <div className='flex flex-col md:flex-row justify-center relative sm:max-w-xl md:max-w-7xl sm:mx-auto lg:gap-x-4 xl:gap-x-48 pb-24 '>
            <NextImage
              src='/aboutus/particle2-3.png'
              height={150}
              width={400}
              className='absolute left-32 -top-16 hidden md:block'
              alt='particle'
              data-aos='fade-right'
              data-aos-delay='100'
            />
            <div className='flex flex-col justify-center px-6 md:py-10 '>
              <NextImage
                src='/aboutus/saka.png'
                className='w-full px-4 pt-10 md:pt-0 max-w-[375px] mx-auto md:h-[385px] z-50'
                height={370}
                width={365}
                alt='saka'
                data-aos='zoom-in'
                data-aos-delay='300'
              />
              <div className='flex flex-col pt-16 md:pt-10 md:max-w-lg'>
                <div className='relative w-fit mx-auto px-28 md:px-40'>
                  <Typography
                    variant='h3'
                    as='h3'
                    className='text-center'
                    font='upakarti'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    saka
                  </Typography>
                  <NextImage
                    className='absolute right-6 bottom-2 md:left-10 md:bottom-8'
                    alt='particle'
                    height={40}
                    width={40}
                    src='/aboutus/particle.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    height={30}
                    width={30}
                    className='absolute left-20 -top-4 md:left-32 md:top-0'
                    alt='highlight'
                    src='/aboutus/highlight-saka.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                </div>
                <Typography
                  variant='p'
                  className='text-discolored-800 mt-4 text-justify'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  Saka terinspirasi dari legenda raja yang membawa sebuah
                  peradaban baru di tanah jawa dan merupakan asal mula dari
                  aksara jawa. Saka menjadi lambang sebuah inovasi juang baru
                  dan keteraturan dalam berhubungan secara luar dan dalam, serta
                  menciptakan sebuah ketertiban. Saka hadir untuk memberi
                  peradaban baru untuk mahasiswa dalam berinovasi untuk selalu
                  berkembang tanpa henti.
                </Typography>
              </div>
            </div>
            <div className='flex flex-col px-6 md:py-10'>
              <div className='relative '>
                <NextImage
                  src='/aboutus/wana.png'
                  className='w-full px-4 pt-10 md:max-w-[420px] mx-auto md:h-[385px] z-50'
                  height={253}
                  width={325}
                  alt='wana'
                  data-aos='zoom-in'
                  data-aos-delay='300'
                />
                <NextImage
                  className='absolute md:left-56 md:-top-20  top-10 md:w-16 w-10 left-10'
                  alt='particle'
                  height={40}
                  width={40}
                  src='/aboutus/particle.png'
                  data-aos='fade-left'
                  data-aos-delay='200'
                />
              </div>
              <div className='flex-col flex pt-16 md:pt-20 md:max-w-lg'>
                <div className='relative w-fit mx-auto px-28 md:px-40'>
                  <Typography
                    variant='h3'
                    as='h3'
                    className='text-center'
                    data-aos='fade-up'
                    data-aos-delay='200'
                    font='upakarti'
                  >
                    wana
                  </Typography>
                  <NextImage
                    className='absolute -right-10 -bottom-16  md:-right-24 md:-bottom-20 w-4 md:w-10'
                    src='/aboutus/particle3.png'
                    alt='particle'
                    height={40}
                    width={40}
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                  <NextImage
                    height={30}
                    width={30}
                    className='absolute right-20 md:right-32 -top-4 md:top-0'
                    alt='highlight'
                    src='/aboutus/highlight-wana.png'
                    data-aos='fade-down'
                    data-aos-delay='200'
                  />
                </div>
                <Typography
                  variant='p'
                  className='text-discolored-800 font-light mt-4 text-justify'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  Wana terinspirasi dari hewan mitologi Lembuswana yang
                  dilambangkan dengan kepala gajah dan badan sapi, mewakili
                  sifat kecerdasan, kesetiaan, dan kesederhanaan. Wana menjadi
                  lambang kecerdasan dan semangat untuk memajukan teknologi
                  dengan bijak dan mempererat hubungan antara masyarakat,
                  industri, dan akademisi. Wana muncul untuk memberi semangat
                  untuk para mahasiswa/i untuk selalu mengembangkan kecerdasan
                  teknologi yang berguna di masa kini dan mendatang.
                </Typography>
              </div>
            </div>
          </div>
          <NextImage
            width={1525}
            height={310}
            className='w-full
          '
            src='/aboutus/mascot-bg-btm.png'
            alt='mascot background'
          />
        </section>

        {/* Past memories */}
        <section
          id='past-memories'
          className={clsxm(
            // Custom Tailwind Class
            'relative bg-[#00587A]'
          )}
        >
          <div className='pt-8'>
            <Typography
              variant='h4'
              className='font-primary md:hidden text-center text-white leading-none mb-36'
              data-aos='fade-down'
            >
              past memories
            </Typography>
            <Typography
              variant='h1'
              className='font-primary hidden md:block text-center text-white leading-none mb-48'
              data-aos='fade-down'
            >
              past memories
            </Typography>

            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay]}
              className='md:w-full -mt-20 md:-mt-32'
              data-aos='fade-left'
            >
              <div className='absolute top-0 left-0 h-full flex items-center px-4 z-10'>
                <SwiperButton direction='prev' size='large' />
              </div>
              <div className='absolute top-0 right-0 h-full flex items-center px-4 z-10'>
                <SwiperButton direction='next' size='large' />
              </div>

              {aboutUsSwiperContents.map((content, index) => (
                <SwiperSlide key={index} className='md:max-w-fit'>
                  <div className='w-full flex justify-center'>
                    <NextImage
                      className='w-3/5 md:w-96'
                      imgClassName='rounded-lg'
                      {...content}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Typography
              variant='c'
              className='text-typo-white text-center md:hidden pb-32 pt-28 layout'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              “Saling memahami karena kita seniman, saling menghargai karena
              kita budayawan, saling menyikapi karena kita ilmuwan. Karena kita
              akan mengadakan sebuah pesta, menumbuhkan cinta dan menorehkan
              sebuah cerita di ITS. ITS EXPO, Salam Seni, Ilmu, dan Budaya.”
            </Typography>
            <Typography
              variant='h6'
              className='text-typo-white hidden md:block text-center mx-auto max-w-4xl py-32'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              “Saling memahami karena kita seniman, saling menghargai karena
              kita budayawan, saling menyikapi karena kita ilmuwan. Karena kita
              akan mengadakan sebuah pesta, menumbuhkan cinta dan menorehkan
              sebuah cerita di ITS. ITS EXPO, Salam Seni, Ilmu, dan Budaya.”
            </Typography>
          </div>
          <NextImage
            src='/aboutus/pm-particles.png'
            alt='past memories particle'
            height={80}
            width={90}
            className='absolute top-12 md:hidden w-full max-w-sm sm:max-w-lg left-1/2 -translate-x-1/2'
          />
          <NextImage
            src='/aboutus/memories-flower-right.png'
            height={120}
            width={85}
            className='absolute top-64 right-0 md:hidden'
            alt='flower right'
          />
          <NextImage
            src='/aboutus/memories-flower-left.png'
            height={140}
            width={80}
            className='absolute top-4 left-0 md:hidden'
            alt='flower left'
          />
        </section>
      </main>
    </Layout>
  );
}

export default AboutUs;
