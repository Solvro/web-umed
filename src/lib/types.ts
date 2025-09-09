interface Entity {
  id: string;
  title: string;
  status: string;
  user_created: string;
  user_updated: string;
}

export interface NewsPost extends Entity {
  sort: number;
  date_created: string;
  date_updated: string;
  content: string;
}

export interface CalendarEvent extends Entity {
  date: string;
  description: string;
}

export type SocialLinkType = "www" | "github" | "facebook" | "instagram";

export interface Organization {
  name: string;
  description: string;
  contactUrl: string;
}

export interface OrganizationWithSocials extends Organization {
  socials: Partial<Record<SocialLinkType, string>>;
}
