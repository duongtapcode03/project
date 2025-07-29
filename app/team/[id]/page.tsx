import { TeamMemberDetail } from '@/components/pages/TeamMemberDetail';

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  return <TeamMemberDetail memberId={params.id} />;
}