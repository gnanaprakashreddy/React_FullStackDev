import React from 'react';
import {Card, CardImgOverlay,  CardTitle, CardImg} from 'reactstrap';

    function Dishes ({dishes, onClick}) {
        const menu = dishes.map( dish => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card  key={dish.id} onClick={() => onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
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
                    <Dishes dishes={props.dishes} onClick={props.onClick}/>
                </div>
            </div>
        )
    }
export default Menu;