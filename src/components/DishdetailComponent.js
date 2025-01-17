import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Loading from './LoadingComponent';
import baseUrl from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen : false
        }
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleSubmit(values) {
        
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        this.props.postComment(this.props.dishId, values.rating, values.author, values.message)
    }

      render() {
          return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <br></br>
                            <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                            <br></br>
                            <Label htmlFor="author">Your Name</Label>
                            <br></br>
                            <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                            />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                            <br></br>
                            <Label htmlFor="message">Comment</Label>
                            <br></br>
                            <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                            <br></br>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
          )
      }

}

    function RenderDish({dish}) {
            if (dish != null)
                return(
                    <div>
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}>
                            <Card>
                                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>
                );
            else
                return(
                    <div></div>
                );
        }

        function RenderComments({comments,postComment,dishId}) {
            console.log(dishId);
           
            const dispcomment = comments.map((comment) => {
                return(
                    <Fade in>
                        <div>
                            <ul className = "list-unstyled">
                                <li key={comment.id}>
                                    <p>{ comment.comment }</p>
                                    <p>-- { comment.author }, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            </ul>
                        </div>
                    </Fade>
                );
            });
            return(
                <div>
                    <Stagger in>
                        { dispcomment }
                    </Stagger>
                    
                    <CommentForm dishId={dishId} postComment={postComment}/>
                </div>
            );
        }
    const DishDetail = (props) => {
      if(props.isLoading){
          return (
              <div className="container">
                  <div className="row">
                      <Loading/>
                  </div>
              </div>
          )
      }
      else if(props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
      }
      else
        return (
            <div className="container">
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
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comment} postComment ={props.postComment} dishId={props.dish.id}/>
                    </div>
                </div>
            </div>
        );
    }
export default DishDetail;