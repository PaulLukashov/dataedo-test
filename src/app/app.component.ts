import { Component } from '@angular/core';
import { User } from './core/models/user';
import { FetchDataService } from './core/services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fetchedData!: User[] | User;

  constructor(private dataService: FetchDataService) {}

  fetchData() {
    this.dataService
      .fetchData()
      .subscribe(
        (res) =>
          (this.fetchedData = res.filter(
            (user) => user.status === 'pending'
          )[1])
      );
  }
}
