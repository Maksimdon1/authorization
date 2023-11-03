import React from "react";
import "../../style/user.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {LoginRequests}  from "../../requests/login.ts"
import { useSelector } from "react-redux";

export function Sucsess({data}) {


  const links = [
    {
      "Title": "Избранное",
      "Link": "favourites",
    },
    {
      "Title": "Партнерская программа",
      "Link": "referal",
    },
    {
      "Title": "Мои заказы",
      "Link": "my-orders",
    },
    {
      "Title": "Адресса доставки",
      "Link": "delivery-ddresses",
    },
    {
      "Title": "Про нас",
      "Link": "about",
    },
  ]





    return (
      <>

        <div className="user">
          {(() => {
            if (true) {
              return (
                <>
                  <div className="small-panel">
                    <div className="info">
                      <div className="welcome-event">
                        <h1>Привет,</h1> <h2>{data.Name} !</h2>
                      </div>
                    

                      <div className="mail">{data.Email}</div>
                      <div className="phone">{data.Phone}</div>
                    </div>
                    <Link to="/user/info?show=edit">
                    <div className="edit">
                      <img
                        src={
                          require("../../static-img/svg/pencil-button-svgrepo-com.svg")
                            .default
                        }
                        alt=""
                        srcset=""
                      />
                    </div>
                     </Link>
                  </div>
                  <div className="big-panel">
                  <div className="info-link">
                      <div className="circle">
                        <span></span>
                      </div>
                      <div className="icon">
                      <img
                        src={
                          require("../../static-img/svg/percent-2-svgrepo-com.svg")
                            .default
                        }
                        alt=""
                        srcset=""
                      />
                      </div>
                      <div className="text">Достижения и экономия</div>
                      <div className="arrow">
                        <img
                          src={
                            require("../../static-img/svg/arrow-sm-right-svgrepo-com.svg")
                              .default
                          }
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    <div className="promocodes-bonuses">
                    <Link to="/user/info?show=promocodes">
                      <div className="promocodes">
                        <div className="promo-icon">
                          <img
                            src={
                              require("../../static-img/svg/present-svgrepo-com.svg")
                                .default
                            }
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div className="promocodes-title">Промокоды</div>
                      </div>
                      </Link>
                      <Link to="/user/info?show=bonuses">
                      <div className="bonuses">
                        <div className="bonuses-icon">
                          {data.Bonuses} &#x20bd;
                        </div>
                        <div className="bonuses-title">Баллы</div>
                      </div>
                      </Link>
                    </div>
                    <div className="links">
                    {links.map((el) => (
                      <Link to={`/user/info?show=${el.Link}`}>
                    <div className="info-link-map">
                      <div className="circle">
                        <span></span>
                      </div>
                    
                      <div className="text">{el.Title}</div>
                      <div className="arrow">
                        <img
                          src={
                            require("../../static-img/svg/arrow-sm-right-svgrepo-com.svg").default
                          }
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                    </Link>
                    ))}
                    </div>
                  </div>
                </>
              );
            } else {
              return <></>;
            }
          })()}
        </div>
      </>
    );
  

}
