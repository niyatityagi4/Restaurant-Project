import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SignIn } from "../pages/Homepage & LogIn/SignIn";
import { AuthData } from "./AuthWrapper";
import { navList } from "./Navigation";
import AdminMenuPage from "../pages/admin/admin-menu-page/AdminMenuPage";


export const isAuthorisedRoute = (user, r, isMenu) => {
     let allowed = false
     if (!r.isPrivate)
          allowed = true
     else if (r.isPrivate && user.isAuthenticated) {
          if (r.permissions) {
               r.permissions.forEach((permission) => {
                    if (user.permissions?.includes(permission)) {
                         allowed = true
                         return
                    }
               })
          }else
               allowed = true
     }
     if(isMenu && !r.isMenu)
          allowed=false
     return allowed
}


export const RenderRoutes = () => {


     const { user } = AuthData();
     const location = useLocation();


     return (
          <Routes>
               {navList.map((r, i) => {
                    if(isAuthorisedRoute(user, r))
                         if(r.children){
                              console.log("goes")
                              return <Route key={i} path={r.path} element={r.element}>
                                 {  r.children.map((menu) => { 
                                   if(menu.index) {                                       
                                        return <Route key={i} path={menu.path} index element={menu.element}/> 
                                   }                                
                                        else return <Route key={i} path={menu.path} element={menu.element}/>
                                   })}
                                   
                              </Route>
                               
                         }
                         else return <Route key={i} path={r.path} element={r.element} />
               })}


               {!user.isAuthenticated && <Route path="/login" element={<SignIn />} />}


               {!user.isAuthenticated && <Route path="*" element={<Navigate to="/login" replace state={{ from: location }} />} />}
               {user.isAuthenticated && <Route path="*" element={<Navigate to="/" replace />} />}


          </Routes>
     )
}


