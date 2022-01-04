// Export all the public routes

import Login from "@pages/public/login";
import SignUp from "@pages/public/signup";
import Counter from "@pages/public/counter/Counter";
import Gallery from "@pages/public/imgae-gallery/Gallery";
import ReduxCounter from "@pages/public/counter-redux/ReduxCounter";

export const PublicRoutes = [
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/signup", exact: true, component: SignUp },
  { path: "/auth/Counter", exact: true, component: Counter },
  { path: "/auth/redux-counter", exact: true, component: ReduxCounter },
  { path: "/auth/gallery", exact: true, component: Gallery }
];
