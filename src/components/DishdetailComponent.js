import React from "react";
import {Card,CardImg,CardTitle,CardBody,CardText,Media,Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';
  
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
    console.log(comments);
      return (
      <Media left body>
        <p>{comments.comment}</p>
        <p>
          -- {comments.author}, <FormatDate date={comments.date}/>
        </p>
      </Media>
      )
  }

  const DishDetail = (props) => {
    if (props.dish == null) return <div></div>;
    // console.log(props.comment)
    const comments = props.comment.map(c => <RenderComments comments={c}/>)

    return (
      <div class="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div> 
        </div>
        <div className="row">
          <RenderCard dish={props.dish}/>
          <div className="col-12 col-md-5 m-1"> 
            <h4>Comments</h4>
            <Media list>{comments}</Media>
          </div>
        </div>
      </div>   
    );
  }
export default DishDetail;
