import { TeamMemberDetail } from "@/components/pages/TeamMemberDetail";

const teamData = {
  overview: {
    teamMembers: [
      { id: "Chairman" },
      { id: "CTO" },
      { id: "CEO" },
      { id: "Leader" },
    ],
  },
};

export async function generateStaticParams() {
  return teamData.overview.teamMembers.map((member) => ({
    id: member.id,
  }));
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  return <TeamMemberDetail memberId={params.id} />;
}
