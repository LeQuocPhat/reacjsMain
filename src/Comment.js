// import React, { useEffect, useState }  from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import API, { endpoints } from './API';

// export default function Comment() {
//     const [Comments, setComment] = useState([])

//     useEffect(() => {
        
//         API.get(endpoints['comments']).then(res => {
//             setComment(res.data)
//             })

//     })

//     return (
      
            
//             <Container>
//                   <h1 className = "text-center">Đánh giá</h1>
//              <Row>
//              {Comments.map(c =>
//                 <Col md={4} xs={12}>
//                     <Card>
//                         <Card.Img variant="top" src={c.creator.avatar}/>
//                         <Card.Body>
//                             <Card.Title>{c.creator.username}</Card.Title>
//                             <Card.Text>
//                                {c.content}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//              )}
//             </Row>
//         </Container>
//     )
// }

