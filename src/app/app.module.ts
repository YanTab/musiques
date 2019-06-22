import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MusicListComponent } from './music-list/music-list.component';
import { SingleMusicComponent } from './music-list/single-music/single-music.component';
import { MusicFormComponent } from './music-list/music-form/music-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { MusicsService } from './services/musics.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'musics', canActivate: [AuthGuardService], component: MusicListComponent},
  { path: 'music/new', canActivate: [AuthGuardService], component: MusicFormComponent},
  { path: 'music/view/:id', canActivate: [AuthGuardService], component: SingleMusicComponent},
  { path: '', redirectTo: 'musics', pathMatch: 'full'},
  { path: '**', redirectTo: 'musics'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MusicListComponent,
    SingleMusicComponent,
    MusicFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, MusicsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
