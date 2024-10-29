import { CommonModule, Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointments } from '../../interfaces/appointments';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  text: string = '';
  date!: Date;
  time: string | null = '00:00';

  appointments: Appointments[] = [];

  constructor() {}

  ngOnInit(): void {
    let savedAppo = localStorage.getItem('appo');
    this.appointments = savedAppo ? JSON.parse(savedAppo) : [];
  }
  addAppo() {
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

      localStorage.setItem('appo', JSON.stringify(this.appointments));
    }
  }

  removeAppo(index: number) {
    this.appointments.splice(index, 1);
    this.appointments.forEach((appointment, idx) => {
      appointment.id = idx + 1;
    });
    localStorage.setItem('appo', JSON.stringify(this.appointments));
  }
}
