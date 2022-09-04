import { Routes, Route } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const [username, setUsername] = createSignal("maverickk6");
const [repos, setRepos] = createSignal([]);


createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?sort=created}`
  );
  const data = await res.json();
  setRepos(data);
});

const App: Component = () => {
 
  return (
    <div class="container mx-auto px-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export { username, setUsername, repos };

export default App;
