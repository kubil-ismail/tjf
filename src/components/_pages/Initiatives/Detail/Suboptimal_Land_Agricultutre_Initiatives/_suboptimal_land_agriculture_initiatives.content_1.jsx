import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  CardActionArea,
  IconButton,
  Grow,
  FormControlLabel,
  Checkbox,
  Chip,
  Button,
  Pagination,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileView from "./mobile/_suboptimal_land_agriculture_initiatives.content_1";
import Link from "next/link";

function _suboptimal_land_agriculture_initiatives_content_1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isLocation, setIsLocation] = React.useState(true);
  const [isTypeOfLand, setIsTypeOfLand] = React.useState(true);
  const [isTypeOfComodity, setIsTypeOfComodity] = React.useState(true);

  const [location, setLocation] = React.useState([]);
  const [typeOfLand, setTypeOfLand] = React.useState([]);
  const [typeOfComodity, setTypeOfComodity] = React.useState([]);

  const handleLocation = (value, variant) => {
    if (!value) {
      setLocation(location?.filter((item) => item !== variant));
    } else {
      setLocation([...location, ...[variant]]);
    }
  };

  const handleTypeOfLand = (value, variant) => {
    if (!value) {
      setTypeOfLand(typeOfLand?.filter((item) => item !== variant));
    } else {
      setTypeOfLand([...typeOfLand, ...[variant]]);
    }
  };

  const handleTypeOfComodity = (value, variant) => {
    if (!value) {
      setTypeOfComodity(typeOfComodity?.filter((item) => item !== variant));
    } else {
      setTypeOfComodity([...typeOfComodity, ...[variant]]);
    }
  };

  const handleReset = () => {
    setLocation([]);
    setTypeOfLand([]);
    setTypeOfComodity([]);
  };

  return (
    <>
      <Box pt="50px" pb="100px" display={isMobile ? "none" : "block"}>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid size={{ md: 2 }}>
              <Typography
                variant="h4"
                color="primary"
                fontFamily="Poppins"
                fontWeight="700"
                gutterBottom
              >
                Filter
              </Typography>

              {/* Topic */}
              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pt="10px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Location
                </Typography>
                <IconButton onClick={() => setIsLocation(!isLocation)}>
                  {isLocation ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isLocation} unmountOnExit>
                <Box mt={1} position="relative">
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleLocation(e.target.checked, "Sumatera")
                          }
                          checked={Boolean(
                            location?.find((item) => item === "Sumatera")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Sumatera</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleLocation(e.target.checked, "Kalimantan")
                          }
                          checked={Boolean(
                            location?.find((item) => item === "Kalimantan")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Kalimantan</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleLocation(e.target.checked, "Papua")
                          }
                          checked={Boolean(
                            location?.find((item) => item === "Papua")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Papua</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grow>

              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pt="20px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Type of Land
                </Typography>
                <IconButton onClick={() => setIsTypeOfLand(!isTypeOfLand)}>
                  {isTypeOfLand ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isTypeOfLand} unmountOnExit>
                <Box mt={1} position="relative">
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleTypeOfLand(e.target.checked, "Peatland")
                          }
                          checked={Boolean(
                            typeOfLand?.find((item) => item === "Peatland")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Peatland</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleTypeOfLand(e.target.checked, "Swamp Land")
                          }
                          checked={Boolean(
                            typeOfLand?.find((item) => item === "Swamp Land")
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Swamp Land</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grow>

              <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #979797"
                alignItems="center"
                pt="20px"
              >
                <Typography
                  fontSize="19px"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  Type of Comodity
                </Typography>
                <IconButton
                  onClick={() => setIsTypeOfComodity(!isTypeOfComodity)}
                >
                  {isTypeOfComodity ? (
                    <KeyboardArrowDownIcon htmlColor="#979797" />
                  ) : (
                    <KeyboardArrowUpIcon htmlColor="#979797" />
                  )}
                </IconButton>
              </Box>

              <Grow in={isTypeOfComodity} unmountOnExit>
                <Box mt={1} position="relative">
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleTypeOfComodity(
                              e.target.checked,
                              "Horticulture"
                            )
                          }
                          checked={Boolean(
                            typeOfComodity?.find(
                              (item) => item === "Horticulture"
                            )
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Horticulture</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleTypeOfComodity(e.target.checked, "Food Crops")
                          }
                          checked={Boolean(
                            typeOfComodity?.find(
                              (item) => item === "Food Crops"
                            )
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>Food Crops</Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>

                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) =>
                            handleTypeOfComodity(
                              e.target.checked,
                              "Seasonal Crops"
                            )
                          }
                          checked={Boolean(
                            typeOfComodity?.find(
                              (item) => item === "Seasonal Crops"
                            )
                          )}
                        />
                      }
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Typography fontWeight={500}>
                            Seasonal Crops
                          </Typography>

                          <Chip
                            color="#000000"
                            label="11"
                            sx={{ position: "absolute", right: 0 }}
                          />
                        </Box>
                      }
                    />
                  </Box>
                </Box>
              </Grow>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: 3, py: "15px" }}
                onClick={handleReset}
              >
                Reset
              </Button>

              <Box
                bgcolor="#233E83"
                padding="20px"
                borderRadius="8px"
                mt="40px"
              >
                <Typography
                  variant="h6"
                  fontSize="18px"
                  align="center"
                  color="#fff"
                  fontFamily="Poppins"
                  fontWeight="700"
                >
                  You have relevant success story ? <br />
                  Send to Us!
                </Typography>

                <Box display="flex" justifyContent="center">
                  <Link href="/contact-us">
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ mt: 3, py: "15px" }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ md: 9.7 }}>
              <Grid container>
                {React.Children.toArray(
                  [
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2025/03/4-1024x573.png",
                      title:
                        "Maximizing Nature’s Concealed Potential in Wetland Agriculture",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/10/DSC07729-1024x580.jpg",
                      title:
                        "Tay Juhana Foundation Achieves Success at World Coconut Day 2024",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/07/announcement-1024x1008.png",
                      title:
                        "Can We Feast from Peatland Agriculture? – TJF Challenge #PeatParty",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-10.50.14_6d60c486-1024x768.jpg",
                      title:
                        "Tay Juhana Foundation Update: Social Capital and Coconut Sustainability",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/10/zoom-bg-tys-2-1024x576.png",
                      title:
                        "#tellyourstory 2.0 Final Event: They Took Their Action to Secure Our Food from Crisis!",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2022/09/FAQ-1024x576.png",
                      title: "FAQ #TellYourStory 2022",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-11-at-15.39.05-2-1024x768.jpeg",
                      title:
                        "Peatlands need you, you need peatlands: A call to support peatland actions",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2021/08/WhatsApp-Image-2021-06-08-at-14.30.32-1024x1024.jpeg",
                      title:
                        "#PEATPARTY Report: Exploring Peatlands and Sustainability",
                    },
                    {
                      image:
                        "https://tayjuhanafoundation.org/wp-content/uploads/2021/03/wetland-challenge-reminder-8feb-80-e1616485936466-1024x571.jpg",
                      title:
                        "TJF Wetlands Day Challenge: Help Joni to Find Treasure from His Parents!",
                    },
                  ].map((item) => (
                    <Grid size={{ md: 4 }} sx={{ px: "10px" }}>
                      <Link
                        href={`/initiatives/suboptimal-land-agricultutre-initiatives/slug`}
                      >
                        <CardActionArea sx={{ mb: "50px" }}>
                          <Box
                            bgcolor="lightgray"
                            height="230px"
                            position="relative"
                            sx={{
                              backgroundImage: `url('${item.image}')`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            boxShadow="-1px -1px 10px rgba(0, 0, 0, 0.1)"
                          >
                            <Box
                              bgcolor="#fff"
                              height="100px"
                              boxShadow="1px 1px 1px rgba(0, 0, 0, 0.1)"
                              position="absolute"
                              width="90%"
                              bottom="-20px"
                              left={0}
                              padding="10px 20px"
                            >
                              <Typography
                                variant="body2"
                                color="secondary"
                                gutterBottom
                              >
                                Papua - Peatland - Horticulture
                              </Typography>
                              <Typography
                                variant="h6"
                                fontSize="16px"
                                sx={{
                                  display: "-webkit-box",
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  WebkitLineClamp: 2, // Membatasi ke 2 baris
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </Box>
                        </CardActionArea>
                      </Link>
                    </Grid>
                  ))
                )}

                <Box
                  display="flex"
                  width="100%"
                  justifyContent="center"
                  mt="30px"
                >
                  <Pagination
                    count={10}
                    variant="outlined"
                    shape="rounded"
                    sx={{
                      "& .MuiButtonBase-root": {
                        border: "none",
                        backgroundColor: "#D9D9D9",
                        paddingX: "32px",
                        paddingY: "22px",
                        fontWeight: 600,
                        color: "#979797",
                      },
                      "& .MuiPaginationItem-previousNext": {
                        backgroundColor: "#979797 !important",
                        color: "#fff",
                      },
                      "& .Mui-selected": {
                        backgroundColor: (props) =>
                          `${props.palette.success.main} !important`,
                        color: "#fff",
                      },
                      "& .Mui-selected:hover": {
                        backgroundColor: (props) => props.palette.success.main,
                      },
                      "& .MuiButtonBase-root:hover": {
                        backgroundColor: "#D9D9D9",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {isMobile ? <MobileView /> : null}
    </>
  );
}

export default _suboptimal_land_agriculture_initiatives_content_1;
