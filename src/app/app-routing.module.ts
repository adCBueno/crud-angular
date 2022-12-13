import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import our components
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  { path: '', component: ShowComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
