import { motion } from "framer-motion";
import { fadeOutExitAnimation } from "../../utils/variants";
import "./dojos.styles.scss";

function OurDojosPage() {
  return (
    <motion.div exit={fadeOutExitAnimation} id="dojo-page">
      <div className="dojo-section">
        <h3>Educational Institute</h3>

        <h4>
          The Grandeur International School, Sarjapura, Bangalore.
          <br />
          Carmel Convent, Jayanagar 3rd Block, Bangalore.
          <br />
          St. Francis School, Kormangala, Bangalore.
          <br />
          Delhi Public School, Whitefield, Bangalore.
          <br />
          Mary Immaculate Girls School, Wilson Garden, Bangalore.
          <br />
          St. Flowers School, Chandra Layout, Bangalore.
          <br />
          Holy Crescent Convent, Wilson Garden, Bangalore.
          <br />
          St. Mark's Convent, Rajajinagar, Bangalore.
          <br />
          Green Valley English School, Konanakunte, Bangalore.
          <br />
          Chinmaya Vidyalaya, Kormangala, Bangalore.
          <br />
          The PTA School, Jayanagar, Bangalore. Brooklyn National Public School,
          RPC Layout, Bangalore.
          <br />
          St. John's High School, Cox Town, Bangalore.
          <br />
          Someshwara Temple, Someshwara Badavane, Bannerghatta Road, Bangalore.
          <br />
          The Kenmore School, Basavanagudi, Bangalore.
          <br />
          SSM Public School, Thyagarajanagar, Bangalore.
          <br />
          Alpine Public School, Konanakunte, Bangalore.
          <br />B E T Institute, Jayanagar, Bangalore.
        </h4>
      </div>

      <div className="dojo-section">
        <h3>Public Classes</h3>

        <h4>
          Malleshwaram Play Grounds, Malleshwaram, Bangalore.
          <br />
          Body and Soul Fitness, HSR Layout, Bangalore.
          <br />
          #28, Ground Floor, Ashrith LeParc, Beretena Agrahara, Doddanagamangala
          Road, Electronic City, Bangalore.
          <br />
          Green Valley English School, Konanakunte, Bangalore.
          <br />
          Prashanthi Kuteera, Jr. College Road, Kadugodi, Bangalore.
          <br />
          Siddappaji Grounds, Basveshwaranagar, Bangalore.
          <br />
          Gold's Gym, Outer Ring Road - Kalyan Nagar, Bangalore.
          <br />
          Garuda Gym, BCC Layout - Rajajinagar, Bangalore.
          <br />
          DS Max SkyScape, Rampura, Kadagrahara Main Road, Bangalore.
          <br />
          Nrityog, 1st Floor, Horamav Main Road, Nanjappa Garden, Horamavu,
          Bangalore.
          <br />
          Nagarjuna Green Ridge Apartment, 27th Cross Road, 15/2, 19th Main Rd,
          Sector 2, HSR Layout, Bangalore.
          <br />
          Fortune Campus, Brahmagiri, Udupi.
          <br />
          Veerabhadra Kalabhavana, KInnimulki, Udupi.
          <br />
          Children's Library Hall (near Manna Palla and Prasanna Ganapathi
          Temple), Manipal, Udupi.
        </h4>
      </div>

      <div className="dojo-section">
        <h3>Private Classes</h3>

        <h4>
          Charles Campbell Road, Cox Town, Bangalore.
          <br />
          Sarjapura, Bangalore.
          <br />
          Outer Ring Road, Bangalore.
          <br />
          Kormangala, Bangalore.
          <br />
          Wilson Garden, Bangalore.
        </h4>
      </div>
    </motion.div>
  );
}

export default OurDojosPage;
