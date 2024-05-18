import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Country } from 'src/app/entities/country.enties';
import { CountryService } from 'src/app/Services/County.service';

@Component({
  selector: 'app-demo8',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo8.component.html',
  styleUrl: './demo8.component.css',
})
export class Demo8Component implements OnInit {
  countries: Country[];
  coutry: Country;
  fileInfo: File;
  filesInfo: File[];
  result: string;
  inputC: string;
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.countries = this.countryService.findAll();
    this.coutry = this.countries[0];
    let random = Math.floor(Math.random() * 11);
    console.log(random);
  }
  SelectCategory(event: any) {
    let categoryID = event.target.value;
    console.log(categoryID);
  }

  SelectCountry(event: any) {
    let countryId = parseInt(event.target.value);
    let countryf = this.countryService.findCountry(countryId);
    console.log(countryId);
    console.log(countryf);
    this.coutry = countryf;
  }
  selectFile(event: any) {
    this.fileInfo = event.target.files[0];
    console.log(this.fileInfo);
  }
  selectFiles(event: any) {
    this.filesInfo = event.target.files;
    console.log(this.filesInfo);
  }
  SelectGender(event: any) {
    let gender = event.target.value;
    console.log(gender);
  }
  changeType(event: any) {
    let typeValue = event.target.value;
    if (typeValue == 'ctof') {
      this.result = 'F = ' + parseFloat(this.inputC) * 1.8 + 32;
    } else {
      this.result == 'C = ' + (parseFloat(this.inputC) - 32) / 1.8;
    }
  }
}
