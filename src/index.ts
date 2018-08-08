import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { IonicImageLoader } from 'ionic-image-loader';

import { IsviLoadingComponent } from './components/isvi-loading/isvi-loading';
import { IsviHeaderComponent } from './components/isvi-header/isvi-header';

export * from './components/isvi-loading/isvi-loading';
export * from './components/isvi-header/isvi-header';



@NgModule({
  imports: [
    IonicModule,
    IonicImageLoader.forRoot()
  ],
  declarations: [
    IsviLoadingComponent,
    IsviHeaderComponent,
  ],
  exports: [
    IsviLoadingComponent,
    IsviHeaderComponent
  ]
})
export class IsviLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IsviLibModule,
      providers: []
    };
  }
}
