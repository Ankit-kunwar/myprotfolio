
"use client";

import { useEffect } from "react";

const PrayerBreakdownModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="prayer-breakdown-title"
    >
      <div
        className="relative my-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white p-6 shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xl leading-none text-gray-700 hover:bg-rose-50 hover:text-rose-600"
          aria-label="Close mathematical breakdown"
        >
          ×
        </button>

        <article className="prose-none space-y-6 pr-8 text-left text-gray-800">
          <header>
            <h2
              id="prayer-breakdown-title"
              className="font-Ovo text-2xl leading-snug sm:text-3xl"
            >
              Does Prayer Work? A Mathematical Breakdown of the &quot;God
              Placebo&quot;
            </h2>
          </header>

          <p>
            Yes, prayer works, but not in the way traditional religion teaches.
            It does not work by convincing a personified deity to break the laws
            of physics for you. Instead, it operates as a highly practical tool
            for probability management, neurochemical regulation, and behavioral
            engineering.
          </p>
          <p>
            When you view &quot;God&quot; as the Absolute System—the total sum of
            the laws of physics, biology, and chemistry—prayer becomes a method
            of inputting code into your own biological operating system.
          </p>
          <p>
            Here is the exact mathematical and scientific breakdown of how a
            daily ritual alters your physical reality.
          </p>

          <hr className="border-gray-200" />

          <section>
            <h3 className="mb-3 font-Ovo text-xl text-rose-600 sm:text-2xl">
              1. The 25% Baseline Placebo Engine
            </h3>
            <p>
              In clinical medical science, double-blind trials consistently show
              that the pure mind-body connection possesses a baseline efficiency
              floating between 20% and 30%. For this mathematical model, we
              establish a fixed 25% structural weight for the power of belief
              over physical recovery and performance.
            </p>
            <p className="mt-3">
              However, this 25% engine does not operate in a vacuum. It is
              governed by a strict law of proportionality:
            </p>
            <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-center font-medium">
              Placebo Power ∝ (Adherence to Science / Panicked Demand)
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong>Directly Proportional to Science:</strong> If you pray
                for a broken bone to heal but refuse to wear a cast, the value
                of your placebo engine drops to 0%. The absolute system of
                nature overrides blind belief. The ritual functions strictly as
                an amplifier of physical reality.
              </li>
              <li>
                <strong>Inversely Proportional to Panicked Demand:</strong> The
                moment your prayer turns into a desperate, frantic
                &quot;demand&quot; for an instant miracle, your brain registers
                that obsession as an existential threat, triggering stress
                hormones that actively damage your body.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-3 font-Ovo text-xl text-rose-600 sm:text-2xl">
              2. The 3-Path Probability Matrix
            </h3>
            <p>
              When you inject a specific intent or ritual into a chaotic
              universe, you split your potential long-term outcomes into three
              distinct mathematical windows:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-gray-900 p-4 text-xs leading-relaxed text-rose-100 sm:text-sm">
{`                  [ 25% TOTAL PLACEBO ENGINE ]
                               │
         ┌─────────────────────┴─────────────────────┐
         ▼                                           ▼
 [ 66.67% SAFE WINDOW ]                     [ 33.33% RISK WINDOW ]
  - Path 1: The Positive Ripple (33.33%)     - Path 3: The Backfire Loop (33.33%)
  - Path 2: The Neutral Buffer  (33.33%)`}
            </pre>

            <h4 className="mt-6 font-Ovo text-lg">
              Path 1: The Intended Ripple (33.33% Probability)
            </h4>
            <p className="mt-2">
              The ritual creates absolute mental calm, causing the brain to
              completely suppress cortisol (stress) and flood the body with
              endorphins and Human Growth Hormone (HGH). This optimizes cellular
              repair.
            </p>
            <p className="mt-3">
              Simultaneously, the brain&apos;s Reticular Activating System (RAS)
              is programmed by the prayer to focus on a goal. You
              subconsciously execute microscopic changes in your behavior (e.g.,
              eating better, moving with more physical caution). This triggers a
              positive butterfly effect, shifting the probability of a
              successful outcome in your favor.
            </p>

            <h4 className="mt-6 font-Ovo text-lg">
              Path 2: The Neutral Buffer (33.33% Probability)
            </h4>
            <p className="mt-2">
              The ritual insulates you from emotional anxiety, but unyielding
              external variables (like genetics or unavoidable environmental
              factors) run their natural course. The system remains stable
              simply because your body is allowed to heal at its natural, fixed
              biological baseline without the destructive interference of stress
              chemicals.
            </p>

            <h4 className="mt-6 font-Ovo text-lg">
              Path 3: The Backfire Loop (33.33% Probability)
            </h4>
            <p className="mt-2">
              Your devotion mutates into high-stakes pressure. You become
              obsessed with forcing a specific outcome. The brain misinterprets
              this intense mental pressure as a threat and spikes adrenaline.
              Your muscles hyper-tense (increasing the risk of physical tears),
              your decision-making narrows, and if you face a minor setback, you
              experience a massive psychological crash that completely cripples
              your immune system.
            </p>
          </section>

          <section>
            <h3 className="mb-3 font-Ovo text-xl text-rose-600 sm:text-2xl">
              3. The Math Favors the Calm Process
            </h3>
            <p>
              The critical takeaway of this mathematical breakdown is that Paths
              1 and 2 combine to give you a 66.67% majority window where the
              butterfly effect works safely as intended or leaves your baseline
              secure.
            </p>
            <p className="mt-3">
              To successfully lock in the 66.67% safe window and completely
              neutralize the 33.33% backfire risk, you must change{" "}
              <em>how</em> you pray:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong>The 33.33% Trap (Outcome-Based):</strong> &quot;Please
                let me win this race&quot; or &quot;Please guarantee I never get
                sick again.&quot; (This creates panic, pressure, and eventual
                hormone spikes).
              </li>
              <li>
                <strong>The 66.67% Win (Process-Based):</strong> &quot;Let my
                mind stay calm, let me execute my actions with perfect
                precision, and let me accept whatever the absolute system
                delivers today.&quot;
              </li>
            </ul>
            <p className="mt-4">
              By using a ritual to conquer internal panic and align your actions
              with hard, objective science, you aren&apos;t asking for a
              miracle—you are running the human machine at its absolute peak
              thermodynamic efficiency.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrayerBreakdownModal;
