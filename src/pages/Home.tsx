import { Component, createEffect, For } from "solid-js";
import { repos, setUsername, username } from "../App";
import RepoCard, { Repo } from "../components/RepoCard";

const Home: Component = () => {
  const fetchUserName = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  createEffect(() => {
    console.log(repos());
});

  return (
    <div>
      <form class="mb-12 flex items-center" onSubmit={(event) => fetchUserName(event)}>
        <input
          type="text"
          placeholder="Type github username..."
          class="p-[3px] border rounded-md mr-[10px] w-[250px] placeholder:text-sm"
          id="usernameInput"
          required
        />
        <button class="bg-black hover:bg-blue-700 text-white font-bold py-[6px] px-4 text-sm rounded">
          Fetch
        </button>
      </form>
      <h3 class="text-4xl text-center mb-4">Github repos for {username()}</h3>

      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
