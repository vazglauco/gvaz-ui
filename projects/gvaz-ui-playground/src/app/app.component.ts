import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxGvazUiComponent } from '../../../ngx-gvaz-ui/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxGvazUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gvaz-ui-playground';
}
