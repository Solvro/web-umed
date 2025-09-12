interface User {
  first_name: string;
  last_name: string;
  title: string;
}

interface Entity {
  id: string;
  status: string;
  user_created: User;
  user_updated: User;
}

interface SortedEntity extends Entity {
  sort: number;
}

interface DatedEntity extends Entity {
  date_created: string;
  date_updated: string;
}

interface DatedSortedEntity extends DatedEntity, SortedEntity {}

export interface Article extends DatedSortedEntity {
  content: string;
}

export interface NewsPost extends DatedSortedEntity {
  title: string;
  content: string;
}

export interface CalendarEvent extends Entity {
  title: string;
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
