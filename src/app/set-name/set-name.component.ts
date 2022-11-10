import { Component, OnInit } from '@angular/core';
import { NameService } from '../state/name.service';

@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.css']
})
export class SetNameComponent implements OnInit {

  constructor(
    private nameService: NameService
  ) { }

  ngOnInit() {
  }

  setName(user: string) {
    this.nameService.setName(user);
  }

  resetName() {
    this.nameService.resetName();
  }

}