import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SmilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: 0 } }}>
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" mb={5}>
          Exercises that target same muscle group.
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h3" mb={5}>
          Exercises that use similar equipment.
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
          {equipmentExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SmilarExercises;
