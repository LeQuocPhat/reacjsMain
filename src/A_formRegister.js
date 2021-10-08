import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, InputGroup,  Table } from 'react-bootstrap';
import API, { endpoints } from './API';




class A_formRegister extends React.Component {
    constructor() {
        super()
        this.state = {
            "weddings": [],
            "tempData": [],
            "getData": [],
            // "sdt":"" , 
            "name":"" , 
            "shift":"" , 
            "organization_date":"" ,
            "menu":"" ,
            // "service":[] ,
            "wedding_hall":"" ,
            "array" : {},
        
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
        const dl = event.target.value
        var newStateArray = this.state.tempData.slice();
        newStateArray.push(dl);
        this.setState({
            tempData: Array.from(new Set(newStateArray))
        })
        console.log(this.state.tempData)
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
        
        // console.log(this.state)
       
    }
    inPutInfo = () => {
        var array = this.state.array
        // array.sdt = this.state.sdt
        
        array.name = this.state.name
        array.shift = this.state.shift
        array.organization_date = this.state.organization_date
        array.wedding_hall= this.state.wedding_hall
        // array.push({"wedding_hall": {"name": "Sapphire II"}})
        array.menu = this.state.menu
        array.stk = "" 
        
       
        this.props.getIf(array)
    }


   
   
    render() {
        var arrayData = []
        this.state.weddings.map((item) => {
            for (let k = 0; k < this.state.getData.length; k++) {
                if (item.organization_date.indexOf(this.state.getData[k]) !== -1 || item.name.indexOf(this.state.getData[k]) !== -1 ||
                    (item.organization_date.indexOf(this.state.getData[k]) !== -1 && item.name.indexOf(this.state.getData[k]) !== -1)) {
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
                                        <div className="name label">
                                            <div><p>Họ và tên:</p></div>
                                            <input type="text" name="name" onChange={(event) => this.isChange2(event)}/>
                                        </div>
                                        <div className="phone label">
                                            <div><p>Số điện thoại:</p></div>
                                            <input name='sdt' type="tel"  />
                                        </div>
                                         
                                    </div>
                                    <div className="name-phone input">
                                        <div className="stk label" style={{flex:'1'}}>
                                            <div><p>Dịch vụ:</p></div>
                                            <div className="time input">
                                                    <select name ="service" onClick={(event) => this.isChange2(event)}>
                                                        <option >---Select--- </option>
                                                        {this.props.serviceAp.map(x => 
                                                            <option value ={x.id}>{x.name} </option>
                                                        )}
                                                    </select>
                                                </div>
                                        </div>
                                        <div className="time-date label" style={{flex:'1'}}>
                                                <div><p>Sảnh tiệc:</p></div>
                                                <div className="time input">
                                                    <select name ="wedding_hall" onClick={(event) => this.isChange2(event)}>
                                                        <option >---Select--- </option>
                                                        {/* <option value = "1">SảnhI </option>
                                                        <option value = "2">SảnhII </option>
                                                        <option value="3">SảnhIII</option>
                                                        <option value="4">SảnhIII</option> */}
                                                        {this.props.hallAp.map(x =>
                                                            <option value={x.id}>{x.name}</option>
                                                        )}
                                                       
                                                    </select>
                                                </div>
                                            </div>
                                    </div>
                                    <div className=" input">
                                        <div className="nCustomer label" style={{flex:'1'}}>
                                            <div><p>Menu:</p></div>
                                            <div className="time input">
                                                    <select name ="menu" onClick={(event) => this.isChange2(event)}>
                                                        <option >---Select--- </option>
                                                        {this.props.menuAp.map(k =>
                                                            <option value = {k.id}>{k.name} </option>  
                                                        )}
                                                        {/* <option value = "1">Menu1 </option>
                                                        <option value = "2">Menu2 </option>
                                                        <option value = "3">Menu3 </option>
                                                        <option value="4">Menu4</option> */}
                                                    </select>
                                                </div>
                                        </div>
                                            
                                            <div className="time-date label" style={{flex:'1'}}>
                                                <div><p>Thời gian:</p></div>
                                                <div className="time input">
                                                    <select name ="shift" onClick={(event) => this.isChange2(event)}>
                                                        <option >---Ca--- </option>
                                                        {this.props.shiftAp.map(k =>
                                                            <option value = {k.id}>{k.name} </option>  
                                                        )}
                                                        {/* <option value = "1">Ca sáng </option>
                                                        <option value = "2">Ca trưa </option>
                                                        <option value="3">Ca tối</option> */}
                                                    </select>
                                                    <div className="date" style={{ marginTop: 0, width: '150px !important' }}>
                                                        <input type="date"  name="organization_date" onChange={(event) => this.isChange2(event)} style={{ width: '132px ' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className="textarea label">
                                        <div className="submit">
                                            <button variant="primary" onClick = {this.props.open} >
                                                <p style= {{transform: 'translateY(8px)'}} onClick = {() => this.inPutInfo() }>Đăng ký</p></button>
                                        </div>
                                    </div>
                                </form>
                                <div className="serchInfo" style={{ width: '100%', marginTop: '50px', padding: '20px' }}>
                                    <InputGroup className="mb-3">
                                        <input type="date" name="sDate" style={{ width: '20px !important' }} onChange={(event) => this.isChange(event)} />
                                        <select defaultValue="0" onChange={(event) => this.isChange(event)} >
                                            <option value="0"> Sảnh </option>
                                            <option value="Wedding6">Wedding6 </option>
                                            <option value="Wedding5">Wedding5</option>
                                            <option value="Wedding4">Wedding4</option>
                                        </select>
                                        <FormControl
                                            type ="search" placeholder="Nhập từ khóa tìm kiếm" />
                                        <InputGroup.Append >
                                            <Button  style={{ margin: '0' }} variant="info" onClick={(data) => this.getText(this.state.tempData)}>Tìm</Button>
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
                                                    shift={x.shift.name} wedding_hall={x.wedding_hall.name} />
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
                    <td>{this.props.shift}</td>
                    <td>{this.props.wedding_hall}</td>
                </tr>
            </>
        )
    }
}



export default A_formRegister;