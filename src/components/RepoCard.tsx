import { Component, createEffect } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unSaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id !== repoId);
  setSavedRepos(nextState);
};

const isRepoSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((item) => item.id === repoId);
  return repo?.length > 0;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="max-w-sm sm:flex sm:max-w-md w-full mb-4 lg:max-w-full lg:flex lg:items-center border border-gray-400 rounded-md p-4 ">
      <div
        class="p-8 flex-none bg-cover rounded-t lg:rounded-l text-center overflow-hidden"
        style={{
          "background-image": `url(${repo.owner.avatar_url})`,
          width: "170px",
          height: "170px",
        }}
        title="github profile pic"
      ></div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none w-full lg:rounded-r p-4 flex flex-col leading-loose">
        <div class="mb-8">
          <p class="text-md text-gray-600 flex items-center py-2 pl-2 rounded-t-md mb-1 bg-gray-200">
            &#11088; stars: {repo.stargazers_count}
          </p>
          <div class="h-[1px] bg-gray-900 mb-2"></div>
          <a
            href={repo.html_url}
            class="text-lg no-underline text-blue-500 font-normal"
          >
            <strong>{repo.owner?.login}</strong>/{repo.name}
          </a>
          <p class="text-gray-700 text-sm ">{repo.description}</p>
        </div>
        {isRepoSaved(repo.id) ? (
          <button
            onclick={() => unSaveRepo(repo.id)}
            class="px-6 py-1 w-28 rounded-md text-white bg-red-700 hover:bg-red-800"
          >
            Unsave
          </button>
        ) : (
          <button
            onclick={() => saveRepo(repo)}
            class="px-6 py-1 w-28 rounded-md text-white bg-green-700 hover:bg-green-800"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
