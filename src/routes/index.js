import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Projects from '~/pages/Projects';
import PaperFolder from '~/pages/PaperFolder';
import DigitalFolder from '~/pages/DigitalFolder';
import VideoFolder from '~/pages/VideoFolder';
import NotFound from '~/pages/NotFound';
import Portifolio from '~/pages/Portifolio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/projects" component={Projects} />
      <Route path="/portifolio/paper" component={PaperFolder} />
      <Route path="/portifolio/digital" component={DigitalFolder} />
      <Route path="/portifolio/videos" component={VideoFolder} />
      <Route path="/portifolio" component={Portifolio} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
}
