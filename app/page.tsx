'use client';

export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Hero from './components/ui/hero';

function PageContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const goal = searchParams.get('goal') || '';
  const struggle = searchParams.get('struggle') || '';

  console.log('Params:', { name, goal, struggle });

  return <Hero name={name} goal={goal} struggle={struggle} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
