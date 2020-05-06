import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ViewReportComponent } from './view-report/view-report.component';
import { ReportService } from './report-service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [ViewReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgxDatatableModule,
    HttpModule
  ],
   providers:[ReportService]
})
export class ReportModule { }
