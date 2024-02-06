import logo from "./assets/logo-nlw-experts.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem iste, recusandae at voluptas ipsa, eligendi vitae rerum molestias animi doloribus harum dolores sequi quisquam eaque, magni deleniti nisi cumque fugiat!",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, expedita maxime libero alias dolor iure doloremque incidunt commodi optio omnis beatae dolore? Consequatur atque suscipit harum distinctio odio dolor debitis.",
          }}
        />
      </div>
    </div>
  );
}
