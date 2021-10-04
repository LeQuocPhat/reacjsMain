import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import API, { endpoints } from './API';
import { UserContext } from './App';
import cookies from 'react-cookies'
import { Link } from 'react-router-dom';

export default function A_service() {
    const [Comment, setCommet] = useState([])
    const [AddComment, setAddComment] = useState(null)
    // const [Services, setServices] = useState([])
    const auth = useContext(UserContext)
    const [countNu, setCount] = useState(1)
    const [Users, setUsers] = useState([])

    useEffect(() => {
        let loadComment = async () => {
            try {
                let res = await API.get(endpoints['comments'])
                setCommet(res.data)
                // let res3 = await API.get(endpoints['services'])
                // setServices(res3.data.results)
            } catch (error) {
                console.error(error)
            }
        }

        let loadUser = async () => {
            try {
                let res2 = await API.get(endpoints['users'])
                setUsers(res2.data)
            } catch (error) {
                console.error(error)
            }
        }
        loadComment()
        loadUser()
    }, [countNu])
    let user = auth.user
    if (cookies.load("user") != null)
        user = cookies.load("user")

    const addComment = async (event) => {
        event.preventDefault()
        
        API.post(endpoints['comments'], {
            "content": AddComment,
            "creator": user.id
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.info(res)
            // alert("Bình luận thành công!!!")
            addComment.push(res.data)
            setAddComment(addComment)
            setCount(addComment.lenght)
        }).catch(err => {
            console.error(err)
        })
       

    }
    let comment = <em><Link to="/">Cần login để bình luận!!!</Link></em>
    if (user !== null) {
        comment = <>
            <Form onSubmit={addComment}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ display: 'flex' }}>
                    <Form.Control as="textarea"
                        placeholder="Nhập bình luận" value={AddComment} onChange={(event) => setAddComment(event.target.value)} />
                        {console.log(AddComment)}
                    <Button variant="primary" type="submit">Comment</Button>{' '}
                </Form.Group>
            </Form>
        </>
    }
    // if (user !== null ) {
    //     comment =   <>
    //     <Form onSubmit={addComment}>
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //             <Form.Control as="textarea" value={AddComment} onChange={(event) => setAddComment(event.target.value)}
    //              placeholder="Nhập bình luận" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">Comment</Button>{' '}
    //     </Form>
    // </>   
    // }
    // var i = Services.length
    // console.log(i)

    return (
        <div>
            <section class="service">
                <div class="wrap">
                    <div class="service-title-top center">
                        <h2>Dịch vụ tiệc cưới</h2>
                    </div>
                    <div class="service-info-wrap">
                        <div class="service-title-bottom">
                            <p>Với mong muốn góp phần tô vẽ nên chuyện tình yêu đẹp của lứa đôi,<b> Trung Tâm Tiệc Cưới Hội Nghị Melisa Center hân hạnh được phục vụ tiệc cưới của Bạn</b></p>
                            <p>Từ lâu nay, những giai điệu tình yêu đã vang lên trong con tim của mỗi người,
                                đưa đến những cung bậc thăng hoa trong những tâm hồn đồng điệu và rồi lễ cưới
                                chính là minh chứng của một bản giao hưởng tình yêu mãnh liệt</p>
                        </div>
                        <div class="service-info-list">
                            <div class="service-info-list-row">
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/decorativeTable.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>BÀN TRANG TRÍ</strong>
                                        </p>
                                        <p>Melisa cung cấp các gói từ tiêu chuẩn đến cao cấp được thiết kế theo ý tưởng của hai bạn</p>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/gateFlower.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>CỔNG HOA CHÀO</strong>
                                        </p>
                                        <p>Hơn 10 mẫu cổng chào với đủ màu sắc, kiểu thiết kế,
                                            phong cách phù hợp với từng sảnh, từng sở thích của Cd-Cr</p>
                                    </div>
                                </div>
                            </div>
                            <div class="service-info-list-row">
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/par.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>TIẾT MỤC KHAI TIỆC</strong>
                                        </p>
                                        <p>Nhiều chương trình đa dạng từ dân gian – hiện đại –
                                            hỗ trợ các tiết mục dàn dựng riêng của cô dâu chú rể</p>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/signed.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>TRANH KÝ TÊN</strong>
                                        </p>
                                        <p>Liễn ký tên-  nơi các vị khách mời lưu lại
                                            những lời chúc mừng hạnh phúc dành cho hai bạn</p>
                                    </div>
                                </div>
                            </div>
                            <div class="service-info-list-row">
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/violinist.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>PIANIST VÀ VIOLINIST  ĐÓN KHÁCH</strong>
                                        </p>
                                        <p>Không khí sẽ trở nên trang trọng hơn với Pianist và Violinist đón khách tại đại sảnh</p>
                                    </div>
                                </div>
                                <div class="service-info">
                                    <div class="service-info-pic">
                                        <img src="images/dv/photoArea.jpg" />
                                    </div>
                                    <div class="service-info-text">
                                        <p>
                                            <strong>KHU VỰC CHỤP HÌNH</strong>
                                        </p>
                                        <p>Bốt chụp hình lấy ngay, và nhiều khu vực trang trí khác để bạn và
                                            người thân có những tấm hình yêu thương</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Container>
                    {comment}
                    <hr />
                    {Comment.map(c =>
                        <Row>
                            <Col>
                                <Card style={{ borderRadius: '15px', height: '100px' }}>
                                    {Users.map(u => {
                                        if (u.id == c.creator)
                                            return <>
                                                <Card.Body>
                                                    <blockquote className="blockquote mb-0">
                                                        <p>
                                                            <Image src={u.avatar} roundedCircle />&nbsp;

                                                            <span>{u.username}</span>&nbsp;|
                                                            <span>{u.email}</span></p>
                                                        <p>
                                                            {' '}
                                                            {c.content}{' '}&nbsp;|
                                                            <span> vào lúc: <Moment fromNow>{c.created_date}</Moment>
                                                                <cite title="Source Title">Source Title</cite></span>
                                                        </p>
                                                    </blockquote>
                                                </Card.Body>
                                            </>
                                    })}
                                </Card><hr />
                            </Col>
                        </Row>
                    )}

                </Container>

            </section>

            {/* <section class="advise">
                    <div class="service-title-top center">
                        <h2>Tư vấn</h2>
                    </div>
                    <div>
                        
                    </div>
                    <div id="wp-slider" >
                        <div className="owl-carousel owl-theme" onChange={this.onChange}>
                            <div className="item"><img src="images/dv/tochuc.png" />  </div>
                            <div className="item"><img src="images/dv/tuvan.jpg" />  </div>
                            <div className="item"><img src="images/dv/decorativeTable.jpg" />  </div>
                            <div className="item"><img src="images/dv/dv.png" /></div>
                        </div>
                    </div>
                </section> */}
        </div>
    );
}
