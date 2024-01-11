"use client";
import Image from "next/image";
import Script from "next/script";
import React, { useState } from "react";
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
  });

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
                {productImage.modelTitle}
              </h1>

              {productImage.modelToggle === "img" ?
                <Image
                  src={`/${productImage.modelImageUrl}`}
                  style={{ width: "45rem", height: "45rem" }}
                  alt="this is a img"
                  width={450}
                  height={300}
                />
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
          <iframe className="mx-6"  src="https://www.youtube-nocookie.com/embed/s2FC9SdrUR4?si=aGl0iN4qkosK_CuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "motherbox.jpeg",
                modelTitle: "Main box",
                modelToggle: "img"
              })
            }
          >
            <Image
              alt="Air Bag Sensor Image"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/motherbox.jpeg`}
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
                modelImageUrl: "Automotive Air bag sensor iso.JPG",
                modelTitle: "Automotive Air bag sensor",
                modelToggle: "img"
              })
            }
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
                modelImageUrl: "Main Board iso.JPG",
                modelTitle: "Main board",
                modelToggle: "img"
              })
            }
          >
            <Image
              alt="Main box"
              style={{ height: "15rem" }}
              width={350}
              height={250}
              src={`/Main Board iso.JPG`}
              className="rounded-lg cursor-pointer"
            ></Image>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelImageUrl: "display.jpg",
                modelTitle: "Display",
                modelToggle: "img"
              })
            }
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
                modelToggle: "img"
              })
            }
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
                modelTitle: "Speedometer",
                modelToggle: "img"
              })
            }
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
                modelTitle: "Main board",
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
                modelTitle: "pocketSensor",
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
                modelTitle: "Speedometer",
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
    </>
  );
};

export default ProjectCard;
