// libraries
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
// components
import DayPictureData from 'components/nasa/DayPictureData';
import Layout from 'components/common/Layout';
import AstronomyGallery from 'components/nasa/AsronomyGallery';
import Header from 'components/Header';
import DayPicture from 'components/nasa/DayPicture';

const App = () => (
  <>
    <Header />
    <Layout>
      <Switch>
        <Route exact path="/nasa">
          <DayPictureData />
        </Route>
        <Route exact path="/nasa/gallery">
          <AstronomyGallery />
        </Route>
        <Route exact path="/nasa/gallery/:date">
          <DayPicture />
        </Route>
      </Switch>
    </Layout>
  </>
);

export default App;
