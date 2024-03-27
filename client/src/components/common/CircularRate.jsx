import { Box, Typography, CircularProgress } from "@mui/material";

const CircularRate = ({ value }) => {
  // Round the value to one decimal place
  const roundedValue = value.toFixed(1);

  return (
    <Box sx={{
      position: "relative",
      display: "inline-block",
      width: "max-content"
    }}>
      <CircularProgress variant="determinate" value={value * 10} color="success" size={50} />
      <Box sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Typography
          variant="caption"
          component="div"
          fontWeight="700"
          sx={{ marginTop: "-5px" }}
        >
          {roundedValue}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularRate;
