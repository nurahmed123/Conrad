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
  const [productImage, setProductImage] = useState();

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />

      <div className="grid gap-4 w-4/5 welcome-box">
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
            onMouseEnter={() => setProductImage("circuitAsPart.glb")}
          >
            <model-viewer
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
            onMouseEnter={() => setProductImage("part1BaseWithPorts.glb")}
          >
            <model-viewer
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
            onMouseEnter={() => setProductImage("part2UpperPrt.glb")}
          >
            <model-viewer
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
            onMouseEnter={() => setProductImage("pocketSensor.glb")}
          >
            <model-viewer
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
            onMouseEnter={() => setProductImage("display.glb")}
          >
            <model-viewer
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
              <model-viewer
                src={`/formatted/${productImage}`}
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
    </>
  );
};

export default ProjectCard;
