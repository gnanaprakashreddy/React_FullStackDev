import React from 'react';
import {Card, CardImgOverlay,  CardTitle, CardImg, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

    function Dishes ({dishes, onClick}) {
        const menu = dishes.map( dish => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            )
        })
        return menu;
    }
    
    const Menu = (props) => {   
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div> 
                </div>
                <div className="row">
                    <Dishes dishes={props.dishes}/>
                </div>
            </div>
        )
    }
export default Menu;