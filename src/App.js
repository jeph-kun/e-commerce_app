import react, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:3003/auth",
      responseType: "json",
      data: { path: "http://localhost:3002/products/all" },
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjAxYjg2YjYwZmQxNjgxZjEwYmJhYTBlIiwiYWNjZXNzX2tleSI6InhjdXRpb25zaGlybzQ1IiwiaWF0IjoxNjEyNzA2Njg3LCJleHAiOjE2MTI3MDk2ODd9.XxbwRb0aQdmhTIWfOIphTBTincqWalXNsZrENEzZVRo",
      },
    }).then(function (response) {
      console.log(response.data);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
