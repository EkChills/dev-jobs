type Job = {
  id: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Prisma.JsonValue | null;
  role: Prisma.JsonValue | null;
}
