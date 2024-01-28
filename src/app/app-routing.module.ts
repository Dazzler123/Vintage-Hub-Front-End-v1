import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {VehiclePageComponent} from "./pages/vehicles/vehicle-page/vehicle-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {VehicleViewPageComponent} from "./pages/vehicles/vehicle-view-page/vehicle-view-page.component";
import {LoginPageComponent} from "./pages/security/login-page/login-page.component";
import {ResetPasswordPageComponent} from "./pages/security/reset-password-page/reset-password-page.component";
import {OtpVerificationPageComponent} from "./pages/security/otp-verification-page/otp-verification-page.component";
import {ForgotPasswordPageComponent} from "./pages/security/forgot-password-page/forgot-password-page.component";
import {SignupPageComponent} from "./pages/security/signup-page/signup-page.component";
import {SelectCategoryComponent} from "./shared/pages/select-category/select-category.component";
import {SellVehicleComponent} from "./pages/sell/sell-vehicle/sell-vehicle.component";
import {SellOtherComponent} from "./pages/sell/sell-other/sell-other.component";
import {BuyOtherComponent} from "./pages/buy/buy-other/buy-other.component";
import {BuyVehicleComponent} from "./pages/buy/buy-vehicle/buy-vehicle.component";
import {BuyPartsComponent} from "./pages/buy/buy-parts/buy-parts.component";
import {
  SellVehicleSecondFormComponent
} from "./pages/sell/sell-vehicle/inner/sell-vehicle-second-form/sell-vehicle-second-form.component";
import {SellPartsComponent} from "./pages/sell/sell-parts/sell-parts.component";
import {VendorSignupPageComponent} from "./pages/security/vendor-signup-page/vendor-signup-page.component";

const routes: Routes = [{path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'vehicles', component:VehiclePageComponent},
  {path:'vehicle-detail/:id', component:VehicleViewPageComponent},
  {path:'select-category/:id', component:SelectCategoryComponent},
  {path:'sell-vehicle', component:SellVehicleComponent},
  {path:'sell-parts', component:SellPartsComponent},
  {path:'sell-other', component:SellOtherComponent},
  {path:'buy-vehicle', component:BuyVehicleComponent},
  {path:'buy-parts', component:BuyPartsComponent},
  {path:'buy-other', component:BuyOtherComponent},
  {path:'sell-vehicle-second-page', component:SellVehicleSecondFormComponent},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'vendor-signup', component:VendorSignupPageComponent},
  {path:'forgot-password', component:ForgotPasswordPageComponent},
  {path:'otp-verification', component:OtpVerificationPageComponent},
  {path:'reset-password', component:ResetPasswordPageComponent},
  {path:'**', component:NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
