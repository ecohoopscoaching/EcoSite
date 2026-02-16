
export interface Program {
  id: string;
  name: string;
  age: string;
  description: string;
  highlights: string[];
  color: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export enum ProgramType {
  MINI = 'mini',
  ROOKIE = 'rookie',
  HOOPER = 'hooper',
  GIRLS_REP = 'girls-rep',
  BOYS_REP = 'boys-rep'
}
