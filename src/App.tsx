import { useRef } from "react";
import "./App.css";
import { HeartsBackground } from "./components/HeartsBackground";
import { InvitationSection } from "./components/InvitationSection";
import { GradientWave } from "./components/ui/gradient-wave";

function App() {
  const invitationRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    invitationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full h-full relative">
      {/* Фіксований фон для всієї сторінки */}
      <div className="fixed inset-0 z-0">
        <GradientWave
          colors={[
            "#ffb3d9", // яскраво рожевий
            "#ff3366", // рожевий
            "#ffffff", // білий
            "#ffafc9", // світло рожевий
            "#ffffff", // білий
            "#ffc1d4", // м'який рожевий
          ]}
          shadowPower={4}
          darkenTop={false}
          noiseSpeed={0.00001} // Повільніше
          noiseFrequency={[0.00008, 0.0002]} // Менше частота
          deform={{
            incline: 0.2, // Менше нахилу
            noiseAmp: 100, // НАБАГАТО менша амплітуда (було 150)
            noiseFlow: 2, // Повільніший flow
            noiseSpeed: 6, // Повільніше
          }}
        />
      </div>

      <div className="relative">
        <HeartsBackground onYesClick={handleYesClick} />
        <div ref={invitationRef}>
          <InvitationSection />
        </div>
      </div>
    </div>
  );
}

export default App;
