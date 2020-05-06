import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ReportService } from '../report-service';
import { ReportModel } from '../report.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {


 subjects: Array<ReportModel>;
 rows: Array<ReportModel > = [];
 startDate: any;
 endDate: any;
  @ViewChild(DatatableComponent, null) table: DatatableComponent;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.startDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.getAll();
  }

  getAll() {
    this.reportService.getReport(this.startDate, this.endDate).subscribe(
      data => {
        this.subjects = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.subjects;
      }, error => {

      }
    );
  }
  onEndDateChange(event) {
    this.endDate = event.target.value;
    this.getAll();
  }

  onStartDateChange(event) {
    this.startDate = event.target.value;
    this.getAll();
  }
}
