import React, { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import cookies from 'react-cookies'
import { UserContext } from './App';
import API, { endpoints } from './API';

export default function A_header(props) {
    const auth = useContext(UserContext)
    const [Setting, setSetting] = (useState([]))
    const [countNu, setCount] = useState(0)
   
    useEffect(async () => {
        let res = await API.get(endpoints['systems'])
            setSetting( res.data)
        window.addEventListener('scroll', handleScroll);
    }, [countNu])

    function handleScroll() {
        const header = document.querySelector(".header")
        const bar = document.querySelector(".row")
        const x = this.pageYOffset
        if (x > 150) {
            header.classList.add('active')
            bar.classList.add("active")
        }
        else {
            header.classList.remove("active")
            bar.classList.remove("active")
        }
    }
    const logOut = () => {
        cookies.remove("access_token")
        cookies.remove("user")
        setCount(user.lenght)
    }
    let user = auth.user
    if (cookies.load("user") != null)
        user = cookies.load("user")
    let r = <>
        <li onClick ={() => props.openFLogin()}><Link to="/"  onClick = {() => props.putAtt('Login')}>Login</Link></li>
        <li style={{ borderRight: 'none' }} onClick ={() => props.openFLogin()}><Link to="/" onClick = {() => props.putAtt('Registe')}>Register</Link></li>
    </>
    if (user !== null)
        r = <><li><Link to="/">Welcome {user.username}</Link></li>
            <li><Link to="/"  onClick={() => logOut()}>Log out </Link></li>
            </>
 
    return (
        <div>   
            <section className="header">
                <div className="contai">
                    <div className="contact">
                        <nav>
                            <ul>
                                {r}
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="muli">
                            <div className="search">
                                <div className="search-icon">
                                    <i className="fas fa-times" ></i><input type="text" placeholder="Nhập từ khóa tìm kiếm" /><i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                        {/* <div className="logo">
                            <a href="http://localhost:3000/"><img src="images/logo/logo.svg" /></a>
                        </div> */}
                        <div className="menu-bar">
                            <nav>
                                <ul className="menu-bar-left-items row">
                                    <li className="logo"><a href="http://localhost:3000/"><img src="images/logo/logo.svg" /></a></li>
                                    <li><i className="fas fa-search fa"></i> </li>
                                    <li className="menu-bar-items-sub">
                                        <a href="/">Home page</a>
                                    </li>
                                    {Setting.map(s =>{
                                        // let path = `/?system_id=${s.id}`
                                        return <li className="menu-bar-items-sub">
                                            <Link to={s.name}>{s.name}</Link>
                                        </li>
                                        })}
                                    {/* <li className="menu-bar-items-sub">
                                        <a href="#">Hệ thống</a>
                                    </li>
                                    <li ><Link to="/menu">Thực đơn</Link></li>
                                    <li className="menu-bar-items-sub">
                                        <a >Tiệc cưới</a>
                                        <ul className="menu-bar-items-sub1">
                                            <li><Link to="/service">Dịch vụ tiệc cưới</Link></li>
                                            <li><Link to="/weddinghalls">Sảnh tiệc</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">About us</a></li>
                                    <li className="menu-bar-items-sub">
                                        <a href="#">Blog</a>
                                        <ul className="menu-bar-items-sub1">
                                            <li><a href="#">Thực đơn</a></li>
                                            <li><a href="#">Thực đơn</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Tuyển dụng</a></li> */}

                                </ul>
                            </nav>
                        </div>
                        <div>
                            <button className="btOrder">Đặt tiệc</button>
                        </div>

                        {/* <div className="menu-bar">
                            <nav>
                                <ul className="menu-bar-right-food row">
                                    <li><a href="#">Liên hệ</a></li>
                                    <li className="menu-bar-items-sub">
                                        <a href="#">Blog</a>
                                        <ul className="menu-bar-items-sub1">
                                            <li><a href="#">Thực đơn</a></li>
                                            <li><a href="#">Thực đơn</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Tuyển dụng</a></li>
                                    <li><button className="btOrder">Đặt tiệc</button></li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="imageMain">
                <div className="imageMain-content">
                    <div className="imageMain-content-text" style={{ height: '110px' }}>
                        <img src="" />
                    </div>
                    <div className="imageMain-content-textsmall" style={{ textAlign: 'center' }}>
                        <h2>TRUNG TÂM TỔ CHỨC TIỆC CƯỚI VÀ SỰ KIỆN</h2>
                    </div>

                </div>

            </section>
        </div>
    );

}

