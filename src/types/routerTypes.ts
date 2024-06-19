import { ReactNode } from "react";

export interface RouterProps {
  path: string;
  component: ReactNode;
  children?: RouterProps[];
}
