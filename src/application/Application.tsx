import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

import Alerts from 'components/atoms/Alerts';
import Layout from 'components/molecules/Layout';
import PageLoader from 'components/molecules/PageLoader';

import { ApplicationProps } from './types';

const Application: React.FC<ApplicationProps> = (props) => {
  const { store } = props;
  const { mounted, mount, unmount, loading, routes, redirect, clearRedirect, navigation } = store;

  const location = useLocation();

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  useEffect(() => {
    if (redirect) clearRedirect();
  }, [redirect]);

  if (!mounted) return null;

  return (
    <>
      {redirect && <Navigate {...redirect} />}
      <Layout location={location} navigation={navigation}>
        {loading && <PageLoader />}
        {!loading && (
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <React.Suspense fallback={null}>
                    <route.component />
                  </React.Suspense>
                }
              />
            ))}
          </Routes>
        )}
      </Layout>
      <Alerts />
    </>
  );
};

export default observer(Application);
