import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/ui';
import { NextPage } from 'next';
import { MainLayout } from '@/components/Layout';
import { TopHero } from '@/features/top';

const TopScreen: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <TopHero />
      </main>
    </MainLayout>
  );
};

export default TopScreen;
