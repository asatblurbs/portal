import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ScanRequestComponent } from './scan-request/scan-request.component';
import { TicketComponent } from './ticket/ticket.component';
import { DisabledManualURLGuard } from '../services/can-activate-route.guard';
import { BlockedComponent } from './blocked/blocked.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { MdbFileUploadModule } from 'mdb-file-upload';
import { ToastModule } from 'ng-uikit-pro-standard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderNewComponent } from './header-new/header-new.component';
import { WidgetComponent } from './widget/widget.component';
import { ErrorComponent } from './error/error.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCartComponent,
    MyAccountComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    ScanRequestComponent,
    TicketComponent,
    ScanRequestComponent,
    BlockedComponent,
    CheckoutComponent,
    DashboardComponent,
    HeaderNewComponent,
    WidgetComponent,
    ErrorComponent,
    OrderHistoryComponent,
    AccountManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot({opacity: 1}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdbFileUploadModule
  ],
  providers: [
    DisabledManualURLGuard,
    MDBSpinningPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
