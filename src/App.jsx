import { ModeNight, Search, WbSunny } from '@mui/icons-material';
import { Box, Button, Container, createTheme, IconButton, InputBase, Stack, styled, ThemeProvider, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Recipes from './components/Recipes';

const SearchBox = styled(Box)({
  width:"100%",
  display: "flex",
  justifyContent:"center",
  gap: "10px",
  padding: "30px",
  borderBottom: "1px solid gray"
})
function App() {
  // States
  const [search, setSearch] = useState("salad");
  const [recipes, setRecipes] = useState([]);
  const [mode, setMode] = useState("light");

  // Create Dark Theme
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  // SetDarkMode Function
  const darkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  // Search Input
  const inputHandle = (e) => {
    setSearch(e.target.value);
  }

  // Get All Recipes
  const getRecipes = async () => {
    try {
      const result = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=c1aa49c0&app_key=3fd9dd2e5e5d39819586b940a426d96f&ingr=8&health=vegan`)
      if (result) {
        console.log(result.data.hits);
        setRecipes(result.data.hits);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [])


  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} width="100%" color={"text.primary"}>
        <Container>
          <Stack direction={"column"} alignItems="center" sx={{ paddingTop: "100px" }}>
            <Typography variant='h4' textAlign={"center"}>Food Recipe App 🍕🍔</Typography>
            <SearchBox mb={4}>
              <Tooltip title="Mode">
                <IconButton onClick={darkMode}>
                  {mode === "light" ? <ModeNight color={'text.primary'} /> : <WbSunny color={'text.primary'} />}
                </IconButton>
              </Tooltip>

              {/* Search Bar */}
              <InputBase placeholder='Search...'
                sx={{ width:"50%", bgcolor: "#f4f4f4", border: "1px solid gray", borderRadius: "5px", padding: "0px 15px", color: "black" }}
                onChange={e => inputHandle(e)}
              />
              <Button variant="contained" color='success' sx={{display:{xs:"none",sm:"flex"}}} startIcon={<Search />} onClick={getRecipes}>Search</Button>
              <Button variant="contained" color='success' sx={{display:{xs:"flex",sm:"none"}}} onClick={getRecipes}><Search /></Button>
            </SearchBox>
          </Stack>

          {/* Recipes Cards */}
          <Recipes recipes={recipes} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
