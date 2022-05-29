import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { UsuariosRegistradosComponent } from './usuarios-registrados/usuarios-registrados.component';
import { VideosComponent } from './videos/videos.component';
import { ModuloExtraComponent } from './modulo-extra/modulo-extra.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'usuarios-registados', component:UsuariosRegistradosComponent},
  {path: 'videos', component:VideosComponent},
  {path: 'extra', component:ModuloExtraComponent},
  {path: 'heroe/:id', component: UnHeroeComponent},
  {path: 'buscador/:nombreh', component:SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
