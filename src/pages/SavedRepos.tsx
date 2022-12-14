import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const [savedRepos, setSavedRepos] = createSignal([] as Repo[]);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>SavedRepos</h2>
      <For each={savedRepos()}>
        {(repo: Repo) => <RepoCard repo={repo} />} 
      </For>
    </div>
  );
};

export { setSavedRepos, savedRepos }

export default SavedRepos;
