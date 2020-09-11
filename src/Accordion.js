import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ title, body }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled((prevState) => !prevState)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <>
            <motion.div
              style={{ overflow: "hidden" }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <p>
                I'm baby tumeric hexagon shoreditch migas. Snackwave four loko
                four dollar toast microdosing cold-pressed literally schlitz
                kickstarter everyday carry pork belly marfa direct trade vegan
                street art distillery. You probably haven't heard of them lo-fi
                artisan slow-carb green juice actually iPhone art party photo
                booth pop-up pitchfork mlkshk. Bespoke meditation hot chicken,
                marfa narwhal hella quinoa yuccie. Hell of chartreuse disrupt,
                fingerstache cardigan asymmetrical thundercats deep v meh lo-fi
                irony listicle.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
