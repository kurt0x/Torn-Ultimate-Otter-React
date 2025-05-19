import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Torn Ultimate Otter</title>
        <meta property="og:title" content="Torn Ultimate Otter" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Link 1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Link 2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text118">Main Action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text119">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text120">
              Medium length heading goes here
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text121">Feature #1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text122">Feature #2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text123">Feature #3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text124">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text125">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text126">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text127">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text128">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text129">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text130">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text131">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text132">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text133">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text134">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text135">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text136">$20/mo</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text137">$29/mo</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text138">$49/mo</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text139">Get started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text140">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text141">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text142">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text143">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text144">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text145">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text146">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text147">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text148">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text149">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text150">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text151">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text152">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text153">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text154">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text155">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text156">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text158">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text160">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text161">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text178">Step 1</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text179">Step 2</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text180">Step 3</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text181">Step 4</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text182">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text183">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text184">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text185">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text186">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text187">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text188">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text189">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text190">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text191">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text192">Author Name</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text193">Author Name</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text194">Author Name</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text195">Author Name</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text196">Position, Company name</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text197">Position, Company name</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text198">Position, Company name</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text199">Position, Company name</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text201">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text202">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text203">Cluj - Napoca</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text204">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text205">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text206">Link 1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text207">Link 2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text208">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text209">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text210">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text211">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text212">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text213">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
