import React, { Component } from "react";

import Navigation from "./components/navigation";
import Header from "./components/header";
import Summer from "./components/summer";
import Features from "./components/features";
import About from "./components/about";
// import Services from './components/services';
// import Gallery from './components/gallery';
import Testimonials from "./components/testimonials";
// import Team from './components/Team';
import Contact from "./components/contact";
import Pricing from "./components/pricing";
import FreqAsk from "./components/freqask";
import Footer from "./components/footer";
import JsonData from "./data/data.json";
import HeaderAbout from "./components/headerAbout";
import Story from "./components/story";
import Team from "./components/Team";
import HeaderTutor from "./components/headerTutor";
import Benefits from "./components/benefits";
import Requirements from "./components/requirements";
import Process from "./components/process";
import Anime from "react-anime";

export class LandingPage extends Component {
  state = {
    landingPageData: {},
    showpage: "main",
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  setShowPage = (data) => {
    this.setState({ showpage: data });
  };

  render() {
    console.log(JsonData);
    // const [showpage, setshowpage] = React.useState('main');

    return (
      <div style={{ overflowX: "hidden" }}>
        <Navigation setShowPage={this.setShowPage} />
        {this.state.showpage == "main" ? (
          <React.Fragment>
            <Header data={JsonData.Header} />
            {/* <Summer data={JsonData.Features} /> */}
            <Features data={JsonData.Features} />
            <About data={JsonData.About} />
            {/* <Services data={JsonData.Services} /> */}
            {/* <Gallery /> */}
            <Pricing data={JsonData.Pricing} />
            <Testimonials data={JsonData.Testimonials} />
          </React.Fragment>
        ) : this.state.showpage == "about" ? (
          <React.Fragment>
            <HeaderAbout data={JsonData.Header} />
            <Story data={JsonData.Features} />
            <Team data={JsonData.Team} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <HeaderTutor data={JsonData.Header} />
            <Process data={JsonData.Process} />
            <Benefits data={JsonData.Benefits} />
            <Requirements data={JsonData.Requirements} />
          </React.Fragment>
        )}

        {this.state.showpage == "main" ||
        this.state.showpage == "becomeTutor" ? (
          <FreqAsk />
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <Contact data={JsonData.Contact} />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
