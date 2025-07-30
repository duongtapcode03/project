import { TeamDetail } from '@/components/pages/TeamDetail';

import { teamData } from "@/assets/data/team"; // nơi chứa dữ liệu team

export function generateStaticParams() {
  return teamData.overview.teamMembers.map((member) => ({
    id: member.id,
  }));
}


export default function TeamPage() {
  return <TeamDetail />;
}