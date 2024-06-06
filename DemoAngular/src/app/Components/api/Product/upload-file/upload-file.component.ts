import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './upload-file.component.html',
  host: { 'collision-id': 'UploadFileComponent' },
})
export class UploadFileComponent implements OnInit {
  constructor(private productApiService: ProductApiService) {}
  file: File;
  files: File[];
  ngOnInit(): void {}
  upload() {
    let formData = new FormData();
    formData.append('file', this.file);

    this.productApiService.upload(formData).then(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }
  selectedFile(event: any) {
    this.file = event.target.files[0];
  }
}
