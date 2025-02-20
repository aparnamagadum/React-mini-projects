import { useEffect, useState } from "react";
import axios from "axios";

function TypeHead() {
  const [inp, setInp] = useState("");
  const [gitUsers, setGitUsers] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    async function handleUser() {
      if (!inp.trim()) {
        setGitUsers([]);
        setIndex(-1);
        return;
      }
      try {
        const user = await axios.get(`https://api.github.com/search/users?per_page=5&q=${inp}`);
        setGitUsers(user.data.items || []);
        setIndex(-1);
      } catch (err) {
        console.log(err);
      }
    }

    const debounceTimeout = setTimeout(handleUser, 300);
    return () => clearTimeout(debounceTimeout);
  }, [inp]);

  function handleIndex(e) {
    if (e.key === "ArrowDown") {
      setIndex((prev) => (prev < gitUsers.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && index >= 0) {
      setInp(gitUsers[index].login); 
      setGitUsers([]);
    }
  }

  return (
    <div>
      <h1>TypeHead Online</h1>
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.currentTarget.value)}
        onKeyDown={handleIndex}
        placeholder="Search for GitHub username"
        style={{ padding: 10, width: "250px" }}
      />
      <div>
        {gitUsers.map((user, idx) => (
          <div
            key={user.id}
            style={{
              padding: "10px",
              backgroundColor: index === idx ? "#d3d3d3" : "white", 
              cursor: "pointer",
            }}
          >
            {user.login}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeHead;

