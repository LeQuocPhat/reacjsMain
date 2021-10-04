import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API, { endpoints } from './API';


export default function A_menu(){
    
    // const [Foods, setFoods] = useState([])
    const [Menus, setMenus] = useState([])
    // const location = useLocation()

    useEffect( async () => {
          try {
            // let res2 = await API.get(`${endpoints['menus']}${location.search}`)
            let res2 = await API.get(endpoints['menus'])
            setMenus(res2.data.results)
            // let res1 = await API.get(`${endpoints["foods"]}${query}`)
            // setFoods(res1.data)
          } catch (error) {console.error(error)}
       
      }, []);

     const onClick = (x) => {
        if(x.target.classList.contains("food-menu-button")) 
        {
        const choseMenu =  document.querySelector(".food-menu")
        const Target = x.target.getAttribute("data-food");
        choseMenu.querySelector(".active").classList.remove("active")
        x.target.classList.add("active") /*x đã điều hướng tới button*/

        const putMenu =  document.querySelector(".food-elective")
        putMenu.querySelector(".food-elective-items.active").classList.remove("active")
        putMenu.querySelector(Target).classList.add("active")
        }       
    }
    const closePic = () => {
           document.querySelector(".zoomOver-wrap").style.display = "none" 
    }

    const  zoomImg = () =>{
        const bigImg = document.querySelector(".zoomOver img")
        const smallImg =  document.querySelectorAll(".food-list-itme img")
        smallImg.forEach(imgItem =>
            imgItem .addEventListener("click",function(){
                bigImg.src = imgItem.src
                document.querySelector(".zoomOver-wrap").style.display="flex"
            })
         )};


        return (
            <>
            <section className="food" style ={{marginTop: '35px'}}>
                <div className="food-title">
                    {/* <div className="food-title-txt center">
                        <h2>Thực đơn tự chọn</h2>
                    </div>
                    <div className="food-menu" onClick = {onClick}>
                        <button className="food-menu-button active" data-food="#Menu1">Menu1</button>
                        <button className="food-menu-button" data-food="#Menu2">Menu2</button>
                        <button className="food-menu-button" data-food="#Menu1">Menu3</button>
                    </div> */}
                    {/* <div className="food-elective">
                        <div className="food-elective-items active" id="Menu1">
                            <div className="food-elective-item">
                                <img src="images/food/a.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/b.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/c.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/d.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/e.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/1-101.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                        </div>

                        <div className="food-elective-items" id="Menu2">
                            <div className="food-elective-item" >
                                <img src="images/food/2-601.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/3.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/4-837.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/5-581.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                            <div className="food-elective-item">
                                <img src="images/food/9-954.jpg" />
                                <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="food-title">
                    <div className="food-title-txt center">
                        <h2>Thực đơn tiệc cưới mới nhất 2021</h2>
                    </div>
                    <p>Trung tâm tiệc cưới Melisa phục vụ hơn 150 món ăn phong cách Âu – Á</p>
                </div>
                <div className="food-list" onClick = { () => zoomImg ()}>
                    <div className="food-list-itme">
                        {Menus.map( c => 
                                <img src = {c.image}  />  
                        )}
                    </div>
                    
                </div>
                <div className="zoomOver-wrap">
                        <div className="zoomOver">
                            <span><i className="far fa-times-circle" onClick ={() => closePic()} style={{ color: 'black !important', fontSize: '40px', cursor: 'pointer' }} /></span>
                            <img style={{ width: '100%' }} src="images/food/menu1.jpg" />
                        </div>
                </div>

            </section>

        </>
     );

}