import { Box } from '@mui/material'
import Recipe from './Recipe';

const Recipes = ({recipes}) => {

  return (
    <Box>
        <Recipe recipes={recipes} />
    </Box>
  )
}

export default Recipes