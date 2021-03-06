import React, { Component } from 'react'
import iconDonation from '../images/ic_donation.svg'
import iconDispatch from '../images/ic_dispatched.svg'
import iconMessage from '../images/ic_inboxVideo.svg'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Divider from '../components/Divider'

import img_goods from '../images/goods.png'
import img_locations from '../images/locations.png'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <div className="section masthead">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-md-offset-1">
                <h1 className="masthead__tagline">
                  Donate
                  <br />
                  See your impact
                  <br />
                  It's that simple
                </h1>
                {/* <p>
              HelpHero is a fully transparent virtual care platform that
              leverages the on-demand economy to bring help to those that need
              it most.
            </p> */}
              </div>
              <div className="col-xs-12 col-sm-5 col-sm-offset-1">
                {/* <div className="video-placeholder" /> */}
              </div>
            </div>
          </div>
        </div>
        <section className="section howItWorks">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-xs-12">
                <h1 className="section__heading">How it Works</h1>
                <h5 className="section__subHeading">This is how it works</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4  col-md-4">
                <div className="howItWorks__section howItWorks__step1">
                  <h5 className="howItWorks__sectionTitle">
                    1. Make a Donation
                  </h5>
                  <img src={iconDonation} />
                  <p>
                    Easily make a donation for no less than $5 using the
                    HelpHero website.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div className="howItWorks__section howItWorks__step2">
                  <h5 className="howItWorks__sectionTitle">
                    2. A HelpHero is Dispatched
                  </h5>
                  <img src={iconDispatch} />
                  <p>
                    A HelpHero is dispatched to help an individual in need and
                    is equipped with a care package funded by your support.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4  col-md-4">
                <div className="howItWorks__section howItWorks__step3">
                  <h5 className="howItWorks__sectionTitle">
                    3. Recieve a Personalized Message
                  </h5>
                  <img src={iconMessage} />
                  <p>
                    A personalized video will be delivered to your email so you
                    can see exactly how your money was put to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1 col-lg-3 col-lg-offset-2">
                <img src={img_locations} className="section__img" />
              </div>
              <div className="col-sm-5 col-sm-offset-1 col-lg-4 col-lg-offset-1">
                <h1 className="section__heading">
                  Causes we Currently Support
                </h1>
                <h5 className="section__subHeading">
                  We're concentrating our efforts on issues near and dear to our
                  hearts.
                </h5>
                <p className="section__desc">
                  HelpHero is currently focusing its efforts on the homeless
                  epidemic in San Francisco, CA. Our mission is to help people
                  worldwide in the future. By starting{' '}
                </p>
                <Button classNames="button--primary button--section">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1 col-lg-offset-2">
                <h1 className="section__heading">
                  How your donations are put to use
                </h1>
                <h5 className="section__subHeading">
                  We survey each of our recipients to ensure proper care is
                  delivered.
                </h5>
                <p className="section__desc">
                  We only deliver items that provide the most value to each of
                  our recipients. A full breakdown of your donations and their
                  allocated use is availble inside of your account.
                </p>
                <Button classNames="button--primary button--section visible--desktop">
                  Learn More
                </Button>
              </div>
              <div className="col-sm-6 col-sm-offset-1 col-lg-4">
                <img src={img_goods} className="section__img" />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container-fluid">
            <div className="row center-xs">
              <div className="col-xs-12">
                <h1 className="section__heading">Heros at Work</h1>
                <h5 className="section__subHeading">
                  Some of the people your generous donations have helped.
                </h5>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="video-placeholder" />
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="video-placeholder" />
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="video-placeholder" />
                  </div>
                </div>
                <Button classNames="button--primary button--section">
                  View More HelpHero Videos
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Divider />
        <section className="section__helpHero">
          <div className="grid--50-50">
            <div className="grid__image grid__item" />
            <div className="grid__item">
              <div className="container-fluid">
                <div className="row center-md">
                  <div className="col-md-10">
                    <div className="grid__content">
                      <h1 className="section__heading">Become a HelpHero</h1>
                      <h5 className="section__subHeading">
                        Get paid and feel good about it too
                      </h5>
                      <p>
                        HelpHero is currently focusing its efforts on the
                        homeless epidemic in San Francisco, CA. Our mission is
                        to help people worldwide in the future. By starting
                      </p>
                      <Button classNames="button--section button--secondary">
                        How to Become a HelpHero
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default IndexPage
