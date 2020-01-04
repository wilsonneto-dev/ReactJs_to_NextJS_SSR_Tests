import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* redux */
import { Provider } from "react-redux";
import store from "../store";

import Loading from "../components/Loading";

/* layouts */
import Header from "../layout/Header";
import Socials from "../layout/Socials";

/* routers */
import SwitchRoutes from "../routes";

/* images to preload */
import imageBackgroundSuggestions from "../images/bg-suggestions.png";
import imageBackgroundSubscription from "../images/bg-subscription.png";
import imageBackgroundAbout from "../images/bg-about.png";

import preloadImage from "../utils/preloadImage";

import TelemetryProvider from "../services/telemetry/TelemetryProvider";
import { getAppInsights } from "../services/telemetry/telemetryService";
import { SeverityLevel } from "@microsoft/applicationinsights-web";

import ErrorHandler from "../components/ErrorHandler";

function App() {
  useEffect(() => {
    /* page backgrounds preloading */
    preloadImage(imageBackgroundSuggestions, () => {});
    preloadImage(imageBackgroundSubscription, () => {});
    preloadImage(imageBackgroundAbout, () => {});
  }, []);

  let appInsights = null;

  return (
    <div>
      <ErrorHandler
        onError={({ error, errorInfo }) => {
          console.log("ErrorHandler:", error);
          appInsights.trackException({
            error: new Error(error),
            errorInfo,
            severityLevel: SeverityLevel.Error
          });
        }}
      >
        <Provider store={store}>
          <Router>
            <TelemetryProvider
              instrumentationKey="90361d1a-03f5-4b7b-9c90-6234d7acb1f3"
              after={() => {
                appInsights = getAppInsights();
              }}
            >
              <Header />
              <div id="body-fix-background-layer"></div>
              <div id="body-fix-background-layer-gradient"></div>
              <div className="box-sized mobile-margin-top">
                <Socials />

                <Route component={SwitchRoutes} />
              </div>

              <div>
                <Loading />
              </div>
            </TelemetryProvider>
          </Router>
        </Provider>
      </ErrorHandler>
    </div>
  );
}

export default App;
