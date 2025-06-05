import { User } from "lucide-react";
import Image from "next/image";

import { HeroSection } from "@/components/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PAGE_PATHS,
  PROJECT_MEMBERS,
  SOLVRO_API_URL,
} from "@/config/constants";
import { fetchData } from "@/lib/api";
import type { TeamMember } from "@/lib/types";

export default async function TeamPage() {
  const { data: teamMembers } = await fetchData<{ data: TeamMember[] }>(
    `items/Team?fields=id,sort,name,photo,subtitle&filter[id][_in]=${PROJECT_MEMBERS.join(",")}&sort=sort`,
    undefined,
    SOLVRO_API_URL,
  );

  return (
    <div>
      <HeroSection subtitle={`Bez zespołu nie ma ${atob("RG93bmEK")}...`}>
        {PAGE_PATHS.team}
      </HeroSection>

      <Tabs defaultValue="solvro" className="container mx-auto px-4 pt-8 pb-16">
        <TabsList className="bg-primary h-12 w-full justify-between">
          <TabsTrigger
            value="solvro"
            className="text-lg font-medium !text-white data-[state=active]:!text-black"
          >
            Solvro
          </TabsTrigger>
          <TabsTrigger
            value="umed"
            className="text-lg font-medium !text-white data-[state=active]:!text-black"
          >
            Uniwersytet Medyczny
          </TabsTrigger>
        </TabsList>
        <TabsContent value="solvro">
          <section className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-4 p-4 sm:flex-col sm:text-center"
              >
                <div>
                  {member.photo === null ? (
                    <User
                      className="size-24 rounded-full bg-gray-200 p-8 text-gray-400 sm:size-32"
                      aria-label="No photo available"
                    />
                  ) : (
                    <Image
                      src={`${SOLVRO_API_URL}/assets/${member.photo}?width=256&height=256`}
                      width={256}
                      height={256}
                      alt={member.name}
                      className="size-24 rounded-full object-cover sm:size-32"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  {member.subtitle !== null && (
                    <p className="text-sm text-gray-500">{member.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </section>
        </TabsContent>
        <TabsContent value="umed"></TabsContent>
      </Tabs>
    </div>
  );
}
