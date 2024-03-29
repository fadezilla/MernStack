import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import SortOptionsComponent from "../Component/SortOptionsComponent";
import AttributesFilterComponent from "../Component/filterQueryResultOptions/AttributesFilterComponent";
import ProductForListComponent from "../Component/ProductForListComponent";
import PaginationComponent from "../Component/PaginationComponent";
import PriceFilterComponent from "../Component/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../Component/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../Component/filterQueryResultOptions/CategoryFilterComponent";

const ProductListPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-3 mt-3"><SortOptionsComponent /></ListGroup.Item>
                        <ListGroup.Item>FILTER: <br /><PriceFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><AttributesFilterComponent /></ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Filter</Button>
                            <Button variant="danger">Reset filters</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <ProductForListComponent key={idx}
                        images={["games", "monitors", "tablets", "games", "monitors"]} idx={idx} />
                    ))}
                    <PaginationComponent/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductListPage