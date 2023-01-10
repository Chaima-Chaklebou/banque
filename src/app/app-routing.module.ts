import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AproposComponent } from './apropos/apropos.component';
import { CompteComponent } from './compte/compte.component';
import { ConseillerComponent } from './conseiller/conseiller.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionComponent } from './question/question.component';
import { SeparationComponent } from './separation/separation.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'aboutus', component:AboutUsComponent,},
  { path: 'apropos', component:AproposComponent,},
  { path: 'compte', component:CompteComponent,},
  { path: 'conseiller', component:ConseillerComponent,},
  { path: 'contact', component:ContactComponent,},
  { path: 'footer', component:FooterComponent,},
  { path: 'navbar', component:NavbarComponent,},
  { path: 'question', component:QuestionComponent,},
  { path: 'separeation', component:SeparationComponent,},
  { path: 'services', component:ServicesComponent,},
  { path: 'signin', component:SignInComponent,},
  { path: 'signup', component:SignUpComponent,},
  {path: 'contactus', component:ContactUsComponent}
];

@NgModule({
 
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
