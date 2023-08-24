import { Component, ChangeDetectionStrategy,Input, OnInit } from '@angular/core';
import { ITab} from '../../models/ITab.model';
@Component({
  selector: 'abo-dynamic-tabs-view',
  templateUrl: './dynamic-tabs-view.component.html',
  styleUrls: ['./dynamic-tabs-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTabsViewComponent implements OnInit {
   @Input() input:{}[] = []
   tabs: ITab[] = []
   constructor(){
  }
  
  ngOnInit(): void {
    if (this.input != null) {
      this.input.forEach((element,index) => {
        if (this.shouldDisplayTab(element)) {
          this.addNewTab(element['title'], element['content'],index === 0);
        }
      });
    }
   }

   shouldDisplayTab(element: any): boolean {
    const content = element['content'];

    if (typeof content === 'string') {
      return content.trim() !== ''; // Display tab if non-empty string content
    } else if (Array.isArray(content)) {
      return content.length > 0; // Display tab if array content is not empty
    }

    return false; // Don't display tab for other cases
  }

  addNewTab(title: string, content: string | string[],active: boolean): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: title,
      content: content,
      disabled: false,
      active: active
    });
  }

  isStringContent(tab: ITab): boolean {
    return typeof tab.content === 'string';
  }
  
  isArrayContent(tab: ITab): boolean {
    return Array.isArray(tab.content);
  }
  
  removeTabHandler(tab: ITab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
}
