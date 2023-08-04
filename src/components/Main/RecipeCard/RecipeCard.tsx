import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './RecipeCard.scss';

function RecipeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Brioche au cum" subheader="September 14, 2016" />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Button variant="contained" sx={{ m: 1 }}>
        Voir la recette
      </Button>
    </Card>
  );
}

export default RecipeCard;
