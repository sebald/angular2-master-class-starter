import { Component } from '@angular/core';
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  private tabs:TabComponent[] = [];

  addTab (tab:TabComponent) {
    this.tabs.push(tab);
    if (this.tabs.length === 1) {
      this.select(tab);
    }
  }

  select (tab:TabComponent) {
    this.tabs.forEach(
      current => current.selected = current === tab
    );
  }
}
