export interface LoadProfile {
  name: string;
  quantity: number;
  hoursPerDay: number;
  powerRating: number;
}

export type URLProps = {
  params?: { id?: string };
  searchParams?: { [key: string]: string | undefined };
};
