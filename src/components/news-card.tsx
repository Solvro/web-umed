import { formatDistance } from "date-fns";
import { pl } from "date-fns/locale";
import React from "react";

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

  return (
    <Card className="bg-secondary gap-3 rounded-3xl p-4 text-lg shadow-2xl">
      <CardHeader className="relative">
        <CardTitle className="text-primary text-2xl font-bold">
          {post.title}
        </CardTitle>
        <div className="absolute top-0 right-0">
          <span className="text-center text-sm font-medium text-gray-500">
            {post.date_updated ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="cursor-pointer">
                      Utworzono {getFriendlyStringDate(post.date_created)}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edytowano {getFriendlyStringDate(post.date_updated)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <p>Utworzono {getFriendlyStringDate(post.date_created)}</p>
            )}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </CardContent>
    </Card>
  );
}
