import React, { Component } from 'react'

import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
// import Services from './components/services';
// import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
import Pricing from './components/pricing';
import FreqAsk from './components/freqask';
import Footer from './components/footer';
import JsonData from './data/data.json';
import HeaderAbout from './components/headerAbout';
import Story from './components/story';
import Team from './components/Team';
import HeaderTutor from './components/headerTutor';
import Benefits from './components/benefits';
import Requirements from './components/requirements';
import Process from './components/process';

export class LandingPage extends Component {
  state = {
    landingPageData: {},
    showpage: "main",
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  setShowPage=(data)=>{
    this.setState({showpage: data});
  }


  render() {
    // const [showpage, setshowpage] = React.useState('main');

    return (
      <div style={{overflowX: 'hidden'}}>
        <Navigation setShowPage={this.setShowPage}/>
        {this.state.showpage == "main" ? 
          <React.Fragment>
          <Header data={this.state.landingPageData.Header} />
          <Features data={this.state.landingPageData.Features} />
          <About data={this.state.landingPageData.About} />
          {/* <Services data={this.state.landingPageData.Services} /> */}
          {/* <Gallery /> */}
          <Pricing/>
          <Testimonials data={this.state.landingPageData.Testimonials} />
          </React.Fragment>
        :
          this.state.showpage == "about" ? 
          <React.Fragment>
          <HeaderAbout data={this.state.landingPageData.Header} />
          <Story data={this.state.landingPageData.Features} />
          <Team data={this.state.landingPageData.Team} />
          </React.Fragment>
          :
          <React.Fragment>
            <HeaderTutor data={this.state.landingPageData.Header} />
            <Process data={this.state.landingPageData.Process} />
            <Benefits data={this.state.landingPageData.Benefits} />
            <Requirements data={this.state.landingPageData.Requirements} />
          </React.Fragment>
        }

        {this.state.showpage == "main" || this.state.showpage == "becomeTutor" ? 
          <FreqAsk />
        :
          <React.Fragment></React.Fragment>
        }

        <Contact data={this.state.landingPageData.Contact} />
        <Footer/>
      </div>
    )

  }
}

export default LandingPage;
