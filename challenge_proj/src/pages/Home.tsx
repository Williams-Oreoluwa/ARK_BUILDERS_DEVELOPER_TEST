import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuToggle,
  IonList,
  IonLabel,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonText,
  IonIcon,
  IonFooter,
  IonSearchbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import {
  arrowForward,
  homeOutline,
  logOutOutline,
  newspaperOutline,
  trashBinOutline,
  playCircle,
  pauseCircle,
  peopleCircleOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  moonOutline,
  sunnyOutline,
  logoGithub,
  logoLinkedin,
  logoFacebook,
  logoTwitter,
} from "ionicons/icons";

const Home: React.FC = () => {
  const paths = [
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "Solution",
      url: "/home",
    },
    {
      name: "Pricing",
      url: "/home",
    },
    {
      name: "About",
      url: "/home",
    },
    {
      name: "Contact",
      url: "/home",
    },
    {
      name: "Become a Client",
      url: "/home",
    },
  ];
  return (
    <>
      <div className="menu">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div
              className="menu-items"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="menu-box">
                {paths.map((path, index) => {
                  return (
                    <>
                      <div className="items" key={index}>
                        <h2>{path.name}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </IonContent>
        </IonMenu>
      </div>

      <IonPage id="main-content" >
        <IonHeader >
          <IonToolbar>
            <div className="menu">
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            </div>

            <div className="navbar">
              <IonAvatar className="nav-image">
                <IonImg src="./Ellipse 2.png"></IonImg>
              </IonAvatar>

              <IonNavLink slot="start">
                <div className="nav-items">
                  <ul className="nav-links">
                    <li>Home</li>
                    <li>Solution</li>
                    <li>Pricing</li>
                    <li>About</li>
                  </ul>
                </div>
              </IonNavLink>

              <button className="nav-btn">Become a client</button>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="body">
            <div className="body-text-wrapper">
              <div className="body-text">
                <h2>
                  Simpify your{" "}
                  <span className="customer-side"> customer care</span> <br /> &{" "}
                  <span className="customer-side"> communication </span> for
                  your business
                </h2>
                <p>
                  WeCare is your friendly customer support for your business.
                  Call centers are constantly under pressure to clear backlogs
                  while offering <br /> assistance simultaneously. Chatbots,
                  virtual assistants, and other AI-powered interfaces take off
                  the burden by addressing typical user <br /> queries and
                  issues. This enables the customer support representatives to
                  have more time to resolve complicated issues.
                </p>
              </div>
            </div>
            <div className="background-details">
              <div className="background-image">
                <img className="woman-background" src="./image 5.png" alt="" />
                <div className="bottom-img">
                  <img
                    src="./Arrow 1.png"
                    className="bottom-arrow-img"
                    alt=""
                    style={{ width: "7rem" }}
                  />
                </div>
                <div className="top-img">
                  <img src="./Arrow 2.png" className="top-arrow-img" alt="" />
                </div>
              </div>
              <div className="arrow-image" style={{ display: "grid" }}>
                <div className="arrow-img"></div>

                <div></div>
              </div>

              <div className="cards">
                <section>
                  <article className="user">
                    <IonCard className="card">
                      <IonCardContent className="">
                        <div
                          className="-dauserta"
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            justifyContent: "left",
                            flexDirection: "row",
                          }}
                        >
                          <div className="user">
                            <img
                              className="avatar-image"
                              src="./Ellipse 3.png"
                              alt=""
                            />
                            <h2>James Anderson</h2>
                          </div>
                        </div>

                        <div className="users-text">
                          <p>
                            Good morning, I would like to obtain all the
                            statements of my transaction with your bank for the
                            last 3 years, as it is needed to process my Visa at
                            the Americam Embassy. Please I would appreciate if
                            it is done speedily, Thank you.
                          </p>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </article>
                </section>
                <section>
                  <article className="user">
                    <IonCard className="card">
                      <IonCardContent className="">
                        <div
                          className="-dauserta"
                          style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            justifyContent: "left",
                            flexDirection: "row",
                          }}
                        >
                          <div className="user">
                            <img
                              className="avatar-image"
                              src="./Ellipse 4.png"
                              alt=""
                            />
                            <h2>Kuda Bank</h2>
                          </div>
                        </div>

                        <div className="users-text">
                          <p>
                            Good Afternoon James, Please find attached your
                            transaction statement from 2020 till 2022. I believe
                            that this would be useful in your visa application.
                            We wish you all the best. Have a blessed day.{" "}
                            <img
                              src="./mdi_tick-all.png"
                              style={{ width: "9px", height: "9px" }}
                              alt=""
                            />
                          </p>
                        </div>
                        <IonButtons className="card-btns">
                          <button
                            className="we-care-btn"
                            style={{
                              background: "#F5F1FF",
                              textTransform: "none",
                              display: "flex",
                              gap: ".5rem",
                              color: "#1D0E4A",
                              border: "2px",
                              width: "12rem",
                            }}
                          >
                            <img
                              src="./carbon_document-attachment.png"
                              alt=""
                              style={{ height: "1rem", width: "1rem" }}
                            />
                            <div className="btn-text">Brief 2020</div>
                          </button>
                          <button
                            className="we-care-btn"
                            style={{
                              background: "#F5F1FF",
                              textTransform: "none",
                              display: "flex",
                              gap: ".5rem",
                              color: "#1D0E4A",
                              border: "2px",
                              width: "12rem",
                            }}
                          >
                            <img
                              src="./carbon_document-attachment.png"
                              alt=""
                              style={{ height: "1rem", width: "1rem" }}
                            />
                            <div className="btn-text">Brief 2021</div>
                          </button>
                          <button
                            className="we-care-btn"
                            style={{
                              background: "#F5F1FF",
                              textTransform: "none",
                              display: "flex",
                              gap: ".5rem",
                              color: "#1D0E4A",
                              border: "2px",
                              width: "12rem",
                            }}
                          >
                            <img
                              src="./carbon_document-attachment.png"
                              alt=""
                              style={{ height: "1rem", width: "1rem" }}
                            />
                            <div className="btn-text">Brief 2022</div>
                          </button>

                          <a
                            href="/"
                            className="download-all"
                            style={{ color: "#1D0E4A" }}
                          >
                            Download all
                          </a>
                        </IonButtons>
                      </IonCardContent>
                    </IonCard>
                  </article>
                </section>
              </div>
            </div>
            <section className="message">
              <IonItem lines="none">
                <IonText slot="start">
                  <h2 className="message-text">
                    Attend to your <br />
                    customers enquiry with ease.
                  </h2>
                </IonText>
                <div slot="end">
                  <IonAvatar className="message-avatar">
                    <IonImg src="./🤝.png" className="message-img"></IonImg>
                  </IonAvatar>
                </div>
              </IonItem>
            </section>
            <section className="content-1">
              <div className="content-wrapper">
                <div className="content-1-text">
                  <h2>Streamlines workflow</h2>
                  <p>
                    Wecare can handle routine questions for you. Chatbots keep
                    track of client <br />
                    behavior and can respond to commonly asked queries, aid with
                    recovering <br />
                    abandoned carts, provide support with the checkout process,
                    and more. <br /> <br />A chatbot may simply transfer a
                    consumer to a human agent even if <br /> it is unable to
                    resolve the issue.
                  </p>
                  <button className="we-care-btn">Get Wecare ---</button>
                </div>
                <div className="image-content">
                  <img src="./image 4.png" alt="" />
                </div>
              </div>
            </section>
            <section className="content-2">
              <div className="content-wrapper">
                <div className="content-1-text">
                  <h2>Stellar Customer Service</h2>
                  <p>
                    Customer support bots are learning incredibly quickly <br />
                    because of advances in artificial intelligence. <br />{" "}
                    <br />
                    Better customer service may be provided as a consequence{" "}
                    <br />
                    of an AI bot that can gather pertinent information about{" "}
                    <br /> clients and increase their pleasure. Fast response
                    times, <br /> availability around-the-clock.
                  </p>
                  <button className="we-care-btn">Get Wecare ---</button>
                </div>
                <div className="image-content">
                  <img
                    src="./image 3.png"
                    alt=""
                    style={{ width: "25rem", height: "50vh" }}
                  />
                </div>
              </div>
            </section>
            <section className="content-3">
              <div className="content-wrapper">
                <div className="content-1-text">
                  <h2>Prevent Employee Burnout</h2>
                  <p>
                    Account managers must occasionally leave their desks. It is
                    expensive <br />
                    to cover each hour with too many employees working in
                    shifts. <br />
                    <br />
                    On the other side, a team that is understaffed may
                    experience weariness, <br />
                    burnout, and other issues. So what is the best course of
                    action? <br />
                    Wecare can continually help human employees and take their
                    place as needed.
                  </p>
                  <button className="we-care-btn">Get Wecare ---</button>
                </div>
                <div className="image-content">
                  <img
                    src="./image 2.png"
                    alt=""
                    style={{ width: "25rem", height: "50vh" }}
                  />
                </div>
              </div>
            </section>
            <section className="pricing">
              <div className="grid-header">
                <h2>
                  Pricing <br />
                  System
                </h2>
              </div>
              <div className="prices-grid">
                <div className="grid-text">
                  <div className="price-text">
                    <h2>Freemium</h2>
                    <img
                      className="price-image"
                      src="./Rectangle 23.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid-text">
                  <div className="price-text">
                    <h2>Business</h2>
                    <img
                      className="price-image"
                      src="./Rectangle 24.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid-text">
                  <div className="price-text">
                    <h2>Education</h2>
                    <img
                      className="price-image"
                      src="./Rectangle 25.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid-text">
                  <div className="price-text">
                    <h2>Govt</h2>
                    <img
                      className="price-image"
                      src="./Rectangle 26.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="footer">
              <div className="footer-wrapper">
                <div className="col-1">
                  <ul>
                    <li>
                      <img src="./Group 2.png" alt="" />
                    </li>
                    <li>
                      <h4>+234 - 806 - 8204 - 085</h4>
                    </li>
                    <li>
                      <h4>support@Wecare.com</h4>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <ul>
                    <li>
                      <h3>Quick Links</h3>
                    </li>
                    <li>
                      <h5>Solution</h5>
                    </li>
                    <li>
                      <h5>Pricing</h5>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li>
                      <h2></h2>
                    </li>
                    <li>
                      <h5>Company</h5>
                    </li>
                    <li>
                      <h5>Media</h5>
                    </li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <li>
                      <h2>Subscribe</h2>
                    </li>
                    <li>
                      <form action="" style={{display:'inline-flex'}}>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="footer-searchbar"
                          placeholder="Get products updates"
                        />
                        <div className="footer-icon">
                        <IonIcon
                          icon={arrowForward}
                      
                        ></IonIcon>

                        </div>
                    
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
              <IonFooter></IonFooter>

              <IonCard
                style={{
                  backgroundColor: "#30157A",
                  borderTop: "2px solid white",
                }}
              >
                <IonCardContent>
                  <IonToolbar color={"tertiary"}>
                    <div className="socials" slot="start">
                      <li style={{display:'flex', gap:'2rem', fontSize:'1.6rem'}}>
                        
                        <IonIcon icon={logoLinkedin}></IonIcon>
                        <IonIcon icon={logoFacebook}></IonIcon>
                        <IonIcon icon={logoTwitter}></IonIcon>
                      </li>
                    </div>
                    <div className="copyright-wecare" slot="end">
                      <li>
                        <h3>&copy; 2023 WeCare. All rights reserved</h3>
                      </li>
                    </div>
                  </IonToolbar>
                </IonCardContent>
              </IonCard>
            </section>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
