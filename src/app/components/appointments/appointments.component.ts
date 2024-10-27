import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointments } from '../../interfaces/appointments';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  text: string = '';
  date!: Date;
  time: string | null = '00:00';

  appointments: Appointments[] = [];

  constructor() {}

  addApontmant() {
    if (this.text.trim().length && this.date && this.time) {
      let newAppointment: Appointments = {
        id: this.appointments.length + 1,
        text: this.text,
        date: this.date,
        time: this.time,
      };

      this.appointments.push(newAppointment);

      this.text = '';
      this.date = new Date();
      this.time = '';

      console.log(this.appointments);
    }
  }
}
