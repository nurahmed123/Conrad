"use client";
import Image from "next/image";
// import React from "react";
import Script from "next/script";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const ProjectCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productImage, setProductImage] = useState({
    modelURL: "",
    modelTitle: "",
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
              <model-viewer
                src={`/formatted/${productImage.modelURL}`}
                style={{ width: "45rem", height: "45rem" }}
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="1"
                environment-image="legacy"
              ></model-viewer>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="grid gap-4 w-4/5 welcome-box mx-auto">
        <div className="flex justify-center">
          <video
            autoPlay
            muted
            loop
            style={{ width: "65rem", height: "45rem" }}
          >
            <source src="/ProductVideo.mov" />
          </video>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "circuitAsPart.glb",
                modelTitle: "circuitAsPart",
              })
            }
          >
            <model-viewer
              style={{ height: "15rem" }}
              src={`/formatted/circuitAsPart.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
            ></model-viewer>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "part1BaseWithPorts.glb",
                modelTitle: "part1BaseWithPorts",
              })
            }
          >
            <model-viewer
              style={{ height: "15rem" }}
              src={`/formatted/part1BaseWithPorts.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
            ></model-viewer>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "part2UpperPrt.glb",
                modelTitle: "Upper Part",
              })
            }
          >
            <model-viewer
              style={{ height: "15rem" }}
              src={`/formatted/part2UpperPrt.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
            ></model-viewer>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "pocketSensor.glb",
                modelTitle: "pocketSensor",
              })
            }
          >
            <model-viewer
              style={{ height: "15rem" }}
              src={`/formatted/pocketSensor.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
            ></model-viewer>
          </div>

          <div
            onClick={onOpen}
            onMouseEnter={() =>
              setProductImage({
                modelURL: "display.glb",
                modelTitle: "Display",
              })
            }
          >
            <model-viewer
              style={{ height: "15rem" }}
              src={`/formatted/display.glb`}
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="1"
              environment-image="legacy"
            ></model-viewer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              style={{ height: "40rem" }}
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
              style={{ height: "30rem" }}
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
              style={{ height: "35rem" }}
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
              style={{ height: "40rem" }}
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
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
