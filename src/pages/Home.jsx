import React, { Fragment } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Footer from "../components/Footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import imageTest from "../images/background.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    name: "progetto 1",
    img: "https://picsum.photos/id/54/3000/4000/",
  },
  {
    id: 2,
    name: "progetto 2",
    img: "https://picsum.photos/id/543/3000/4000/",
  },
  {
    id: 3,
    name: "progetto 3",
    img: "https://picsum.photos/id/432/3000/4000/",
  },
  {
    id: 4,
    name: "progetto 4",
    img: "https://picsum.photos/id/12/3000/4000/",
  },
];

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="h-full flex flex-col">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ ease: "backInOut", duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-full px-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col">
              <h2 className="font-semibold italic text-center text-3xl text-white mb-20">
                "Non è un bug, è una feature"
              </h2>
              <Button
                label="Scopri di più"
                severity="help"
                size="small"
                raised
                className="mx-20 lg:mx-[29rem]"
              />
            </div>
          </div>

          <div className="w-full">
            <img
              src={imageTest}
              alt=""
              loading="lazy"
              className="object-cover h-[500px] w-full rounded-2xl shadow-3d"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ ease: "backInOut", duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <h1 className="text-3xl">A proposito di Noi</h1>
        </motion.div>

        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ ease: "backInOut", duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </motion.div>
      </div>

      <div className="h-full mt-40 py-10">
        <div className="h-full grid grid-cols-12 grid-rows-8 gap-10">
          <div className="col-span-4 row-span-8">
            <motion.img
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ ease: "backInOut", duration: 1 }}
              viewport={{ once: true }}
              src={imageTest}
              alt=""
              loading="lazy"
              className="object-cover h-full w-full rounded-2xl shadow-3d "
            />
          </div>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "backInOut", duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-8 row-span-1 flex justify-start items-center"
          >
            <h1 className="text-5xl">Zeta Web Solutions</h1>
          </motion.div>

          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ ease: "backInOut", duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-8 row-span-2"
          >
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ ease: "backInOut", duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-4 row-span-2 col-start-5 row-start-5 lg:row-start-4 bg-yellow-600"
          >
            <p>test</p>
          </motion.div>

          <div className="col-start-6 row-start-7 col-span-6 row-span-1 grid grid-cols-12 gap-0">
            <div className="col-span-2 flex justify-center items-center">
              <motion.div
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="rounded-full h-20 w-20 bg-purple-600 flex justify-center items-center"
              >
                <i className="pi pi-code text-2xl" />
              </motion.div>
            </div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-span-4 flex justify-start items-center"
            >
              <p>Lorem ipsum dolor sit</p>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.55 }}
              viewport={{ once: true }}
              className="col-span-2 flex justify-center items-center"
            >
              <div className="rounded-full h-20 w-20 bg-purple-600 flex justify-center items-center">
                <i className="pi pi-code text-2xl" />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ ease: "backInOut", duration: 1, delay: 0.55 }}
              viewport={{ once: true }}
              className="col-span-4 flex justify-start items-center"
            >
              <p>Lorem ipsum dolor sit</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-full mt-40">
        <motion.h1
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ ease: "backInOut", duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-5xl"
        >
          Alcuni dei nostri progetti
        </motion.h1>
        <div className="mt-14 px-20">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              gap: "1rem",
            }}
          >
            <div className="h-[450px] px-14">
              <SplideTrack>
                {projects.map((project, index) => (
                  <SplideSlide key={project.id + index.toString()}>
                    <img
                      src={project.img}
                      alt={project.name}
                      loading="lazy"
                      className="object-cover h-[450px] w-full rounded-2xl"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev !bg-[transparent]">
                  <span className="material-symbols-outlined text-4xl">
                    {/* chevron_left */}
                    arrow_back_ios
                  </span>
                </button>
                <button className="splide__arrow splide__arrow--next !bg-[transparent]">
                  <span className="material-symbols-outlined text-4xl">
                    {/* chevron_right */}
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </div>
          </Splide>
        </div>
      </div>

      <div className="h-full relative flex items-end">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <motion.h1
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ ease: "backInOut", duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-5xl"
          >
            Se vuoi conocerci meglio
          </motion.h1>
          <motion.div
            whileInView={{ scale: [1, 1.1, 1] }}
            transition={{ ease: "linear", duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              label="Contattaci"
              severity="help"
              size="large"
              raised
              className="mt-16"
            />
          </motion.div>
        </div>

        {/* <div className="w-full"> */}
          <Footer />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
