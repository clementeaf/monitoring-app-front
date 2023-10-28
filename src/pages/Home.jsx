/* eslint-disable react/prop-types */
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect, useLayoutEffect, useState, } from "react";
import Cookies from "js-cookie";
import useAppRoutes from "../hooks/useAppRoutes";
import Header from '../components/Header';
import NotFound from "./NotFound";
import GlobalProvider from "../context/GlobalProvider";
import SignIn from "./SignIn";
import Main from "./Main";

export default function Home({sendMessage}) {
  const routes = useAppRoutes();
  const location = useLocation();
  const [cookie, setCookie] = useState(null);
  
  const contextMapping = {
    '/repositoryInfo': 'Repository',
    '/commits': 'Commits',
  };

  const getCredentialsFromCookies = () => {
    const savedUser = Cookies.get("user");

    if (savedUser)  setCookie(savedUser);
  };

  useLayoutEffect(() => {
    getCredentialsFromCookies();
  }, []);

  const contextName = contextMapping[location.pathname];

  useEffect(() => {
    sendMessage({ type: "subscribe", channel: "monitoringApp" });
    return () => {
      sendMessage({ type: "unsubscribe", channel: "monitoringApp" });
    };
  }, [sendMessage]);

    return (
        <div className="flex flex-col min-h-screen min-w-screen bg-gray-100 p-4">
          { cookie ? <GlobalProvider state={contextName}>
            <Suspense>
              <Header cookie={cookie}/>
                <div className="flex flex-col h-full w-full items-center justify-start ">
                  <Routes>
                    {cookie ? 
                        (<Route path="/" element={
                                <div className="flex items-start justify-start p-4">
                                  <Main />
                                </div>}/>
                        ) : 
                        (<Route path="/signIn" element={<SignIn />}/>)
                    }
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
          </GlobalProvider>: 
          (<NotFound />)
        }
        </div>
    );
  }
  