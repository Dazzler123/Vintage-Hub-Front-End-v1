import {Component, OnInit} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Router} from '@angular/router';
import {DataSharingService} from "../../communication/data-sharing.service";

@Component({
  selector: 'app-sell-vehicle-second-form',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './sell-vehicle-second-form.component.html',
  styleUrl: './sell-vehicle-second-form.component.scss'
})
export class SellVehicleSecondFormComponent implements OnInit{

  previousPageFormData: any;

  // Variable to store the selected images
  selectedImages: string[] = [];

  constructor(private router: Router, private dataSharingService: DataSharingService) {
  }

  ngOnInit(): void {
    this.previousPageFormData = this.dataSharingService.formData;
    console.log(this.previousPageFormData);
  }

  navigateToPreviousPage(path: string) {
    this.router.navigate([path]);
  }


  // ==================================================
  // Function to handle file input change
  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    // Clear previous selected images
    this.selectedImages = [];

    // Add new selected images to the array
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push(e.target.result);
      };

      reader.readAsDataURL(files[i]);
    }
  }

}
