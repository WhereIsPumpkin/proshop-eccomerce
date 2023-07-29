import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Message from '../components/Message';
import Loader from '../components/Loader';

interface Product {
  _id: string;
}

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(void 0);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        'status' in error ? (
          <Message variant="danger">{`${error.status}: ${error.data}`}</Message>
        ) : (
          <div>{error.message}</div>
        )
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products?.map((product: Product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
