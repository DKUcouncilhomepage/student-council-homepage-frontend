export interface ConferenceProps {
  id: number;
  title: string;
  createdDate: string;
  files: FileProps[];
  views: number;
  round: number;
  date: string;
}

export interface FileProps {
  originName: string;
  url: string;
}
