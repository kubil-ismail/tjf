import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function _contact_us_content_1() {
  return (
    <Box mt="50px">
      <Container>
        <Typography variant="body1" fontSize="18px" sx={{ mb: 1 }}>
          Contact Us
        </Typography>

        <Typography variant="h1" color="primary" fontSize="32px" sx={{ mb: 2 }}>
          GET IN TOUCH
        </Typography>

        <Typography sx={{ mb: 2 }}>
          As an independent organization with big dreams, our door is always
          open for discussion. We welcome all forms of support from all external
          entities that share the same vision as ours.
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Whether you are a part of an organization which wants to broaden the
          network, a company who puts sustainability on top of business concern,
          or just someone who cares about the better life of the future
          generation, this is the right time to act!
        </Typography>

        {React.Children.toArray(
          [
            {
              icon: <img src="/icons/location.svg" width="30px" />,
              title: "Location",
              body: `Rawa Bebek Utara No.26, Penjaringan, North Jakarta – Indonesia`,
            },
            {
              icon: <img src="/icons/envelope.svg" width="30px" />,
              title: "Email",
              body: `info@tayjuhanafoundation.org`,
            },
            {
              icon: <img src="/icons/phone.svg" width="30px" />,
              title: "Phone",
              body: `+62-21-660-3926 <br/>+62-21-660-4026`,
            },
          ].map((item) => (
            <Box display="flex" gap="20px" alignItems="center" mb="25px">
              <Box
                bgcolor="#128C33"
                width="80px !important"
                minWidth="80px"
                height="80px"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {item.icon}
              </Box>

              <Box>
                <Typography variant="h6" fontSize="14px" gutterBottom>
                  {item.title}
                </Typography>
                <Box dangerouslySetInnerHTML={{ __html: item.body }}></Box>
              </Box>
            </Box>
          ))
        )}

        <Box
          bgcolor={(props) => props.palette.primary.main}
          padding="20px"
          borderRadius="8px"
          mt="50px"
        >
          <Typography color="#fff" variant="h6" fontSize="18px" sx={{ mb: 2 }}>
            Let’s explore possible opportunities to create something together
            and be a part of the solution.
          </Typography>

          <Typography variant="h6" color="#fff" gutterBottom>
            Name
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your name here..."
            fullWidth
            sx={{
              "& fieldset": { border: "1px solid #fff !important" },
              input: {
                color: "#fff",
                "&::placeholder": {
                  // <----- Add this.
                  opacity: 1,
                  color: "#979797",
                },
              },
              mb: 2,
            }}
          />

          <Typography variant="h6" color="#fff" gutterBottom>
            Email
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your email here..."
            fullWidth
            sx={{
              "& fieldset": { border: "1px solid #fff !important" },
              input: {
                color: "#fff",
                "&::placeholder": {
                  // <----- Add this.
                  opacity: 1,
                  color: "#979797",
                },
              },
              mb: 2,
            }}
          />

          <Typography variant="h6" color="#fff" gutterBottom>
            Phone Number
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your phone number here..."
            fullWidth
            sx={{
              "& fieldset": { border: "1px solid #fff !important" },
              input: {
                color: "#fff",
                "&::placeholder": {
                  // <----- Add this.
                  opacity: 1,
                  color: "#979797",
                },
              },
              mb: 2,
            }}
          />

          <Typography variant="h6" color="#fff" gutterBottom>
            Inquires
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your email here..."
            fullWidth
            sx={{
              "& fieldset": { border: "1px solid #fff !important" },
              input: {
                color: "#fff",
                "&::placeholder": {
                  // <----- Add this.
                  opacity: 1,
                  color: "#979797",
                },
              },
              mb: 2
            }}
          />

          <Typography variant="h6" color="#fff" gutterBottom>
            Message
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your message here..."
            fullWidth
            multiline
            rows={4}
            sx={{
              "& fieldset": { border: "1px solid #fff !important" },
              textarea: {
                color: "#fff",
                "&::placeholder": {
                  // <----- Add this.
                  opacity: 1,
                  color: "#979797",
                },
              },
              mb: 4,
            }}
          />

          <ReCAPTCHA
            sitekey="6Ldwz9YqAAAAAPw66QrvWAYUA0rPg7kCZ0stSXBC"
            onChange={(e) => console.log(e)}
          />

          <Button
            variant="contained"
            color="warning"
            sx={{ paddingX: 4, paddingY: 2, mt: 4 }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default _contact_us_content_1;
