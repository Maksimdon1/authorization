import React from "react";
import "../style/user.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {LoginRequests}  from "../requests/login.ts"

export function User() {
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

  const data = useQuery("info", LoginRequests, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });

  //  console.log(navigator.connection.effectiveType);

  const user = {
    isAuntificated: false,
    id: 1,
    FirstName: undefined,
    SecondName: undefined, //'Алина',
    email: undefined,
    password: undefined,
    address: undefined,
    city: undefined,
    country: undefined,
    zip: undefined,
    phone: undefined,
    bonuses: 133,
  };

  React.useEffect(() => {
    // При перерисовке страницы, вызываем функцию для скрола вверх
    window.scrollTo(0, 0);
  },[]);
  // смотрим подключен ли user  к  wifi
  //console.log(navigator.onLine)

  //if(data.isLoading){
  //  return (
  //    <>
  //    загрузка
  //    </>
  //  )
  //}

  if (data.isSuccess) {

  
   if(data.data.data[0]['Id']){
    user.isAuntificated = true
   }


    // const date = new Date(data.data.data[0]["DateLoggedIn"]);
    // loginDate = [
    //   date.getMonth() + 1,
    //   date.getDate(),
    //   date.getHours(),
    //   date.getMinutes(),
    //   date.getSeconds(),
    // ];
    user.email = data.data.data[0]["Email"];
    user.phone = data.data.data[0]["Phone"];
    user.FirstName = data.data.data[0]["Name"];
    user.SecondName = data.data.data[0]["Surname"];

    // const datees = {
    //   month: date.getMonth() + 1,
    //   date: date.getDate(),
    //   hours: date.getHours(),
    //   minutes: date.getMinutes(),
    //   seconts: date.getSeconds(),
    // };

    return (
      <>
        {/* <DopUserPages/> */}
        <div className="user">
          {(() => {
            if (user.isAuntificated) {
              return (
                <>
                  <div className="small-panel">
                    <div className="info">
                      <div className="welcome-event">
                        <h1>Привет,</h1> <h2>{user.FirstName} !</h2>
                      </div>
                      {/* <div className="phone">
                        {loginDate.map((el, key) => (
                          <div>{el}</div>
                        ))}
                      </div> */}

                      <div className="mail">{user.email}</div>
                      <div className="phone">{user.phone}</div>
                    </div>
                    <Link to="/user/info?show=edit">
                    <div className="edit">
                      <img
                        src={
                          require("../static-img/svg/pencil-button-svgrepo-com.svg")
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
                          require("../static-img/svg/percent-2-svgrepo-com.svg")
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
                            require("../static-img/svg/arrow-sm-right-svgrepo-com.svg")
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
                              require("../static-img/svg/present-svgrepo-com.svg")
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
                          {user.bonuses} &#x20bd;
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
                            require("../static-img/svg/arrow-sm-right-svgrepo-com.svg").default
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
  if (data.isError) {
    return <>не загрузилось</>;
  }
  if (data.isLoading) {
    return (
     <div className="loading">
    <div class="center">
        <div class="ring"></div>
        <span>loading...</span>
     </div>
   </div>
   )
  }
}
