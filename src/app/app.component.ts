import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from './core/models/user';
import { FetchDataService } from './core/services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fetchedData!: User[] | User;
  isLoading = false;

  constructor(private dataService: FetchDataService) {}

  fetchData() {
    this.isLoading = true;

    this.dataService
      .fetchData()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res) =>
          (this.fetchedData = res.filter(
            (user) => user.status === 'pending'
          )[1])
      );
  }
}
