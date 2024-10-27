import { Time } from '@angular/common';

export interface Appointments {
  id: number;
  text: string;
  date: Date;
  time: string | null;
}
