/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-home-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Home from "layouts/home";
import Inserir from "layouts/inserirItem"
import Itens from "layouts/itens";
import ItensY from "layouts/itensY";
import Billing from "layouts/billing";
//import VirtualReality from "layouts/virtual-reality";
//import RTL from "layouts/rtl";
import Perfil from "layouts/perfil";
import PerfilEmpresa from "layouts/perfilEmpresa";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Basket from "examples/Icons/Basket";


const routes = [
  {
    type: "collapse",
    name: "Madeiras",
    key: "home",
    route: "/home",
    icon: <Shop size="16px" />,
    component: <Home />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Inserir Madeira",
    key: "inserirItem",
    route: "/inserirItem",
    icon: <Settings size="16px" />,
    component: <Inserir />,
    noCollapse: true,
  },
  { //descriçao do item madereira x
    // type: "collapse",
    name: "Itens",
    key: "itens",
    route: "/itens",
    icon: <Cube size="16px" />,
    component: <Itens />,
    // noCollapse: true,
  },
  {//descriçao do item madereira Y
    // type: "collapse",
    name: "ItensY",
    key: "itensY",
    route: "/itensY",
    // icon: <Office size="12px" />,
    component: <ItensY />,
    // noCollapse: true,

  },
  { type: "title", title: "página da conta", key: "account-pages" },
  {//perfil artesao
    type: "collapse",
    name: "Perfil Artesão",
    key: "perfil",
    route: "/perfil",
    icon: <CustomerSupport size="16px" />,
    component: <Perfil />,
    noCollapse: true,
  },
  {//perfil empresa
    type: "collapse",
    name: "Perfil Empresa",
    key: "perfilEmpresa",
    route: "/perfilEmpresa",
    icon: <Office size="16px" />,
    component: <PerfilEmpresa />,
    noCollapse: true,

  },
  {
    type: "collapse",
    name: "Entrar",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="16px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Cadastre-se",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="16px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
