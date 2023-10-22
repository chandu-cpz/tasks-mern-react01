//Not using component because of single functionality;
import { useState } from "react";
function App() {
  const [words, setWords] = useState(0);

  const countWords = (e) => {
    const para = e.target.value.trim(); //Get the value in the input box and trim it
    setWords(para.split(" ").length); // split it using " " and then the length should give us the no of words.
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="d-flex align-items-center justify-content-center flex-column "
      >
        <div >
          <h1>Responsive Paragraph Word Counter</h1>
          <form className="form-control py-3 px-5">
            <textarea
              type="text"
			  rows={10}
			  placeholder="This is some paragraph"
              className="form-control"
              onChange={countWords}
            />
            <p className="form-label py-4">Word Count: {words}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
