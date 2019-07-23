import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ PageComponent, HeaderComponent ],
  imports: [ CommonModule, FontAwesomeModule ],
  exports: [ PageComponent ]
})
export class PageModule {}
