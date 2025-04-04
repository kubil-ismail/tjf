import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ChecvronIcon from "@/components/shared/icons/chevronDown";

function _food_security_sustainability_center_content_2() {
  return (
    <Box>
      <Container>
        <Typography variant="h5" color="primary" sx={{ mb: "20px" }}>
          Our planned activities are tailored to provide maximum <br />
          benefit to specific individuals or groups. They are:
        </Typography>

        {React.Children.toArray(
          [
            {
              title:
                "Vulnerable community groups living around FOSTER in Tanah Merah Village.",
              body: `Collabowriting adalah program kolaborasi antara penulis artikel dengan TJF yang mengangkat isu Ketahanan Pangan, Lahan Suboptimal, dan Pertanian Berkelanjutan dalam setiap tulisan yang akan dibuat. Program ini bertujuan untuk membentuk gerakan kolaboratif demi membangun kesadaran masyarakat akan pentingnya menjaga ketahanan pangan melalui pertanian berkelanjutan.`,
            },
            {
              title: "Indragiri Hilir Regency’s Coconut Farmers ",
              body: ``,
            },
            {
              title:
                "Adolescents and Youth who live in Indragiri Hilir Regency",
              body: ``,
            },
            {
              title:
                "Universities in Riau Province and Indragiri Hilir Regency",
              body: ``,
            },
            {
              title: "Government",
              body: ``,
            },
          ].map((item, index, array) => (
            <Accordion
              elevation={0}
              sx={{
                mb: "10px",
                backgroundColor: "#fff",
                "&::before": { backgroundColor: "#fff" },
              }}
            >
              <AccordionSummary
                expandIcon={<ChecvronIcon color="#979797" fontSize="15px" />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom:
                    array.length - 1 !== index ? "1px solid #000000" : "",
                  px: 0,
                }}
              >
                <Typography
                  component="span"
                  color="#000000"
                  variant="h6"
                  sx={{ mr: "30px" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 3 }}>
                {item.body}
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Container>

      <Box
        component="img"
        src="/images/image-3.jpg"
        width="100vw"
        height="250px"
        sx={{ objectFit: "cover", mb: '-10px' }}
      />
    </Box>
  );
}

export default _food_security_sustainability_center_content_2;
