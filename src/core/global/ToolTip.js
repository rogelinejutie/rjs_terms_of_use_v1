
import { withStyles } from "@mui/styles";
import { Tooltip } from "@mui/material";

export const ToolTip = withStyles({
    tooltip: {
        color: "#ffffff",
        backgroundColor: "#669ede",
        padding:'10px',
        boxShadow:'0 1rem 3rem rgba(0, 0, 0, .175) !important',
    },
    arrow: {
        color: "#669ede",
        boxShadow:'0 1rem 3rem rgba(0, 0, 0, .175) !important',
    },
})(Tooltip);    