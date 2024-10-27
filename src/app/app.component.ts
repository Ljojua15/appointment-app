import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
