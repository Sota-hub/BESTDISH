import { useState } from "react";
import {
  useForm,
  Controller,
  useFormContext,
  // FormProvider,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import DropZone from "../../parts/DropZone";
import PostOptions from "./PostOptions";

const schema = yup.object().shape({
  dishName: yup.string().required(),
  evaluation: yup.number().required().moreThan(0).lessThan(5.1),
  price: yup.number().required(),
  address: yup.string().required(),
  clarification: yup.string(),
  openHour: yup.string(),
  dayOff: yup.string(),
  website: yup.string(),
});

const PostForm = ({ setPostData, setIsConfirmPage }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  // const methods = useForm();
  const { control } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    setPostData(data);
    setIsConfirmPage(true);
    reset();
  };

  return (
    <>
      <h1 className="text-2xl ml-2 w-[80%]  ">Post</h1>
      <p className="text-orange text-xs ml-3">* is required</p>
      {/* <FormProvider {...methods}> */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="my-4">
          <label htmlFor="dishName">
            <span className="supportText text-orange">* </span>Dish name
          </label>
          <input
            type="text"
            name="dishName"
            placeholder="Dish name"
            className="postInputBarStyle"
            {...register("dishName")}
          ></input>
          {errors.dishName && (
            <p className="text-red">DishName must be string</p>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="rating">
            <span className="supportText text-orange">* </span>Rating
          </label>
          <input
            type="number"
            name="evaluation"
            placeholder="Rating"
            className="postInputBarStyle"
            {...register("evaluation")}
          ></input>
          {errors.rating && (
            <p className="text-red">Rating must be a number between 0 to 5</p>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="image">
            <span className="supportText text-orange">* </span>Image
          </label>
          {/* =========================================================================================== */}
          <Controller
            control={control}
            name="image"
            rules={{ required: true }}
            defaultValue=""
            render={({ onChange }) => (
              <DropZone onChange={(e) => onChange(e.target.files[0])} />
            )}
          />
          {/* =========================================================================================== */}
        </div>
        <div className="my-4">
          <label htmlFor="price">
            <span className="supportText text-orange">* </span>Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="postInputBarStyle"
            {...register("price")}
          ></input>
          {errors.rating && <p className="text-red">Price must be number</p>}
        </div>
        <div className="my-4">
          <label htmlFor="address">
            <span className="supportText text-orange">* </span>Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="postInputBarStyle"
            {...register("address")}
          ></input>
          {errors.rating && <p className="text-red">Address must be string</p>}
        </div>
        <div className="my-4">
          <div
            className="flex justify-between border-b py-3"
            onClick={() => {
              setIsOptionsOpen(!isOptionsOpen);
            }}
          >
            <label htmlFor="options">Options</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="32px"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOptionsOpen && <PostOptions register={register} />}
        </div>
        <input
          type="submit"
          value="Confirm"
          className="pinkButton block text-center leading-[4em] my-8 cursor-pointer"
        ></input>
      </form>
      {/* </FormProvider> */}
    </>
  );
};

export default PostForm;
