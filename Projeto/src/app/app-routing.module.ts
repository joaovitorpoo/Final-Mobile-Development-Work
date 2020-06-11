import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slide',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'artista/:id',
    loadChildren: () => import('./artista/artista.module').then( m => m.ArtistaPageModule)
  },
  {
    path: 'eventos-artista/:id',
    loadChildren: () => import('./eventos-artista/eventos-artista.module').then( m => m.EventosArtistaPageModule)
  },
  {
    path: 'cadastrar-evento/:id',
    loadChildren: () => import('./cadastrar-evento/cadastrar-evento.module').then( m => m.CadastrarEventoPageModule)
  },
  {
    path: 'editar-evento',
    loadChildren: () => import('./editar-evento/editar-evento.module').then( m => m.EditarEventoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
