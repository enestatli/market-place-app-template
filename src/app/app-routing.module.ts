import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { allRoutes } from "./models/common-models";

const routes: Routes = [
  {
    path: "",
    redirectTo: allRoutes.welcome,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: allRoutes.guide,
    pathMatch: "full"
  },
  {
    path: allRoutes.guide,
    loadChildren: () =>
      import("./pages/guide/guide.module").then(m => m.GuidePageModule)
  },
  {
    path: allRoutes.tabs,
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: allRoutes.settings,
    loadChildren: () =>
      import("./pages/settings/settings.module").then(m => m.SettingsPageModule)
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(m => m.WelcomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
