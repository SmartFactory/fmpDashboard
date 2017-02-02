import { Routes, RouterModule }  from '@angular/router';

import { AdministrationComponent } from './administration.component';
  import { ConfigurationComponent } from './components/configuration/configuration.component';
  import { PlanComponent } from './components/plan/plan.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'plan', component: PlanComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
