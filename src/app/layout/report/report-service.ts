import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReportService {
    subjectUrl = 'http://localhost:8080/report';
  constructor(private http: Http) { }

  getReport(startDate, endDate) {
    return this.http.get(this.subjectUrl + '?startDate=' + startDate + '&endDate=' + endDate);
  }
}
