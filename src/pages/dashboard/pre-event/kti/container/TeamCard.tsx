import * as React from 'react';
import { toast } from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import AnggotaButton from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/AnggotaButton';
import { Peserta } from '@/types/entities/pre-event/jurnalistik';

type CardProps = {
  id_tim: string;
  name_tim: string;
  jenis_kegiatan: string;
  code_tim: string;
  ketua_tim: boolean;
  status: {
    status: boolean;
  };
  peserta: Array<Peserta>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TeamCard({
  id_tim,
  code_tim,
  name_tim,
  peserta,
  ketua_tim,
  jenis_kegiatan,
  status,
}: CardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code_tim);
    toast.success('Kode tim berhasil disalin');
  };

  return (
    <div className='p-6 rounded-xl border-typo-outline border-[1px] space-y-6'>
      <div>
        <Typography
          as='p'
          variant='caption'
          className='font-medium text-typo-icon'
        >
          Jenis Lomba
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          Karya Tulis Ilmiah
        </Typography>
      </div>
      <div>
        <Typography
          as='p'
          variant='caption'
          className='font-medium text-typo-icon'
        >
          Jenis Kegiatan
        </Typography>
        <Typography
          as='h6'
          variant='h6'
          className='font-bold text-typo-primary'
        >
          {jenis_kegiatan}
        </Typography>
      </div>
      <div className='flex flex-col gap-y-6 xl:gap-y-0 xl:flex-row xl:justify-between items-start xl:items-center'>
        <div>
          <Typography
            as='p'
            variant='caption'
            className='font-medium text-typo-icon'
          >
            Nama Tim
          </Typography>
          <Typography
            as='h6'
            variant='h6'
            className='font-bold text-typo-primary'
          >
            {name_tim}
          </Typography>
        </div>
        <div>
          <Typography
            as='p'
            variant='caption'
            className='text-typo-icon font-medium'
          >
            Kode Tim
          </Typography>
          <div className='flex items-center justify-center space-x-2'>
            <Typography
              as='h6'
              variant='h6'
              className='font-bold text-success-600'
            >
              {code_tim}
            </Typography>
            <MdContentCopy
              className='inline-block text-xl cursor-pointer'
              onClick={copyToClipboard}
            />
          </div>
        </div>
      </div>
      <div className='space-y-2'>
        <Typography
          as='p'
          variant='caption'
          className='text-typo-icon font-medium'
        >
          Status Pembayaran
        </Typography>
        {status.status ? (
          <div className='w-full h-11 rounded-lg bg-success-100 flex justify-center items-center text-center p-6 sm:p-0'>
            <Typography
              as='p'
              variant='b1'
              className='text-success-800 font-medium'
            >
              Sudah Melakukan Pembayaran
            </Typography>
          </div>
        ) : (
          <div className='w-full h-11 rounded-lg bg-critical-100 flex justify-center items-center text-center p-6 sm:p-0'>
            <Typography
              as='p'
              variant='b1'
              className='text-critical-800 font-medium'
            >
              Belum Melakukan Pembayaran
            </Typography>
          </div>
        )}
      </div>
      <div className='space-y-4'>
        <Typography as='p' variant='caption' className='text-typo-icon'>
          Anggota Tim
        </Typography>
        {peserta.map((anggota, index) => (
          <AnggotaButton
            key={index}
            {...anggota}
            id_team={id_tim}
            isTeamLead={ketua_tim}
          />
        ))}
      </div>
      {ketua_tim && (
        <div className='flex justify-end'>
          <ButtonLink
            variant='green'
            className='w-fit'
            href={`/dashboard/pre-event/jurnalistik/pembayaran?code=${id_tim}`}
          >
            Lakukan Pembayaran
          </ButtonLink>
        </div>
      )}
    </div>
  );
}