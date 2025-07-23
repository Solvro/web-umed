import { formatDate, formatDistance } from "date-fns";
import { pl } from "date-fns/locale";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { NewsPost } from "@/lib/types";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function NewsCard({ post }: { post: NewsPost }) {
  const today = new Date();

  const getFriendlyStringDate = (date: string) => {
    const dateObject = new Date(date);

    const timePassed = formatDistance(dateObject, today, {
      addSuffix: true,
      locale: pl,
    });

    return timePassed;
  };

  const createdDate = (
    <div className="bg-primary text-primary-foreground mx-auto w-fit rounded-full px-3">
      {formatDate(new Date(post.date_created), "dd.MM.yyyy", {
        locale: pl,
      })}
    </div>
  );
  const updatedDate =
    post.date_updated &&
    `Edytowano ${getFriendlyStringDate(post.date_updated)}`;

  return (
    <Card className="max-w-sm gap-3 overflow-hidden rounded-2xl p-0">
      <CardHeader className="pt-2">
        <span className="text-muted-foreground text-xs font-medium md:text-center md:text-sm">
          {updatedDate ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer">{createdDate}</div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{updatedDate}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            createdDate
          )}
        </span>
      </CardHeader>
      <Link href={`/news#${post.id}`}>
        <CardContent className="flex h-full w-full flex-col justify-between px-0">
          <div
            className="line-clamp-6 w-full px-2 text-sm sm:px-6 md:text-base lg:text-lg xl:line-clamp-8"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <CardTitle className="text-primary mt-4 w-full bg-white px-2 font-normal">
            <h3 className="py-4 text-center sm:text-lg">{post.title}</h3>
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}
