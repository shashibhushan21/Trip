import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";
import Subscribe from "./Subscribe";
const index = () => {
  return (
    <footer className="footer -type-2 bg-light-2">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img height= "40px" width= "60px" src="https://img.freepik.com/premium-vector/bright-yellow-flying-balloon-vector-white-background_514903-305.jpg?ga=GA1.1.1730412556.1735809231&semt=ais_hybrid" alt="image" />
              <div className="row y-gap-30 justify-between pt-30">
                <ContactInfo />
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-15 pt-60">
                <div className="col-12">
                  <h5 className="text-16 fw-500">Your all-in-one travel app</h5>
                </div>
                {/* End .col */}

                <AppButton />
              </div>
              {/* End .row */}

              <div className="mt-60">
                <h5 className="text-16 fw-500 mb-10">
                  Follow us on social media
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="row y-gap-30">
                <div className="col-12">
                  <h5 className="text-16 fw-500 mb-15">
                    Get Updates &amp; More
                  </h5>
                  <Subscribe />
                </div>
                {/* End .col */}

                <FooterContent />
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
