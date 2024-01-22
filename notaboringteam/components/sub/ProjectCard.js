"use client";
import Image from "next/image";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import {
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

const ProjectCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productImage, setProductImage] = useState({
    modelURL: "",
    modelImageUrl: "",
    modelTitle: "",
    modelToggle: "",
    price: 0.00,
    disPrice: 0.00,
    buy: false,
  });
  const [showBuy, setShowBuy] = useState(false)
  // useEffect(() => {
  //   setShowBuy(productImage.buy?false:true )
  // }, [showBuy])



  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <h1 className="text-gray-200 text-xl">
                {productImage.modelTitle} {productImage.price != null ? <span className="line-through font-normal tracking-tight text-red-500">${productImage.disPrice}</span> : ""} {productImage.price}
              </h1>

              {productImage.modelToggle === "img" ?
                <>
                  {!showBuy ?
                    <Image
                      src={`/${productImage.modelImageUrl}`}
                      style={{ width: "45rem", height: "45rem" }}
                      alt="this is a img"
                      // width={250}
                      // height={100}
                      width={450}
                      height={300}
                    />
                    :
                    <div className="w-full max-w-lg mx-auto p-8">
                      <div className=" bg-slate-900 rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                        <form>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                              <label for="card-number" className="block text-sm font-medium text-gray-100 mb-2">Card Number</label>
                              <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full bg-slate-600 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label for="expiration-date" className="block text-sm font-medium text-gray-100 mb-2">Expiration Date</label>
                              <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full bg-slate-600 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label for="cvv" className="block text-sm font-medium text-gray-100 mb-2">CVV</label>
                              <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full bg-slate-600 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label for="card-holder" className="block text-sm font-medium text-gray-100 mb-2">Card Holder</label>
                              <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full bg-slate-600 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                          </div>
                          <div className="mt-8">

                            <h3 className="mb-4 font-bold text-gray-100">Total: <span className="line-through font-normal tracking-tight text-gray-100">${productImage.disPrice}</span> {productImage.price} $</h3>
                            <motion.a
                              variants={slideInFromLeft(1)}
                              className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                            >
                              Proccess
                            </motion.a>
                          </div>
                        </form>
                      </div>
                    </div>
                  }

                  <motion.a
                    variants={slideInFromLeft(1)}
                    className={`${!showBuy ? "block" : "hidden"} py-2 my-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]`}
                    onClick={() =>
                      setShowBuy(true)
                    }
                  >
                    Buy Now
                  </motion.a>
                </>
                :
                <model-viewer
                  src={`/formatted/${productImage.modelURL}`}
                  style={{ width: "45rem", height: "45rem" }}
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  tone-mapping="commerce"
                  poster="poster.webp"
                  shadow-intensity="1"
                  environment-image="legacy"
                >
                </model-viewer>
              }

            </>
          )}
        </ModalContent>
      </Modal>

      <div className="grid gap-4 w-4/5 welcome-box mx-auto" data-aos="fade-up"
        data-aos-duration="3000">
        <div className="flex justify-center">
          {/* <video
            autoPlay
            muted
            loop
            style={{ width: "65rem", height: "45rem" }}
          >
            <source src="/ProductVideo.mov" />
          </video> */}
          {/* <iframe className="mx-6"  src="https://www.youtube-nocookie.com/embed/s2FC9SdrUR4?si=aGl0iN4qkosK_CuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}



          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "full product.png",
                modelTitle: "Full Package",
                modelToggle: "img",
                price: 299.99,
                disPrice: 350
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="Full package"
              style={{ height: "18.5rem" }}
              width={550}
              height={350}
              src={`/full product.png`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>
          {/* width="250rem" height="200rem" */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 3xl:grid-cols-5  gap-4" data-aos="fade-up"
          data-aos-duration="3000">

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "motherbox.jpeg",
                modelTitle: "Mother Box",
                modelToggle: "img",
                price: 99,
                disPrice: 110
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="Air Bag Sensor Image"
              style={{ height: "15rem" }}
              width={550}
              height={350}
              src={`/motherbox.jpeg`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "Automotive Air bag sensor iso.JPG",
                modelTitle: "Automotive Air bag sensor",
                modelToggle: "img",
                price: 20,
                disPrice: 35
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="Air Bag Sensor Image"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/Automotive Air bag sensor iso.JPG`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "WEB CAM iso.JPG",
                modelTitle: "Web cam",
                modelToggle: "img",
                price: 40,
                disPrice: 45
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="Main box"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/WEB CAM iso.JPG`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>


          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "Vibrator.png",
                modelTitle: "Vibrator",
                modelToggle: "img",
                price: 15,
                disPrice: 20
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="Main box"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/Vibrator.png`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "display.jpg",
                modelTitle: "Display",
                modelToggle: "img",
                price: 50,
                disPrice: 55
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="display"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/display.jpg`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "Radar Sensor iso.JPG",
                modelTitle: "rader sensor",
                modelToggle: "img",
                price: 25,
                disPrice: 30
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              alt="rader"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/Radar Sensor iso.JPG`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "Speedometer iso copy.JPG",
                modelTitle: "Tacho meter",
                modelToggle: "img",
                price: 15,
                disPrice: 20
              })
            }
            onMouseMove={() => setShowBuy(false)}
          >
            <Image
              style={{ height: "15rem" }}
              src={`/Speedometer iso copy.JPG`}
              alt="speedometer"
              width={350}
              height={250}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>
        </div>
      </div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[25px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Have a close look
      </motion.div>


      {/* TODO: long product */}
      <div className="grid grid-cols-1 3xl:grid-cols-4 md:grid-cols-2 gap-4" onMouseEnter={() => setProductImage({ modelToggle: "model" })} data-aos="fade-up"
        data-aos-duration="3000">
        <div className="grid gap-4">
          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "automotive air bag sensor a.glb",
                modelTitle: "Automotive air bag sensor",
              })
            }
          >
            <model-viewer
              style={{ height: "40rem" }}
              src={`/formatted/automotive air bag sensor a.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>

          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "hcsr04 ultrasonic sensor.glb",
                modelTitle: "hcsr04 ultrasonic sensor",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/hcsr04 ultrasonic sensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}
          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "rain sensor.glb",
                modelTitle: "Rain sensor",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/rain sensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}

          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "radar sensor.glb",
                modelTitle: "Radar sensor",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/radar sensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>
        </div>
        <div className="grid gap-4">
          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "rain sensor.glb",
                modelTitle: "Rain sensor",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/rain sensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}

          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "speedometer.glb",
                modelTitle: "Speedometer",
              })
            }
          >
            <model-viewer
              style={{ height: "30rem" }}
              src={`/formatted/speedometer.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}

          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "web camera.glb",
                modelTitle: "web camera",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/web camera.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>
        </div>
        <div className="grid gap-4">
          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "part1BaseWithPorts.glb",
                modelTitle: "Mother Box",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/part1BaseWithPorts.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>

          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "pocketSensor.glb",
                modelTitle: "Vibrator",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/pocketSensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>

          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "part2UpperPrt.glb",
                modelTitle: "Upper part",
              })
            }
          >
            <model-viewer
              style={{ height: "35rem" }}
              src={`/formatted/part2UpperPrt.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}
        </div>
        <div className="grid gap-4">
          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "display.glb",
                modelTitle: "Display",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/display.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>

          {/* <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "circuitAsPart.glb",
                modelTitle: "Circuit part",
              })
            }
          >
            <model-viewer
              style={{ height: "40rem" }}
              src={`/formatted/circuitAsPart.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div> */}

          <div
            className="bg-[#dee0e1] flex justify-center items-center rounded-md"
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "speedometer.glb",
                modelTitle: "Techo meter",
              })
            }
          >
            <model-viewer
              style={{ height: "25rem" }}
              src={`/formatted/speedometer.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
              auto-rotate
            ></model-viewer>
          </div>
        </div>
      </div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[25px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Deep view to the features
      </motion.div>
      <div className="flex justify-center align-center w-full">
        <iframe className="mx-6" width="560" height="300" src="https://www.youtube.com/embed/6053wFaAZzc?si=ImnMh604yuLjH8dl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </>
  );
};

export default ProjectCard;
