import{ useEffect } from 'react';
import { ClientReviews } from './ClientReviews/ClientReviews';
import { ImportandOfSansa } from './ImportandOfSansa/ImportandOfSansa';
import { SensaInfo } from './SensaInfo/SensaInfo';
import { Banner } from './Banner/Banner';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
     <Banner/>
      <SensaInfo />
      <ClientReviews />
      <ImportandOfSansa />
    </div>
  );
}

