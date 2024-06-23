import React, { useState, useCallback } from "react";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom"; 
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Marked from '../Marked/Marked';
import Staff from '../Staff/Staff';
import Report from '../Report/Report';
import AddUser from '../AddUser/AddUser';
import { mestoAuth } from "../utils/Auth";
import api from "../utils/Api.js";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [cards, setCards] = useState([]);

  function addCard(card) {
    if (!card) {
      return;
    } else {
      console.log(card);
      api
        .addCard(card.name, card.dr, card.number, card.tochka, card.mesto, card.login, card.email, card.password)
        .then((data) => {
          setCards([data.data, ...cards]);
          console.log(cards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function backUser() {
    api
      .backUser()
      .then((data) => {
        localStorage.removeItem("jwt");
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function get() {
    api
      .getCards()
      .then((data) => {
        if (data) {
          setCards(data.data);
          navigate("/main");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tokenCheck = useCallback(() => {
    if (localStorage.getItem("jwt")) {
      mestoAuth
        .getContent()
        .then((res) => {
          if (res.message === "Необходима авторизация") {
            console.log(res);
            
          } else {
            api
              .getCards()
              .then((data) => {
                if (data) {
                  setCards(data.data);
                  if(location.pathname === '/'){
                    navigate("/main");
                  }
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => console.log(err));
    }else{
      navigate("/");
    }
  }, [navigate, location.pathname]);

  function login(log) {
    if (!log) {
      return;
    }

    mestoAuth
      .authorize(log.PasswordInput, log.EmailInput)
      .then((data) => {
        if (data.message === "Неправильные почта или пароль") {
          console.log(data);
        } else {
          get();
          localStorage.setItem("jwt", log.EmailInput);
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login handleSubmit={login} />} />
          <Route path="/main" element={<Main back={backUser} card={cards}/>} />
          <Route path="/staff" element={<Staff back={backUser} card={cards}/>} />
          <Route path="/report" element={<Report back={backUser} />} />
          <Route path="/marked" element={<Marked back={backUser} />} />
          <Route path="/adduser" element={<AddUser back={backUser}  handleSubmit={addCard} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
