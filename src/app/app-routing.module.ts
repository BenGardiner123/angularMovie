import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'genres', component: IndexGenresComponent },
{path: 'genres/create-genres', component: CreateGenreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
