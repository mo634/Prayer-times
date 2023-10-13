import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PrayerCard({time,src, name}) {
    return (
        <Card sx={{maxWidth: 370 ,width:"18%"}}>
            <CardMedia sx={{height: 140}} image={src} title="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {name}
                </Typography>
                <Typography variant="h3" color="text.secondary">
                    {time}
                </Typography>
            </CardContent>
        </Card>
    );
}
