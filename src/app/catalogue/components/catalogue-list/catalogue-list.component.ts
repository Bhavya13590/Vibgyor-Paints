import { Component, OnInit } from '@angular/core';
import { CatalogueListService } from '../../services/cataloglistservice';
import { CatalogueList } from '../../Interfaces/cataloguelist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  catalogueList: CatalogueList[];
  constructor(private catalogue: CatalogueListService, private router: Router) { }

  ngOnInit() {
    this.catalogue.getCatalogueList().subscribe(x => this.catalogueList = x);
  }

}
