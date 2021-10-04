import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, InputGroup, Table } from 'react-bootstrap';
import API, { endpoints } from './API';
import cookies from 'react-cookies'


class A_formRegister extends React.Component {
    constructor() {
        super()
        // const auth = useContext(UserContext)
        this.state = {
            "weddings": [],
            "tempData": [],
            "getData": [],
            "name": "",
            "shif": "",
            "organization_date": "",
            "men": "",
            "servic": "",
            "stk": "",
            "wedding_hal": "",

        }
    }

    componentDidMount() {
        API.get(endpoints['weddings']).then(res => {
            this.setState({
                "weddings": res.data.results
            })
        })


    }
    isChange = (event) => {
        let dl = event.target.value
        let newStateArray = this.state.tempData.slice();
        newStateArray.push(dl);
        this.setState({
            tempData: Array.from(new Set(newStateArray))
        })
        // console.log(this.state.tempData)
    }
    getText = (data) => {
        this.setState({
            getData: data,
            tempData: []
        })
    }

    isChange2 = (event) => {
        const dl = event.target.value
        const ten = event.target.name
        this.setState({
            [ten]: dl
        })
    }

    inPutInfo = () => {
        var n = this.state.shif.indexOf(",")
        // var array = this.state.weddingsCopy
        var array = {
            "name": `${this.state.name}`,
            "wedding_hall": {
                "name": `${this.state.wedding_hal}`
            },
            "organization_date": `${this.state.organization_date}`,
            "shift": {
                "name": `${this.state.shif.substring(0, n)}`,
                "price": `${this.state.shif.substring(n + 1)}`
            },
            "menu": {
                "name": `${this.state.men}`
            },

            "stk": `${this.state.stk}`,
            // "service": [
            //     {
            //       "name": `${this.state.servic}`
            //     }
            //   ]
        }
        // var er ="" // cần dùng push history đảy về trang chủ
        // if(array.name == ""){ alert("Bạn chưa nhập tên") }
        // else{
        //     if(array.wedding_hall.name == "DEFAULT"){ er = "Bạn chưa chọn sảnh" }
        //     else{
        //         if(array.organization_date == "DEFAULT"){ er = "Bạn chưa chọn ngày" }
        //         else{
        //             if(array.shift.name == "DEFAULT"){ er = "Bạn chưa chọn ca" }
        //             else{
        //                 if(array.menu.name == "DEFAULT"){ er = "Bạn chưa chọn menu" }
        //                 else{
        //                     this.props.getIf(array)
        //                 }
        //             }
        //         }
        //     }
        // }

        this.props.getIf(array)
        
       

            // this.props.getIf(array)

        // else{
        //         alert("Cần đă nhập!!!!!")
        //         this.props.history.push("/")
        //     // alert("Cần đă nhập!!!!!")
        //     // this.props.history.push("")
        // }



        // var array = []
        // array.name = this.state.name
        // array.wedding_hall.name =   this.state.wedding_hal
        // array.organization_date = this.state.organization_date
        // array.shift.name = this.state.shif.substring(0,n)
        // array.shift.price = this.state.shif.substring(n + 1)
        // array.menu.name = this.state.men
        // array.stk = ""
        // array.service[0].name = "BÀN TRANG TRÍ"
        // array[['shift']['name']] = this.state.shif.substring(0,n)
        // array[0].shift[] = this.state.shif.substring(0,n)
        // // array['shift'['3']]['name'['0']] = this.state.shif.substring(0,n)
        // array[['shift']['price']]= this.state.shif.substring(n + 1)
        // array.organization_date = this.state.organization_date
        // array[['wedding_hall']['name']] =   this.state.wedding_hal
        // array[['menu']['name']] = this.state.men
        // // array.service.name = this.state.service
        // array.stk = "0"
        // this.setState({
        //     "weddingsCopy": this.weddingsCopy
        // })
        // array["name"] = this.state.name
        // array["stk"] = this.state.stk
        // array["shift"]["name"] = this.state.shif.substring(0,n)
        // array["shift"]["price"]= this.state.shif.substring(n + 1)
        // array["organization_date"] = this.state.organization_date
        // array["wedding_hall"]["name"] = this.state.wedding_hal
        // array["menu"]["name"] = this.state.men


        // array.service.name = this.state.service
        // array.stk = "0"
        // arrays.push(array)
        // console.log(array)
        // this.props.getIf(this.state.weddingsCopy)

        // this.props.getIf(array)

    }




    render() {

        var arrayData = []
        this.state.weddings.filter((item) => {
            for (let k = 0; k < this.state.getData.length; k++) {
               let bl = String(item.shift) === String(this.state.getData[k])
               let bl2 = String(item.organization_date) === String(this.state.getData[k])
                if (bl2  !== false  || bl !== false || (bl2  !== false  && bl !== false ))  {
                    arrayData.push(item)
                    break
                }
            }
        })
        // console.log(this.state.getData.length)
        // console.log(arrayData)
        // console.log(this.props.hallAp.name)
        return (
            <>
                <section className="locator-store" >
                    <div className="obj">
                        <div className="locator-store-title center">
                            <h2>Đăng kí đặt tiệc</h2>
                        </div>
                        <div className="content-contact-inner">
                            <div className="order-party-form">
                                <form>
                                    <div className="email-nCustomer input">
                                        <div className="name label" style={{ flex: '1' }}>
                                            <div><p>Họ và tên:</p></div>
                                            <input type="text" name="name" defaultValue={''} onChange={(event) => this.isChange2(event)} />
                                        </div>
                                        <div className="phone label" style={{ flex: '1' }}>
                                            <div><p>Số tài khoản:</p></div>
                                            <div className="pBank" style={{ display: 'flex'}}>
                                                <input name='stk' type="tel" defaultValue={''}   onChange={(event) => this.isChange2(event)} style={{ flex: '1' }} />
                                                <select defaultValue={'DEFAULT'} name="shif"  style={{ flex: '1' }}>
                                                    <option value="DEFAULT">---bank--- </option>
                                                    {/* {this.props.shiftAp.map(k =>
                                                        <option key={k.id} value={`${k.name},${k.price}`}>{k.name} </option>
                                                    )} */}

                                                </select>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="name-phone input">
                                        <div className="stk label" style={{ flex: '1' }}>
                                            <div><p>Dịch vụ:</p></div>
                                            <div className="time input">
                                                <select defaultValue={'DEFAULT'} name="servic" onClick={(event) => this.isChange2(event)}>
                                                    <option value="DEFAULT">---Select--- </option>
                                                    {this.props.serviceAp.map(x =>
                                                        <option key={x.id} value={x.name}>{x.name} </option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="time-date label" style={{ flex: '1' }}>
                                            <div><p>Sảnh tiệc:</p></div>
                                            <div className="time input">
                                                <select defaultValue={'DEFAULT'} name="wedding_hal" onClick={(event) => this.isChange2(event)}>
                                                    <option value="DEFAULT">---Select--- </option>
                                                    {/* <option value = "1">SảnhI </option>
                                                        <option value = "2">SảnhII </option>
                                                        <option value="3">SảnhIII</option>
                                                        <option value="4">SảnhIII</option> */}
                                                    {this.props.hallAp.map(x =>
                                                        <option key={x.id} value={x.name}>{x.name}</option>
                                                    )}

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" input">
                                        <div className="nCustomer label" style={{ flex: '1' }}>
                                            <div><p>Menu:</p></div>
                                            <div className="time input">
                                                <select defaultValue={'DEFAULT'} name="men" onClick={(event) => this.isChange2(event)}>
                                                    <option value="DEFAULT" >---Select--- </option>
                                                    {this.props.menuAp.map(k =>
                                                        <option key={k.id} value={k.name}>{k.name} </option>
                                                    )}
                                                    {/* <option value = "1">Menu1 </option>
                                                        <option value = "2">Menu2 </option>
                                                        <option value = "3">Menu3 </option>
                                                        <option value="4">Menu4</option> */}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="time-date label" style={{ flex: '1' }}>
                                            <div><p>Thời gian:</p></div>
                                            <div className="time input">
                                                <select defaultValue={'DEFAULT'} name="shif" onClick={(event) => this.isChange2(event)}>
                                                    <option value="DEFAULT">---Ca--- </option>
                                                    {this.props.shiftAp.map(k =>
                                                        <option key={k.id} value={`${k.name},${k.price}`}>{k.name} </option>
                                                    )}

                                                </select>
                                                <div className="date" style={{ marginTop: 0, width: '150px !important' }}>
                                                    <input type="date" defaultValue={''} name="organization_date" onChange={(event) => this.isChange2(event)} style={{ width: '132px ' }} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="textarea label">
                                        <div className="submit">
                                            <button variant="primary" onClick={this.props.open} >
                                                <p style={{ transform: 'translateY(8px)' }} onClick={() => this.inPutInfo()}>Đăng ký</p></button>
                                        </div>
                                    </div>
                                </form>
                                <div className="serchInfo" style={{ width: '100%', marginTop: '50px', padding: '20px' }}>
                                    <InputGroup className="mb-3">
                                        <input type="date" name="sDate" style={{ width: '20px !important' }} onChange={(event) => this.isChange(event)} />
                                        <select defaultValue={'DEFAULT'} onChange={(event) => this.isChange(event)} >
                                            <option value="DEFAULT"> Ca </option>
                                            {this.props.shiftAp.map(k =>
                                                        <option key={k.id} value={k.id}>{k.name}</option>
                                                    )}
                                            {/* <option value="1">Ca sáng </option>
                                            <option value="2">Ca trưa</option>
                                            <option value="3">Ca tối</option> */}
                                        </select>
                                        <FormControl
                                            type="search" placeholder="Nhập từ khóa tìm kiếm" />
                                        <InputGroup.Append >
                                            <Button style={{ margin: '0' }} variant="info" onClick={(data) => this.getText(this.state.tempData)}>Tìm</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Name</th>
                                                <th>organization_date</th>
                                                <th>shift</th>
                                                <th>wedding_hall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {arrayData.map(x => (
                                                <A_Row name={x.name} stt={x.id} date={x.organization_date}
                                                    shift={x.shift} wedding_hall={x.wedding_hall} />
                                            ))}

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

class A_Row extends React.Component {
    render() {

        return (
            <>
                <tr>
                    <td>{this.props.stt}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.date}</td>
                    <td>{ `Ca ${this.props.shift}`}</td>
                    <td>{ `Sảnh ${this.props.wedding_hall}`}</td>
                </tr>
            </>
        )
    }
}



export default A_formRegister;