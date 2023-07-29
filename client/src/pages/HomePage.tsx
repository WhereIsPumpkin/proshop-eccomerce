import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../slices/productsApiSlice';

interface Product {
  _id: string;
}

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(void 0);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        'status' in error ? (
          <div>
            {error.status}: {JSON.stringify(error.data)}
          </div>
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
