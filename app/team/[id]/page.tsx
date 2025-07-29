import { TeamMemberDetail } from '@/components/pages/TeamMemberDetail';

export async function generateStaticParams() {
  // Khai báo các ID sẽ được build sẵn
  return [
    { id: 'john-doe' },
    { id: 'jane-smith' },
    { id: 'mike-johnson' },
    { id: 'sarah-wilson' },
    { id: 'david-brown' },
    { id: 'emily-davis' },
  ];
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  return <TeamMemberDetail memberId={params.id} />;
}