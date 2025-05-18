import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export function InfoCard(props: InfoCardProps) {
  return (
    <Card className="relative h-[400px] w-[320px] bg-white shadow-md">
      <Avatar className="absolute -top-10 left-30 flex h-20 w-20 items-center justify-center rounded-full bg-white p-3 shadow-md">
        {props.icon}
      </Avatar>
      <CardHeader className="flex flex-col items-center justify-center pt-7">
        <h2 className="text-primary text-2xl font-bold">{props.title}</h2>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-2">
        <p className="text-muted-foreground h-[150px] text-center text-lg">
          {props.description}
        </p>
        <Button
          asChild
          className="mt-6 w-[250px] rounded-4xl py-6 text-lg md:mt-8 lg:mt-12"
          variant="secondary"
        >
          <Link href={props.link}>Dowiedz się więcej!</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
