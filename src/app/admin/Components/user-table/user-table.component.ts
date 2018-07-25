import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UserAuthService } from '../../../auth/Services/user.auth.service';
import { User } from '../../../auth/Interfaces/User';
import { CreateeditComponent } from '../createedit/createedit.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns = ['id', 'name', 'roles', 'username', 'password', 'Edit', 'Delete'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

  constructor(private userauth: UserAuthService, public dialog: MatDialog) {
    this.userauth.getUserFromApi().subscribe(x => {
      this.dataSource = new MatTableDataSource<User>(x);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

  ngOnInit() {
  }

  openEditPage(row): void {
    const dialogRef = this.dialog.open(CreateeditComponent, {
      width: '450px',
      data: { details: row }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userauth.getUserFromApi().subscribe(x => {
        this.dataSource = new MatTableDataSource<User>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(CreateeditComponent, {
      width: '450px',
      data: { details: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userauth.getUserFromApi().subscribe(x => {
        this.dataSource = new MatTableDataSource<User>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  deleteUser(userdetail) {
    // tslint:disable-next-line:prefer-const
    let id = userdetail.id;
    this.userauth.deleteuser(id).subscribe((res) => {
      this.userauth.getUserFromApi().subscribe(x => {
        this.dataSource = new MatTableDataSource<User>(x);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

}
