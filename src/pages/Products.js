import React, { Component } from 'react';
import axios from 'axios';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  

class Products extends Component{
    constructor(props){
        super(props);

        this.state = {
            products: [{
                "id": "a88868ec-3c23-402f-ae9b-c6cb71069b5c",
                "name": "Extract - Rum",
                "description": "nam ultrices libero non mattis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "cfdb1a68-0cc5-4966-8d3c-6fbcd5bbdd9c",
                "name": "Dc Hikiage Hira Huba",
                "description": "duis faucibus accumsan odio curabitur",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "82008a59-9265-4d87-8d1b-25d1c9f9196f",
                "name": "Foil Cont Round",
                "description": "molestie sed justo pellentesque viverra",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "701bd32d-6989-45db-b0ad-769ca9e7e911",
                "name": "External Supplier",
                "description": "id luctus nec molestie sed",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "b201fb9a-d7f5-4079-8988-8c37d34e2d5d",
                "name": "Wine - White, Lindemans Bin 95",
                "description": "odio porttitor id consequat in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "821afe41-3296-4da1-8512-fdb02572218b",
                "name": "Mix - Cappucino Cocktail",
                "description": "at lorem integer tincidunt ante",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "b53ff425-da49-4bb6-a609-08bd00967a41",
                "name": "Wine - Barossa Valley Estate",
                "description": "placerat praesent blandit nam nulla",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "70072898-f986-483b-80b9-6034eb9ba2df",
                "name": "Wine - White, Lindemans Bin 95",
                "description": "lectus suspendisse potenti in eleifend",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "898b0bbb-d076-4f5e-99a8-5ac5e31d7440",
                "name": "Pears - Anjou",
                "description": "ac est lacinia nisi venenatis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "5cf0c73b-fa2f-4f41-8410-b912a3e011f4",
                "name": "Tamarillo",
                "description": "et ultrices posuere cubilia curae",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "fb43ba1f-5bfe-4b0e-ac14-1acdf6d0fea3",
                "name": "Baking Powder",
                "description": "pellentesque at nulla suspendisse potenti",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "ecd47539-992c-4c2b-8358-80cb363a692c",
                "name": "Wine - Piper Heidsieck Brut",
                "description": "rutrum nulla tellus in sagittis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }]
        };
    }

    componentDidMount(){
        axios.get('https://pveyo.sse.codesandbox.io/products').then(res => {
            this.setState({
                products: res.data
            })
        });
    }

    render(){
        const {products}=this.state
        return(
            <Container>
                <h2>Products</h2>
                <Row>
                    { products.map(product => (
                        <Col sm = "4">
                            <Card>
                                <CardImg top width="100%" src={product.imageUrl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add to cart</Button>
                                </CardBody>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Products;