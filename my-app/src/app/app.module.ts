import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { NormalComponent } from './components/normal/normal.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { ExampleComponent } from './components/example/example.component';
import { CustomDirective } from './directives/custom.directive';
import { ExamplePipeComponent } from './pipes/example-pipe/example-pipe.component';
//import { UppercasePipe } from './custom/uppercase.pipe';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponentComponent,
    NormalComponent,
    StructuralDirectiveComponent,
    ExampleComponent,
    CustomDirective,
    ExamplePipeComponent,
    CustomUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
