import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface PatientResponse {
  Items: Array<PatientData>;
  Count: number;
  ScannedCount: number
}

interface PatientData {
  bed: number;
  patient_name: string;
  status: string;
  assigned_nurse_id: number;
  need_urgency: number;
  need: string;
  assigned_nurse: string;
  ID: number;
  timestamp_created_epoch: number;
  patient_id: number;
  timestamp_created: string;
  room: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly baseUrl = 'https://8ollpgyfd5.execute-api.us-west-2.amazonaws.com/beta?nurse=Manik';
  data: Array<PatientData> = [];
  columns: string[] = [
    'bed',
    'patient name',
    'status',
    'assigned nurse id',
    'need urgency',
    'need',
    'assigned nurse',
    'id',
    'timestamp created epoch',
    'patient id',
    'timestamp created',
    'room'
  ];

  constructor(private http: HttpClient) {
  }



  getData() {
    return this.http.get<PatientResponse>(this.baseUrl).subscribe(response => this.data = response.Items);
  }
}
