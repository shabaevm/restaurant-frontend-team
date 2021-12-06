import React from "react";
import cl from './footer.module.css'
const Footer = () => {
  return (
    <div class="bg-dark text-white px-3 py-3 ">
      <div class="py-3">
        <h1 class="display-5 fw-bold text-white bg-transparent" id={cl.h1}>
          Нет любви более искренней, чем любовь к еде!{" "}
        </h6>
        <div class="col-lg-6 mx-auto ">
          <p class="fs-5 mt-5 mb-4 text-center" id={cl.p}>
            © 1987 - 2021. Halal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
