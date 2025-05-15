export interface Video {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: number;
  lessons: Lesson[];
  gumletAssetId: string;
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  duration: number;
  completed?: boolean;
} 