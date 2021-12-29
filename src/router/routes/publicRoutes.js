// Export all the public routes

import Login from "@pages/public/login";
import SignUp from "@pages/public/signup";
import Counter from "@pages/public/counter/Counter";
import Gallery from "@pages/public/imgae-gallery/Gallery";

export const PublicRoutes = [
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/signup", exact: true, component: SignUp },
  { path: "/auth/Counter", exact: true, component: Counter },
  { path: '/auth/gallery', exact: true, component: Gallery }
];
