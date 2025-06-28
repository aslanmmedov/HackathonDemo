import React from "react";
import "./index.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <section id="footer-first">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-12 col-sm-12">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
                  alt=""
                  className="footer-img"
                />
                <div className="footer-flex">
                  <input
                    type="text"
                    placeholder="Email daxil edin"
                    className="footer-inp"
                  />
                  <div className="button-footer">Göndər</div>
                </div>
              </div>
              <div className="col-6 col-md-12 col-sm-12">
                <div className="footer-params">
                  <ul>
                    <p>Haqqında</p>
                    <li>Haqqımızda</li>
                    <li>Bizim partnerlər</li>
                    <li>Bizim xidmətlər</li>
                  </ul>
                  <ul>
                    <p>Əlaqə</p>
                    <li>Bizimlə əlaqə</li>
                    <li>FAQ səhifəsi</li>
                    <li>Haqqımızda</li>
                  </ul>
                  <p className="footer-end">Bizi izlə</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
