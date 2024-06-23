import React from "react";
import "./UserSlider.css";

const UserSlider = ({ users, ok }) => {
  return (
    <div className="user-slider">
      {ok === "user"
        ? users.map((user, index) =>
            user.dr ? (
              <div key={index} className="user-slider__item">
                <p>{user.fio}</p>
                <p>{user.number}</p>
                <p>{user.login}</p>
                <p>{user.tochka}</p>
              </div>
            ) : null
          )
        : null}

      {ok === "tov"
        ? users.map((user, index) => (
            <div key={index} className="user-slider__item">
              <p>{user.data}</p>
              <p>{user.name}</p>
              <p>{user.tochka}</p>
              <p>{user.prib}</p>
            </div>
          ))
        : null}
      {ok === "users"
        ? users.map((user, index) =>
            user.dr ? (
              <div key={index} className="user-slider__item">
                <p>{user.fio}</p>
                <p>{user.dr}</p>
                <p>{user.number}</p>
                <p>{user.tochka}</p>
                <p>{user.mesto}</p>
                <p>{user.login}</p>
              </div>
            ) : null
          )
        : null}
      {ok === "tovar"
        ? users.map((user, index) => (
            <div key={index} className="user-slider__item">
              <p>{user.data}</p>
              <p>{user.name}</p>
              <p>{user.kolvo}</p>
              <p>{user.prib}</p>
            </div>
          ))
        : null}
      {ok === "marked"
        ? users.map((user, index) => (
            <div key={index} className="user-slider__item">
              <p>{user.name}</p>
              <p>{user.tochka}</p>
              <p>{user.kolvo}</p>
              <p>{user.kom}</p>
              <p>{user.nalog}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default UserSlider;
