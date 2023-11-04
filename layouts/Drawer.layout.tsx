import React, { PropsWithChildren } from 'react';

import { BottomNavigationBk } from '../components/menu/BottomMenu';
import { Grid } from '@mui/material';
import Head from 'next/head';
import { Header } from '../components/base/Header';
import { SideMenu } from '../components/menu/SideMenu';
import styles from '../styles/Home.module.css';

export const DrawerLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header />
          <Grid container spacing={2} flexGrow={1} mt={0.5}>
            <SideMenu />
            <Grid item xs={12} md={10} bgcolor={'secondary'} padding={0}>
              <div className="px-4">{children}</div>
            </Grid>
          </Grid>
        </main>
        <footer className={styles.footer}>B A L A K CC.</footer>
      </div>
      <BottomNavigationBk />
    </>
  );
};