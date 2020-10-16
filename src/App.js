import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        image="https://img.gentside.com/article/1024/record/l-homme-le-plus-moche-du-monde-s-appelle-tang-shuquan_d0b42e93e960a5b64c876f1c5df47d632173ed2b.jpg"
        name="Rober Piche"
        status={false}
      />
      <Contact
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWR44fXQ9t35pH3e3dsvvJTpz4YY2auPV7Zw&usqp=CAU"
        name="Pierre Laclasse"
        status={false}
      />
      <Contact
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY39h3XBQrh7YN81NCgL3CRV_WxzjztYJE-w&usqp=CAU"
        name="Cindy Joly"
        status={true}
      />
    </div>
  );
}

export default App;
