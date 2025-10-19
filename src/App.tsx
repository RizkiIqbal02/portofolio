import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function App() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <>
      <h5 className="font-bold">hello</h5>
      <TextGenerateEffect words={words} />
    </>
  );
}

export default App;
