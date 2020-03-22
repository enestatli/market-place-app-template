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
  },
  {
    path: allRoutes.membershipSelection,
    loadChildren: () =>
      import("./pages/membership-selection/membership-selection.module").then(
        m => m.MembershipSelectionPageModule
      )
  },
  {
    path: allRoutes.memberRegisterType,
    loadChildren: () =>
      import("./pages/member-register-type/member-register-type.module").then(
        m => m.MemberRegisterTypePageModule
      )
  },
  {
    path: allRoutes.phoneRegister,
    loadChildren: () =>
      import("./pages/phone-register/phone-register.module").then(
        m => m.PhoneRegisterPageModule
      )
  },
  {
    path: allRoutes.memberRegister,
    loadChildren: () =>
      import("./pages/member-register/member-register.module").then(
        m => m.MemberRegisterPageModule
      )
  },
  {
    path: allRoutes.clientRegister,
    loadChildren: () =>
      import("./pages/client-register/client-register.module").then(
        m => m.ClientRegisterPageModule
      )
  },
  {
    path: allRoutes.search,
    loadChildren: () =>
      import("./pages/search/search.module").then(m => m.SearchPageModule)
  },
  {
    path: allRoutes.searchResults,
    loadChildren: () =>
      import("./pages/search-results/search-results.module").then(
        m => m.SearchResultsPageModule
      )
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
