import React, { useState } from "react";
import Modal from "./Modal";

const Rule = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mt-10 my-2 md:float-right md:mr-16 md:fixed md:bottom-5 md:right-16 flex justify-center ">
      <p
        className="border cursor-pointer p-2 px-8 rounded-md text-white tracking-wider"
        onClick={() => setModalOpen(true)}
      >
        RULES
      </p>
      <Modal open={modalOpen} modalClose={setModalOpen} />
    </div>
  );
};

export default Rule;
