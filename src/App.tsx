import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function App() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <main>
      <section className="grid grid-cols-12">
        <div className="col-span-8">
          <TextGenerateEffect words={words} />
        </div>
      </section>
    </main>
  );
}

export default App;
