import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

type Props = {
  categories: string[];
  handleChange: any;
  value: string;
};
export default function ScrollableTabsButtonVisible({
  categories,
  handleChange,
  value,
}: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: "100%" },
        bgcolor: "transparent",
        color: "white",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        selectionFollowsFocus
        aria-label="visible arrows tabs example"
        sx={{
          ["& .Mui-selected"]: {
            color: "#a855f7",
          },
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          ["& .MuiTabs-indicator"]: {
            backgroundColor: "#6b21a8",
          },
          ["& .MuiTabs-flexContainer"]: {
            gap: "1rem",
          },
          ["& .MuiTabScrollButton-root"]: {
            color: "#a855f7",
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            label={category}
            disableRipple
            value={category}
            sx={{
              color: "white",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
