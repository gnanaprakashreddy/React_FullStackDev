import React from "react";
import {Card,CardImg,CardTitle,CardBody,CardText,Media,} from "reactstrap";
  
  function FormatDate({date}) {
    var options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  }

  function RenderCard({dish}){
    const card = 
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg src={dish.image} alt={dish.title} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>

    return card;
  }
  function RenderComments({comments}) {
    const dishComments = comments.map((c) => {
      return (
      <Media left body>
        <p>{c.comment}</p>
        <p>
          -- {c.author}, <FormatDate date={c.date}/>
        </p>
      </Media>
      )
    });
    return dishComments;
  }

  const DishDetail = (props) => {
    if (props.dish == null) return <div></div>;
    return (
      <div class="container">
        <div className="row">
          <RenderCard dish={props.dish}/>
          <div className="col-12 col-md-5 m-1"> 
            <h4>Comments</h4>
            <Media list><RenderComments comments={props.dish.comments}/></Media>
          </div>
        </div>
      </div>   
    );
  }
export default DishDetail;
