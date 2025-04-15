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
    <Card className="bg-secondary gap-3 rounded-3xl p-4 text-lg shadow-2xl">
      <CardHeader className="relative">
        <CardTitle className="text-primary w-1/2 text-lg font-bold md:text-2xl">
          {post.title}
        </CardTitle>
        <div className="md:absolute md:top-0 md:right-0">
          <span className="text-xs font-medium text-gray-500 md:text-center md:text-sm">
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
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="md:text-md text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </CardContent>
    </Card>
  );
}
