import React from "react";
import {
  EditButton,
  ShowButton,
  TextField,
} from "react-admin";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

const cardStyle = {
    width: 330,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const subtitleStyle = {
    height: 160,
    textOverflow: 'ellipsis',
    marginBottom: 15,
    overflow: 'hidden',
    marginTop: 15 
}

export default (data : any) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return(
    <div style={{ margin: '1em' }}>
    {
    //     ids.map((id: any) => {
    //     return(
    //         <Card key={id} style={cardStyle}>
    //             <CardMedia
    //                 style={{height: 200}}
    //                 image={data[id].backgroundUrl}
    //                 title="Contemplative Reptile"
    //             />
    //             <CardHeader
    //                 style={{height: 60}}
    //                 title={<Typography variant="subheading">{data[id].title}</Typography>}
    //             />
    //             <CardContent>
    //                 <Typography variant="caption">Publicado: {moment(data[id].publicationDate).format('DD/MM HH:mm')}</Typography>
    //                 <TextField record={data[id]} style={subtitleStyle} source="subtitle" />
    //             </CardContent>
    //             <CardActions style={{  }}>
    //                 <EditButton resource="posts" basePath={basePath} record={data[id]} />
    //                 <ShowButton resource="posts" basePath={basePath} record={data[id]} />
    //             </CardActions>
    //         </Card>
    //     )
    // }
    // )
    }
    </div>
    )
}