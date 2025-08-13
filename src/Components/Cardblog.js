import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard(props) {
  return (
    <div className='hover:scale-105 transition-transform duration-300'>
    <Card sx={{ 
      maxWidth: 345,
      backgroundColor:"inherit",
      border:"none",
      boxShadow:"none",
      width: '100%'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="blog image"
          sx={{
            height: { xs: 120, sm: 130, md: 140 }
          }}
        />
        <CardContent sx={{ padding: { xs: 2, sm: 2.5, md: 3 } }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            sx={{ 
              color: 'white',
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
            }}
          >
            {props.title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'gray',
              fontSize: { xs: '0.875rem', sm: '0.875rem', md: '1rem' }
            }}
          >
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
  );
}
