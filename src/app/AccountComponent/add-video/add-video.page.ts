import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/validators/requiredFileType';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.page.html',
  styleUrls: ['./add-video.page.scss']
})
export class AddVideoPage implements OnInit {
  private addVideo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addVideo = formBuilder.group({
      title: ['', Validators.required],
      video: ['', [Validators.required, requiredFileType('mp4')]]
    });
  }
  logReport() {
    alert('Published');
  }

  ngOnInit() {}
}
