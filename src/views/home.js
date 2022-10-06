import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PenguinIceCreamClub</title>
        <meta property="og:title" content="PenguinIceCreamClub" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <a href="#top" className="home-link">
              <img
                alt="image"
                src="/playground_assets/4229790186_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1200w.png"
                className="home-image"
              />
            </a>
          </div>
          <div className="home-links">
            <a href="#icemap" className="home-link01 navbar-Link">
              IceMap
            </a>
            <a href="#team" className="home-link02 navbar-Link">
              Team
            </a>
            <a href="#faqs" className="home-link03 navbar-Link">
              FAQs
            </a>
            <a href="#reserve" className="home-link04 button-secondary button">
              <span>
                <span>IceList</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container test-animation">
        <div id="top" className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle before-Heading">
              Layer2 just got chillier
            </span>
            <h1 className="home-title">
              <span>Penguin IceCream </span>
              <span className="home-text04">Club</span>
            </h1>
            <span className="home-description">
              Following the Melting of Ice caps Penguins decided to fight
              capitalism with capitalism. Harnessing creative icrepreneurial
              skills &amp; locally sourced materials including farm-fresh snow,
              Antarctic Corn &amp; seals&apos; tears for flavor we are creating
              the most tongue-twisting dance-inducing tastebud melting culinary
              champion of the century ice cream. We offset Californian corn with
              carbon credits from the heat sink that&apos;s our fricking
              motherland. Nuff said.
            </span>
            <div className="home-container01">
              <a
                href="https://discord.gg/Pxx4e5EVwe"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05 button button-gradient"
              >
                Discord
              </a>
              <a
                href="https://twitter.com/IceCreamClubP"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06 button button-transparent"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/4234438925_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-600w.png"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/4229790186_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1200w.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/1859647078_penguins_ice_cream_stand_highly_detailed__smooth__sharp_focus__8k__ray_tracing__digital_painting__concept_art_illustration-400w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container test-animation">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/2532014329_penguins_ice_cream_stand_highly_detailed__smooth__sharp_focus__8k__ray_tracing__digital_painting__concept_art_illustration-1200w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text05 before-Heading">
              FIRST LAYER1 &amp; LAYER2 PROJECT
            </span>
            <h1 className="home-text06">
              <span>Why </span>
              <span className="home-text08">Penguins picked </span>
              <span>LRC for their ambitions</span>
            </h1>
            <span className="home-text10">
              Most lowgas layers like solana &amp; BNB and other layer2s NFTs
              which are still going strong in bear market has people that would
              appreciate the benefit of an ecosystem that remains online,
              secures the assets &amp; is cost efficient to build on. loopring
              solves all that and comes with a Dex of it&apos;s own. It acts as
              a payment protocol with near instant fund transfers. Try out
              Loopring by downloading Gamestop Wallet
            </span>
            <div className="home-container02">
              <a
                href="https://chrome.google.com/webstore/detail/gamestop-wallet/pkkjjapmlcncipeecdmlhaipahfdphkd"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07 button-secondary button bg-transparent"
              >
                GameStop Chrome Wallet
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container test-animation">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text11 before-Heading">
              Updated after mint
            </span>
            <h1 className="home-text12">
              <span className="home-text13">Rarity</span>
              <br></br>
              <span className="home-text15">Chart</span>
            </h1>
            <span className="home-text16">
              100+ layers with different weights inspired by pop cultural
              events, popular figures to polar bears are divided across 5 traits
              distributed in a bell curve manner
            </span>
            <div className="home-container03">
              <a
                href="https://raritysniper.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08 button-secondary button bg-transparent"
              >
                Rarity Sniper
              </a>
              <a
                href="https://looprare.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09 button-secondary button bg-transparent"
              >
                LoopRare
              </a>
            </div>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/3708621158_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1200w.png"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div
        id="icemap"
        className="home-section2 section-container test test-animation"
      >
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/playground_assets/426409046_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <h1 className="home-text17">
              <span>ICEMAP</span>
              <br></br>
            </h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text20">1</span>
              </div>
              <div className="home-container04">
                <span className="home-title01">Ice Cream NFTs</span>
                <span className="home-text21">
                  Each penguin will receive one NFT per address
                </span>
              </div>
            </div>
            <div className="home-step01">
              <div className="home-number01">
                <span className="home-text22">2</span>
              </div>
              <div className="home-container05">
                <span className="home-title02">Discord Premium Access</span>
                <span className="home-text23">
                  A community specific channel granting full discord permissions
                  plus lots of perks &amp; premium features including but not
                  limited to whitelists, future projects, early access to
                  project activities &amp; technical assistance about projects
                </span>
              </div>
            </div>
            <div className="home-step02">
              <div className="home-number02">
                <span className="home-text24">3</span>
              </div>
              <div className="home-container06">
                <span className="home-title03">Raffles, Giveaways</span>
                <span className="home-text25">
                  Weekly contests beget the most active and most fun filled
                  people with NFT giveaways from GME marketplace, premium NFTs
                  on other blockchains &amp; LRC and ETH giveaways
                </span>
              </div>
            </div>
            <div className="home-step03">
              <div className="home-number03">
                <span className="home-text26">4</span>
              </div>
              <div className="home-container07">
                <span className="home-title04">Merch</span>
                <span className="home-text27">
                  Rock your Penguin Merch with some dope ass outfits, hoodies
                  &amp; some special planned stuff
                </span>
              </div>
            </div>
            <div className="home-step04">
              <div className="home-number04">
                <span className="home-text28">5</span>
              </div>
              <div className="home-container08">
                <span className="home-title05">Media Utility</span>
                <span className="home-text29">
                  Adding cross platform usage of NFTs into other media forms
                  such as games, movies &amp; music
                </span>
              </div>
            </div>
            <div className="home-step05">
              <div className="home-number05">
                <span className="home-text30">6</span>
              </div>
              <div className="home-container09">
                <span className="home-title06">Super Penguin Art Club</span>
                <span className="home-text31">
                  Adding website functionality for holders with an art platform
                  to create art on site in a fun way for all to contribute
                </span>
              </div>
            </div>
            <div className="home-step06">
              <div className="home-number06">
                <span className="home-text32">7</span>
              </div>
              <div className="home-container10">
                <span className="home-title07">Minting DApp</span>
                <span className="home-text33">
                  Creating website experience for loopring artists with a
                  minting dapp Open Sourced for every community member
                </span>
              </div>
            </div>
            <div className="home-step07">
              <div className="home-number07">
                <span className="home-text34">8</span>
              </div>
              <div className="home-container11">
                <span className="home-title08">Collabs</span>
                <span className="home-text35">
                  Bringing in top artists not just across loopring but also
                  other chains &amp; those outside
                </span>
              </div>
            </div>
            <div className="home-step08">
              <div className="home-number08">
                <span className="home-text36">8</span>
              </div>
              <div className="home-container12">
                <span className="home-title09">Onboarding</span>
                <span className="home-text37">
                  Bringing in the next million  users on loopring by adding
                  better artists, utility &amp; reducing an order off of every
                  blocks time
                </span>
              </div>
            </div>
            <div className="home-step09">
              <div className="home-number09">
                <span className="home-text38">10</span>
              </div>
              <div className="home-container13">
                <span className="home-title10">Moon Mars &amp; Beyond</span>
                <span className="home-text39">
                  Expand our projects appeal beyond our ecosystem &amp; drive
                  value in new innovative yet to be thought of ways aka IceMap
                  2.0🚀🚀🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" className="section-container test test-animation">
        <div className="home-max-width5 max-width">
          <span className="home-text40 before-Heading">KNOW THY</span>
          <h1 className="home-text41">Team</h1>
          <div className="home-cards-container">
            <Card
              text="Punguin"
              text1="Waiting for ice to melt so I can paint my layers"
              rootClassName="card-root-class-name2"
            ></Card>
            <Card
              text="IceColdPlay"
              text1="Full time music, part time discord &amp; twitter admin"
              rootClassName="card-root-class-name"
            ></Card>
            <Card
              text="MrCoolio"
              text1="Dev &amp; web3 enthusiast. Ex Adobe guy now working in VISA"
              rootClassName="card-root-class-name1"
            ></Card>
          </div>
        </div>
      </div>
      <div
        id="faqs"
        className="home-section4 section-container test test-animation"
      >
        <div className="home-max-width6 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text42 before-Heading">
                Flipper ARTIC Quarterly presents
              </span>
              <h1 className="home-text43">
                <span className="home-text44">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text46">Questions</span>
              </h1>
              <div data-role="Accordion" className="home-question question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text47">
                    When do the Ice Drops begin?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text48">
                    <span>
                      As soon as we fill the 690 Icelists. Possibly 10th
                      October. How sure are we. Let&apos;s just say on a scale
                      of 1-10 it&apos;s10/10
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text51">What do Penguins Cost?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text52">
                    <span>0.0069 ETH or 32 LRC</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text55">What is the Total Supply?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text56">
                    First drop begins with a supply of 690. We want to build an
                    antarctica of penguins to make use of network effects, so
                    quiet possibly scaling up to 10k collection
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text57">
                    Which Wallets can we use to mint?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text58">
                    Your friendly neighbourhood GME wallet to LRC layer1 or 2 to
                    metamask. EOA or smart contract wallet will be able to mint
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger4">
                  <span className="home-text59">
                    What Layer will the NFTs trade?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text60">
                    While the first drop will be mintable on layer 2 only.
                    We&apos;ll expand to layer 1 free mints to bring in new
                    audiences to layer2. Purpose of penguins is more than being
                    a pfp project. It&apos;s to show the utility of Ethereums
                    layer2s functionality coming of age to the web3 enthusiasts
                    &amp; early adopters and people at large
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger5">
                  <span className="home-text61">
                    Do I need to activate Layer2 in order to mint?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text62">
                    <span>
                      No. You only need to send the requisite ETH or lrc to our
                      wallet &amp; we&apos;ll send you the NFT plus activate
                      your wallet. We encourage metamask users to port their
                      wallets to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <a
                      href="https://chrome.google.com/webstore/detail/gamestop-wallet/pkkjjapmlcncipeecdmlhaipahfdphkd"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link10"
                    >
                      GME wallet
                    </a>
                    <span>
                       so they can enjoy looking at both their layer1 &amp;
                      layer2s in a single place without having to go to opensea
                      or mobile platforms. Exciting times lie ahead as you can
                      use the same wallet for keeping Gaming NFTs on IMX
                      blockchain too.
                    </span>
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger6">
                  <span className="home-text65">Marketplaces to trade?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text66">
                    <a
                      href="https://loopexchange.art/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link11"
                    >
                      Loopexchange.art
                    </a>
                    <span>
                      {' '}
                      is our primary residence. You can also withdraw to layer1
                      and use any of the other marketplaces.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/426409046_penguins_ice_cream_stand_in_antarctica_baskin_robbins_style_8k_digital_art-1200w.png"
              className="home-image6"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/piic-400h.png"
            className="home-image7"
          />
          <div id="reserve" className="home-banner">
            <span className="home-text68 before-Heading">get ICELISTED</span>
            <h1 className="home-text69">Reserve your Ice Cream Club NFT</h1>
            <span className="button button-primary">
              Send 0.0069 ETH or 32 LRC to address below
            </span>
            <span className="button-secondary button">
              0xef983589FC5af54a5f5864B0B01bac5BE69b04a3
            </span>
            <div className="home-btns">
              <button className="home-button button button-transparent">
                L1 Ethereum
              </button>
              <button className="home-button1 button button-gradient">
                Layer2 LRC
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="#top" className="home-link12">
        <footer className="home-footer">
          <svg viewBox="0 0 1024 1024" className="home-icon16">
            <path d="M895.488 528.896l-212.821-121.643v-204.587c0-82.347-66.987-149.333-149.333-149.333s-149.333 66.987-149.333 149.333v204.587l-212.821 121.643c-56.192 32.085-79.573 101.163-54.443 160.811 25.131 59.691 90.965 91.093 153.131 73.387l114.133-32.64v35.755l-37.291 29.824c-51.115 40.917-63.147 113.792-27.861 168.917 35.285 55.168 106.411 74.795 165.077 45.483 0.171-0.043 21.333-7.808 49.408-7.808s49.237 7.765 49.408 7.808c58.667 29.312 129.792 9.685 165.077-45.483 35.285-55.125 23.253-128-27.861-168.917l-37.291-29.824v-35.755l114.176 32.64c62.165 17.707 128-13.696 153.131-73.387 25.131-59.691 1.749-128.725-54.485-160.811zM871.339 656.555c-8.405 19.883-30.336 30.421-51.029 24.448l-222.976-63.659v189.909l69.333 55.467c17.024 13.611 21.035 37.931 9.301 56.32-11.733 18.347-35.328 24.875-55.040 15.147-0.341-0.171-35.157-16.853-87.595-16.853s-87.253 16.683-87.595 16.853c-19.712 9.685-43.307 3.157-55.040-15.147-11.733-18.389-7.765-42.667 9.301-56.32l69.333-55.467v-189.909l-222.976 63.701c-20.693 5.973-42.624-4.565-51.029-24.448-8.363-19.883-0.597-42.88 18.176-53.589l255.829-146.219v-254.123c0-35.285 28.715-64 64-64s64 28.715 64 64v254.123l255.829 146.176c18.773 10.709 26.539 33.707 18.176 53.589z"></path>
            <path d="M554.667 192c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333z"></path>
          </svg>
          <span className="home-text72">To the Top</span>
          <svg viewBox="0 0 1024 1024" className="home-icon19">
            <path d="M895.488 528.896l-212.821-121.643v-204.587c0-82.347-66.987-149.333-149.333-149.333s-149.333 66.987-149.333 149.333v204.587l-212.821 121.643c-56.192 32.085-79.573 101.163-54.443 160.811 25.131 59.691 90.965 91.093 153.131 73.387l114.133-32.64v35.755l-37.291 29.824c-51.115 40.917-63.147 113.792-27.861 168.917 35.285 55.168 106.411 74.795 165.077 45.483 0.171-0.043 21.333-7.808 49.408-7.808s49.237 7.765 49.408 7.808c58.667 29.312 129.792 9.685 165.077-45.483 35.285-55.125 23.253-128-27.861-168.917l-37.291-29.824v-35.755l114.176 32.64c62.165 17.707 128-13.696 153.131-73.387 25.131-59.691 1.749-128.725-54.485-160.811zM871.339 656.555c-8.405 19.883-30.336 30.421-51.029 24.448l-222.976-63.659v189.909l69.333 55.467c17.024 13.611 21.035 37.931 9.301 56.32-11.733 18.347-35.328 24.875-55.040 15.147-0.341-0.171-35.157-16.853-87.595-16.853s-87.253 16.683-87.595 16.853c-19.712 9.685-43.307 3.157-55.040-15.147-11.733-18.389-7.765-42.667 9.301-56.32l69.333-55.467v-189.909l-222.976 63.701c-20.693 5.973-42.624-4.565-51.029-24.448-8.363-19.883-0.597-42.88 18.176-53.589l255.829-146.219v-254.123c0-35.285 28.715-64 64-64s64 28.715 64 64v254.123l255.829 146.176c18.773 10.709 26.539 33.707 18.176 53.589z"></path>
            <path d="M554.667 192c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333 0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333z"></path>
          </svg>
        </footer>
      </a>
    </div>
  )
}

export default Home
