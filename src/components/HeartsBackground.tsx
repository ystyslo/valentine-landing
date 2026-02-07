import { useState } from "react";
import { Gravity, MatterBody } from "./ui/gravity";
import heartSvg from "../assets/redheart.svg";
import { ValentineButtons } from "./ui/valentine-buttons";

const generateHearts = () => {
  const hearts = [];
  const count = 150;

  for (let i = 0; i < count; i++) {
    const size =
      Math.random() < 0.75 ? Math.random() * 20 + 30 : Math.random() * 30 + 50;

    hearts.push({
      id: i,
      x: Math.random() * 70 + 15,
      y: Math.random() * 30 - 10,
      angle: Math.random() * 360,
      size: size,
    });
  }

  return hearts;
};

export const HeartsBackground = ({
  onYesClick,
}: {
  onYesClick: () => void;
}) => {
  const [hearts] = useState(generateHearts());

  return (
    <div className="w-screen h-screen flex flex-col relative overflow-hidden">
      <h2 className="font-extrabold text-center pt-[100px] px-[200px] text-black mix-blend-overlay tracking-tighter text-9xl">
        Olenocka, will you be my Valentine?
      </h2>

      <Gravity gravity={{ x: 0, y: 0.2 }} className="w-full flex-1">
        {hearts.map((heart) => (
          <MatterBody
            key={heart.id}
            isDraggable={true}
            matterBodyOptions={{
              friction: 0.3,
              restitution: 0.5,
              density: 0.001,
            }}
            x={`${heart.x}%`}
            y={`${heart.y}%`}
            angle={heart.angle}
          >
            <img
              src={heartSvg}
              alt="heart"
              style={{
                width: heart.size,
                height: heart.size,
              }}
              className="cursor-grab active:cursor-grabbing"
            />
          </MatterBody>
        ))}
      </Gravity>

      <ValentineButtons onYesClick={onYesClick} />
    </div>
  );
};
