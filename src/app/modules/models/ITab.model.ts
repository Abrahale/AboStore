export interface ITab {
    title: string;
    content: string | string[];
    removable?: boolean;
    disabled?: boolean;
    active?: boolean;
    customClass?: string;
  }