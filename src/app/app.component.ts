import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';

  constructor(private router: Router) {

  }

  onRegister(): void {
      console.log('register click');
      this.router.navigate(['register']);
  }

  onAbout(): void {
    console.log('about click');
    this.router.navigate(['about'])
  }

  newPage(): void {
    console.log('Поменять на вкус названия click');
    this.router.navigate(['страница'])
  }

}
