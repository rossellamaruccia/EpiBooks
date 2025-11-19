
import { Card, Button } from 'react-bootstrap';

const SingleBook = function (prop) {
  return (
      
              <Card style={{ width: '18rem' }} key={prop.asin}>
                <Card.Img src={prop.img} />
                <Button>Details</Button>
              </Card>
  )
}

export default SingleBook
