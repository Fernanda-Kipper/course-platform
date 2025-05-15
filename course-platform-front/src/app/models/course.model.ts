import { Video } from "./video.model";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  instructor: string;
  category: string;
  videos: Video[];
}