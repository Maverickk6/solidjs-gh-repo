import { Component } from "solid-js";
import { NavLink } from "solid-app-router";
import { savedRepos } from "../pages/SavedRepos";

const Nav: Component = () => {
  return (
    <nav class="flex mt-5 mb-5 mx-auto md:w-full lg:w-full justify-center">
      <NavLink
        href="/"
        class="bg-blue-700 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 mx-2 rounded"
        end
        activeClass="bg-green-800"
      >
        Home
      </NavLink>
      <NavLink
        href="savedrepos"
        class="bg-blue-700 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 mx-2 rounded"
        activeClass="bg-green-800"
      >
        Saved ~ {savedRepos().length}
      </NavLink>
    </nav>
  );
};

export default Nav;
