"use client";
import toast from "react-hot-toast";
import FormInput from "../components/FormInput";

// react
import { useState } from "react";

function CreateBook() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const auth = formData.get("auth");
    const photo = formData.get("imgURL");
    const kategoriya = formData.get("kategoriya");
    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, auth, photo, kategoriya }),
    }).then(() => {
      e.target.reset();
      toast.success("you added new book");
      console.log("done");
    });
  };
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-2 p-5 mt-10 w-1/2 mx-auto border-2 rounded-md"
      >
        <FormInput
          name={"title"}
          label={"Title:"}
          placeholder={"book name..."}
        />
        <FormInput name={"auth"} label={"Auth:"} placeholder={"auth name..."} />
        <FormInput
          name={"imgURL"}
          label={"Book Img URL:"}
          placeholder={"img URL..."}
        />
        <FormInput
          name={"kategoriya"}
          label={"Kategoriye"}
          placeholder={"History..."}
        />
        <div className=" mt-6 w-full flex items-center justify-around ">
          <button className=" w-[45%] btn btn-active">Preview</button>
          <button className=" w-[45%] btn btn-active btn-neutral">
            Create Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBook;
