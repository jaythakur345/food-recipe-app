import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Recipe = ({ recipes }) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} align="center" justify="center" alignItems="center">
            {
                recipes.map(recipe => {
                    return (
                        <Grid item xs={4} sm={4} md={4} mt={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={recipe.recipe.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            <Link color={'inherit'}
                                                href={recipe.recipe.url}
                                                target="_blank"
                                                rel="noreferrer" 
                                                underline="none"
                                                >
                                                {recipe.recipe.label}
                                            </Link>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>)
                })
            }
        </Grid>
    )
}

export default Recipe