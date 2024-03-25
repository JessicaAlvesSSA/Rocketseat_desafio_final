import React, { useState } from "react";
import { Routes as Switch, Route } from "react-router";
import { Dish, Home, Menu } from "../pages";
import { Footer, Header } from "../components";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { useDishContext } from "../context";
import { EditDish } from "../pages/editDish";
import { NewDish } from "../pages/newDish";

export default function Routes() {
  const { isAuth } = useDishContext();
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <NewDish />
              <Footer />
            </>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Header />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/dish"
          element={
            <>
              <Header />
              <Dish />
              <Footer />
            </>
          }
        />
      </Switch>
    </>
  );
}
