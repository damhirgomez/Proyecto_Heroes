import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';


@NgModule({
  //declara todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    EjemplosPipesComponent
  ],
  //Todas las librerias que se van a usar
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //servicios - backend
  providers: [],
  //componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
