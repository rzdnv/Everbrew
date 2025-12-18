import { BG1BW } from "@/assets/BG";

export default function History() {
  return (
    <section
      id="history"
      className="p-28 my-12 bg-cover bg-center bg-no-repeat Mt-16 min-h-screen"
      style={{ backgroundImage: `url(${BG1BW})` }}
    >
      <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="font-mono text-4xl font-bold">Our Story</h2>
        <p className="font-mono text-slate-950">
          EVERBREW was created from a simple wish: to build a cozy space where
          people can slow down, enjoy good coffee, and feel at ease. What
          started as a small passion for handcrafted drinks grew into a
          comfortable corner that many choose as their favorite place to relax
          or focus.
        </p>
        <p className=" font-mono text-slate-950">
          From the beginning, the idea was never just about serving coffee — it
          was about creating a warm atmosphere that feels like a second home. A
          place to study, meet friends, unwind, or simply enjoy a quiet moment
          with your favorite drink.
        </p>
        <p className=" font-mono text-slate-950">
          Our commitment has remained the same since day one: <br />
          quality coffee,a comfortable space, and a mood that makes you want to
          stay just a little longer.
        </p>
        <p className=" font-mono text-slate-950 font-semibold">
          That spirit is what continues to shape EVERBREW today.
        </p>
      </div>
    </section>
  );
}
