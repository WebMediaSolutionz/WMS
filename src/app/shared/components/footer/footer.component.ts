import { Component, OnInit } from '@angular/core';

// Services
import { ConfigService } from '../../services/config.service';

@Component({
  moduleId: module.id,
  selector: 'wms-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

  private year: number;

  constructor(private configService: ConfigService) {}

  public ngOnInit() {
    let d = new Date();

    this.year = d.getFullYear();
  }

}
