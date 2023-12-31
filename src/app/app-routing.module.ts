import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { computeStyles } from '@popperjs/core';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categorias/listar',
    pathMatch: 'full'
  },
  {
    path: 'categorias/listar',
    component: ListarCategoriasComponent
  },
  {
    path: 'notas/listar',
    component: ListarNotasComponent
  },
  {
    path: 'notas/criar',
    component: CriarNotaComponent,
  },
  {
    path: 'notas/editar/:id',
    component: EditarNotaComponent,
  },
  {
    path: 'notas/excluir/:id',
    component: ExcluirNotaComponent,
  },
  {
    path: 'categorias/:id/notas',
    component: ListarNotasComponent,
  },
  {
    path: 'categorias/criar',
    component: CriarCategoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
