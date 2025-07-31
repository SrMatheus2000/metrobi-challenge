import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const Container = styled("div")({
  maxWidth: 1000,
  margin: "4rem auto",
  fontFamily: "sans-serif",
  fontSize: 32,
});

const Title = styled("h2")({
  marginBottom: "1rem",
  textAlign: "center",
});

const Label = styled("label")({
  display: "block",
  marginBottom: 4,
});

type BarProps = {
  progress: number;
  color: string;
};

const Track = styled("div")({
  width: "100%",
  height: 24,
  background: "#e0e0e0",
  borderRadius: 12,
  overflow: "hidden",
});

const Bar = styled("div")<BarProps>(({ progress, color }) => ({
  height: "100%",
  borderRadius: 12,
  transition: "width 1000ms linear",
  width: `${progress}%`,
  background: color,
}));

type ProgressBarProps = BarProps & {
  label: string;
};

/**
 * Simple progress bar with label
 */
const ProgressBar = ({ color, progress, label }: ProgressBarProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Track>
        <Bar color={color} progress={progress} />
      </Track>
    </>
  );
};

/** Turtle starts at 50% and moves 5% per second  */
const STARTING_CONDITION = { achilles: 0, tortoise: 50 };
/** Update every second */
const TICK_MS = 1000; 
/** Turtle moves 5% per tick */
const TURTLE_STEP = 5;
/** Achilles catches up 60% of the distance to the turtle each tick */
const CATCH_UP_FACTOR = 0.6;



export default function ZenoParadoxAnimation() {
  const [pos, setPos] = useState(STARTING_CONDITION);

  useEffect(() => {
    const id = setInterval(() => {
      setPos(({ achilles, tortoise }) => {
        // Resets when turtle reaches 100%
        if (tortoise >= 100) return STARTING_CONDITION;

        const nextTortoise = tortoise + TURTLE_STEP;
        const nextAchilles = achilles + (nextTortoise - achilles) * CATCH_UP_FACTOR;

        return { achilles: nextAchilles, tortoise: nextTortoise };
      });
    }, TICK_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <Title>Zeno&rsquo;s Paradox: Achilles &amp; the Tortoise</Title>

      <ProgressBar color="#ffeb3b" progress={pos.achilles} label="Achilles" />

      <ProgressBar color="#4caf50" progress={pos.tortoise} label="Tortoise" />
    </Container>
  );
}
