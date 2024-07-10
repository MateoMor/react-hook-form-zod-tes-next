"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validation/userSchema";

function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);

  return (
    <div>
      <form  onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">Name</label>
        <input type="email" id="email" {...register("email")} />

        {/* password */}

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />

        {/* confirm password */}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          id="confirmPassword"
        />

        {/* weight */}

        <label htmlFor="weight">Weight</label>
        <input type="number" {...register("weight")} id="weight" />

        {/* plans */}

        <label htmlFor="plan">Plan</label>
        <select id="plan" {...register("plan")}>
          <option value="free">free</option>
          <option value="basic">basic</option>
          <option value="medium">medium</option>
          <option value="premium">Premium</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <div>
        {JSON.stringify(watch(), null, 2)} {/* Muestra el valor de lso datos del formulario */}
      </div>
    </div>
  );
}

export default Home;
