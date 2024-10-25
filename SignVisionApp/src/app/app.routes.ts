import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentImpressumComponent } from './component-impressum/component-impressum.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: AppComponent},
    {path:'impressum', component:ComponentImpressumComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}