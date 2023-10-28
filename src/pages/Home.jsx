import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, } from "react";
import useAppRoutes from "../hooks/useAppRoutes";
import Header from '../components/Header';
import NotFound from "./NotFound";
import GlobalProvider from "../context/GlobalProvider";

export default function Home() {
  const routes = useAppRoutes();
  const location = useLocation();
  
  const contextMapping = {
    '/repositoryInfo': 'Repository',
    '/commits': 'Commits',
  };

  const contextName = contextMapping[location.pathname];
  console.log(contextName); 

    return (
        <div className="flex flex-col min-h-screen min-w-screen bg-gray-100 p-4">
          <GlobalProvider state={contextName}>
            <Suspense>
              <Header />
                <div className="flex flex-col h-full w-full items-center justify-start ">
                  <Routes>
                      {routes.map(({ id, path, component: Component, isIndex, isExact }) => (
                        <Route 
                          key={id} 
                          path={path} 
                          element={ 
                              <div className="flex items-start justify-start p-4">
                                  <Component />
                              </div>
                          } 
                          index={isIndex} 
                          exact={isExact} />
                      ))}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div> 
            </Suspense>
          </GlobalProvider>
        </div>
    );
  }
  