import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Car from './Card'
const MovieList = () =>{
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));

    const [movies, setmovies] = useState([
{
    Name:'Harry Poter',
   Price:'10 dollar',
   Image:"https://img-3.journaldesfemmes.fr/7XxwAKybCdMLswDbZfhBsvcy78Q=/750x/smart/a15388c1ebc848ec8e3200b560d69ea3/recipe-jdf/10029634.jpg",
   Description:"Trio de verrines, toasts et nems au saumon fumé et kiw",
   Texte:"Trio de verrines, toasts et nems au saumon fumé et kiw"
},
{
    Name:'Inseption ',
   Price:'100 dollar',
   Image:"https://mir-s3-cdn-cf.behance.net/projects/404/9e17d996843745.Y3JvcCw1MTEzLDQwMDAsNTA2LDA.jpg",
   Description:"Trio de verrines, toasts et nems au saumon fumé et kiw",
   Texte:"Trio de verrines, toasts et nems au saumon fumé et kiw"
},
{
    Name:'Inseption ',
   Price:'100 dollar',
   Image:'https://previews.123rf.com/images/dangsombroon/dangsombroon1408/dangsombroon140800065/31138442-spaghettis-saut%C3%A9s-avec-chrimp-et-l%C3%A9gumes.jpg',
   Description:"Trio de verrines, toasts et nems au saumon fumé et kiw",
   Texte:"Trio de verrines, toasts et nems au saumon fumé et kiw"
}
 ])
 const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
return ( 

<div>
{movies.map(movie => (
   <div className={classes.root}>
       <Car name={movie.Name} Image={movie.Image} Description={movie.Description} Texte={movie.Texte}/>
 </div>
))}


</div>

);




}




export default MovieList;