import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.style.css';
import '@globalStyles/ColorsVariables.css';
import ControlledCarousel from './Carousel'

export const HomePageBanner = () => {
  return (
    <section className="homePageBanner">
      <div className="banner-container">
        <ControlledCarousel />
      </div>
    </section>
  );
};
