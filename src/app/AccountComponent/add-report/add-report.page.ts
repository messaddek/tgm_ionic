import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.page.html',
  styleUrls: ['./add-report.page.scss']
})
export class AddReportPage implements OnInit {
  private addReport: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addReport = formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      body: ['', Validators.required]
    });
  }
  logReport() {
    alert('Published');
  }
  ngOnInit() {}
}
