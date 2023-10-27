import { Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import useAppRoutes from "../hooks/useAppRoutes";
import Header from '../components/Header';
import NotFound from "./NotFound";
import GithubCallback from "../components/GithubCallback";
import ControlledRoutes from "../components/ControlledRoutes";

export default function Home() {
    const routes = useAppRoutes();
    const [userToken, setUserToken] = useState(null);

    return (
        <div className="flex flex-col min-h-screen min-w-screen bg-gray-100 p-4">
          <Suspense>
            {userToken != null && userToken != undefined && <Header />}
              <div className="flex flex-col h-full w-full items-center justify-start ">
                <Routes>
                  <Route path="/auth/github/callback" element={<GithubCallback token={userToken} setUserToken={(e) => setUserToken(e)} />} />
                    {routes.map(({ id, path, component: Component, isIndex, isExact }) => (
                      <Route 
                        key={id} 
                        path={path} 
                        element={ 
                          <ControlledRoutes userToken={userToken}>
                            <div className="flex h-full items-start justify-start p-4">
                              <Component />
                            </div>
                          </ControlledRoutes>
                        } 
                        index={isIndex} 
                        exact={isExact} />
                    ))}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div> 
          </Suspense>
        </div>
    );
  }
  