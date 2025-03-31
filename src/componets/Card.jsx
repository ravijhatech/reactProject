import { Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './card.css';

function Carddesigin({cardtext,onClick,style,src,width,height,className="",textnumber}) {
  return (

  <div className='cardstyle'>
      <div className="p-2"  onClick={onClick} style={style} >
    <Row xs={2} md={2} lg={4} className='g-4'>
    
    <Card style={{ width: '18rem', height:"13rem"}} bg='primary'>
      <Card.Body>
        <Card.Title className="cardtext">{cardtext}</Card.Title>
        <h2 className='text-center'>{textnumber}</h2>
        <Image src={src} style={{width,height,color:"white"}}
        className={className}
        />
      </Card.Body>
    </Card>
    </Row>
    </div>
  </div>
  );
}

export default Carddesigin;