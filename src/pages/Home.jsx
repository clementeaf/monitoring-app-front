import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import useAppRoutes from "../hooks/useAppRoutes";
import Header from '../components/Header';
import NotFound from "./NotFound";

export default function Home() {
    const routes = useAppRoutes();

    return (
        <div className="flex flex-col min-h-screen min-w-screen bg-gray-100 p-4">
          <Suspense>
            <Header />
              <div className="flex flex-col h-full w-full items-center justify-start ">
                <Routes>
                    {routes.map(({ id, path, component: Component, isIndex, isExact }) => (
                      <Route 
                        key={id} 
                        path={path} 
                        element={
                            <div className="flex h-full items-start justify-start p-4">
                              <Component />
                            </div>
                        } 
                        index={isIndex} 
                        exact={isExact} />
                    ))}
                  {/* <Route path="detail-view/:id" element={<DetailView />} /> */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div> 
          </Suspense>
        </div>
    );
  }
  