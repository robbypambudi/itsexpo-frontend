import * as React from 'react';

import DeskripsiCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/DeskripsiCard';
import FaqCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/FaqCard';
import HadiahCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/HadiahCard';
import SubContestCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/SubContestCard';
import TimelineCard from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/TimelineCard';
import { User } from '@/types/entities/user';

type TampilanAwal = {
  user: User;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TampilanAwal({ user }: TampilanAwal) {
  return (
    <div className='flex flex-col gap-y-6'>
      <DeskripsiCard
        isRegister={user.pre_event[0].Jurnalistik.status}
        closeDate={user.pre_event[0].Jurnalistik.close_date}
        startDate={user.pre_event[0].Jurnalistik.start_date}
      />
      <TimelineCard />
      <SubContestCard />
      {/* <JuriCard /> */}
      <HadiahCard />
      <FaqCard />
    </div>
  );
}
