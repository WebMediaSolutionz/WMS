import { Component } from '@angular/core';

// Environment config
import { environment } from "../environments/environment";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private cdnUrl: string = environment.cdnUrl;
}
