import { formatDistance } from "date-fns";
import { pl } from "date-fns/locale";

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

  const createdDate = `Utworzono ${getFriendlyStringDate(post.date_created)}`;
  const updatedDate =
    post.date_updated &&
    `Edytowano ${getFriendlyStringDate(post.date_updated)}`;

  return (
    <Card className="max-w-md gap-3 overflow-hidden rounded-lg p-0 text-lg">
      <CardHeader className="pt-4">
        <span className="text-muted-foreground text-xs font-medium md:text-center md:text-sm">
          {updatedDate ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="cursor-pointer">{createdDate} </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{updatedDate}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <p>{createdDate}</p>
          )}
        </span>
      </CardHeader>
      <CardContent className="flex h-full w-full flex-col justify-between px-0">
        <div
          className="md:text-md line-clamp-6 w-full px-2 text-sm sm:px-6"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <CardTitle className="bg-muted mt-4 w-full font-normal">
          <h3 className="py-4 text-center sm:text-lg">{post.title}</h3>
        </CardTitle>
      </CardContent>
    </Card>
  );
}
