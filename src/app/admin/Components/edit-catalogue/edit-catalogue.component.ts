import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CatalogueList } from '../../../catalogue/Interfaces/cataloguelist';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { CatalogueListService } from '../../../catalogue/services/cataloglistservice';

@Component({
  selector: 'app-edit-catalogue',
  templateUrl: './edit-catalogue.component.html',
  styleUrls: ['./edit-catalogue.component.css']
})
export class EditCatalogueComponent implements OnInit {

  type;
  image;
  typeControl;
  imageControl;
  catalogueForm: FormGroup;
  catalogue = new CatalogueList();

  constructor(private builder: FormBuilder, public dialogRef: MatDialogRef<EditCatalogueComponent>,
    private catalogService: CatalogueListService) {

    this.typeControl = new FormControl('', Validators.required);
    this.imageControl = new FormControl('', Validators.required);

    this.catalogueForm = this.builder.group({
      'type': this.typeControl,
      'image': this.imageControl,
   });
  }

  ngOnInit() {

    this.typeControl
        .valueChanges
        .subscribe (value => {
          this.type = value;
        });

        this.imageControl
        .valueChanges
        .subscribe (value => {
          this.image = value;
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCatalogue() {
    this.catalogue.type = this.type;
    this.catalogue.image = this.image;
    this.catalogService.postCatalogueList(this.catalogue).subscribe((res) => {
       console.log(res);
    });

  }

}
