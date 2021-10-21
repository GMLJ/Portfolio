import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails }) => (
  <>
    <main>
      <div className="container">
        <motion.div
          className="homeBackground"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [1, 1, 1, 1] }}
        ></motion.div>

        <div className="row center">
          <div className="image-container">
            <div
              className="frame"
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}
            >
              <Link to={`/portfolio/matthias-guilbert`}>
                <ProgressiveImage
                  src={require("../../images/MatthiasGuilbert.webp")}
                  placeholder={require("../../images/izzat.jpg")}
                >
                  {(src) => (
                    <motion.img
                      whileHover={{ scale: 1.1, y: "5%" }}
                      transition={transition}
                      src={src}
                      alt="Artwork by Izzat Emmanuel"
                    />
                  )}
                </ProgressiveImage>
              </Link>
            </div>

            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <p>Matthias Guilbert</p>
              <p>Développeur Web</p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
