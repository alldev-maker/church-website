import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './Dashboard')
);

const AllSermons = React.lazy(() =>
  import(/* webpackChunkName: "allsermons" */ './AllSermons')
);

const AllDevotions = React.lazy(() =>
  import(/* webpackChunkName: "alldevotions" */ './AllDevotions')
);

// Sermon
const NewSermon = React.lazy(() =>
  import(/* webpackChunkName: "newsermons" */ './Sermon/NewSermon')
);

const SermonReview = React.lazy(() =>
  import(/* webpackChunkName: "sermonreview" */ './SermonReview')
);

//SOAP
const NewSOAP = React.lazy(() =>
  import(/* webpackChunkName: "newsoap" */ './SOAP/NewSOAP')
);

const NewSOAPReview = React.lazy(() =>
  import(/* webpackChunkName: "newsoapreview" */ './SOAP/Review')
);

// Personal Devotion
const NewPersonalDevotion = React.lazy(() =>
  import(/* webpackChunkName: "newpersonaldevotion" */ './PersonalDevotion/Devotion')
);

const PersonalDevotionReview = React.lazy(() =>
  import(/* webpackChunkName: "personaldevotionreview" */ './PersonalDevotion/PersonalReview')
);

// Preacher
const AllPreacherNotes = React.lazy(() =>
  import(/* webpackChunkName: "allpreachernotes" */ './Preacher/AllPreacherNotes')
);

const PreacherSermon = React.lazy(() =>
  import(/* webpackChunkName: "preachersermon" */ './Preacher/PreacherSermon')
);

// User
const UserProfile = React.lazy(() =>
  import(/* webpackChunkName: "userprofile" */ '../user/Profile')
);

// Admin
const Admin = React.lazy(() =>
  import(/* webpackChunkName: "admin" */ './Admin/Admin')
);

const User = React.lazy(() =>
  import(/* webpackChunkName: "user" */ './Admin/Usermanagement')
);


const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/Home`}
            />
            <Route
              path={`${match.url}/Home`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Sermons`}
              render={(props) => <AllSermons {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Devotions`}
              render={(props) => <AllDevotions {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Profile`}
              render={(props) => <UserProfile {...props} />}
            />

            <Route
              exact
              path={`${match.url}/NewSermon`}
              render={(props) => <NewSermon {...props} />}
            />
            <Route
              exact
              path={`${match.url}/SermonReview`}
              render={(props) => <SermonReview {...props} />}
            />
            <Route
              exact
              path={`${match.url}/SOAP`}
              render={(props) => <NewSOAP {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Personal/Review`}
              render={(props) => <PersonalDevotionReview {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Personal`}
              render={(props) => <NewPersonalDevotion {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Preacher`}
              render={(props) => <AllPreacherNotes {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Preacher/Sermon`}
              render={(props) => <PreacherSermon {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Admin`}
              render={(props) => <Admin {...props} />}
            />
            <Route
              exact
              path={`${match.url}/Admin/Users`}
              render={(props) => <User {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
