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

export type TableDetailProps = {
  data: Record<
    string,
    { title: string; value: any; href?: string | null; valueClassName?: string }
  >;
  options?: {
    dateFormat: DateFormat;
  };
};

export type DateFormat =
  | "MM/DD/YYYY"
  | "MM/DD/YY"
  | "MMM. DD, YYYY"
  | "MMMM DD, YYYY"
  | "MMM. YYYY"
  | "MMMM YYYY"
  | "MMM. DD"
  | "MMMM DD"
  | "YYYY-MM-DD";
