import React,{Component} from 'react';
import reactDOM from 'react-dom';
import { Button, Card, Form, Navbar,Nav, NavDropdown, FormControl,Modal } from 'react-bootstrap';
import './Main.css';
import 'font-awesome/css/font-awesome.min.css';


class Main extends React.Component{
	constructor(props){
		super(props);
		this.name = { "name":"Login" };

		this.login = { fontSize:'30px' };

		this.card = {
			width:'70%',
			margin:'auto',
			height:'320px'
		};

		this.input = { height:'40px' };
		this.btn = { backgroundColor:'#75b7f9' };
		this.back_btn = { marginLeft:'10px', border:'none', color:'white' , fontSize:'20px', fontWeight:'bold', backgroundColor:'#8772ff' };
		this.submit={ backgroundColor:'#8772ff', border:'none' };
		this.l = { color:'white',fontWeight:'bold',marginLeft:'30px' };
		this.nav = { marginRight:'150px' };
		this.home = { color:'white', marginLeft:'40px' };
		this.logo = { marginLeft:'30px', fontWeight:'bold', color:'white' , fontSize:'30px'};
		this.menu = { backgroundColor:'white' };
		this.input = { width:'80%' };

		this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

		this.state = {
		      show: false,
		    };
  		}


	login_hide(){
		document.getElementById('login').style.width = '0px';
	}
	login_show(){
		document.getElementById('login').style.width = '100%';	
	}
	sign_hide(){
		document.getElementById('sign').style.width = '0px';
	}
	sign_show(){
		document.getElementById('sign').style.width = '100%';	
	}

	handleClose() {
    	this.setState({ show: false });
    	this.setState({ name: false });
  	}
	handleShow() {
	   	this.setState({ show: true });
	   	this.setState({ name: false });
	  }



	render(){
		return(
			<>

			<Navbar expand="lg" className="navbar">
			  <Navbar.Brand href="#home" style={this.logo}> Chiefy </Navbar.Brand>
			  <Navbar.Toggle bg='light' style={ this.menu } />

			  <Navbar.Collapse id="basic-navbar-nav" >
			    <Nav className="mr-auto">
			    	<br/>
				</Nav>
				<Nav style={this.nav} id="menu_data" >
				  <Nav.Link href="#" onClick={this.handleShow} style={this.l}><i className="fa fa-pencil-square-o"></i>&nbsp;Query</Nav.Link>
			      <Nav.Link href="#" onClick={this.login_show} style={this.l}><i className="fa fa-sign-in"></i>&nbsp;Login</Nav.Link>
			      <Nav.Link href="#" onClick={this.sign_show} style={this.l}><i className="fa fa-user-plus"></i>&nbsp;Signup</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>			  	 
			</Navbar>

	        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton />
	          <Modal.Body>

	          <Form>
	          <Form.Group>
	          <Form.Control type='query' name='query' placeholder='what do you want ?' />
	          </Form.Group>
	          <Button style={this.submit}>Post Query</Button>
	          </Form>
	          
	          </Modal.Body>
	        </Modal>

			
			<div id='login' className="login_form">
			<Button onClick={this.login_hide} style={this.back_btn}> <i className="fa fa-arrow-left" aria-hidden="true"></i></Button>
			<br/><br/><br/>
			<h1 align="center" className="heading">Login</h1>
			<br/><br/>
			<div align="center" className="form">
			<Form>
			<Form.Group>
			<Form.Control type='email' name="email" placeholder='EmailId' />
			</Form.Group>
			
			<Form.Group>
			<Form.Control type='password' name="password" placeholder='password' />
			</Form.Group>
			<br/>
			<Button style={this.submit}><i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp; Login</Button>
			<br/>
			</Form>
			</div>	
			</div>


			<div id='sign' className="sign_form">
			<Button onClick={this.sign_hide} style={this.back_btn}> <i className="fa fa-arrow-left" aria-hidden="true"></i></Button>
			<br/><br/><br/>
			<h1 align="center" className="sign_heading">Signup</h1>
			<br/><br/>
			<div align="center" className="form">
			<Form>
			<Form.Group>
			<Form.Control type='username' name="username" placeholder='username' />
			</Form.Group>
			
			<Form.Group>
			<Form.Control type='email' name="email" placeholder='Email Id' />
			</Form.Group>
			
			<Form.Group>
			<Form.Control type='password' name="password" placeholder='password' />
			</Form.Group>
			<br/>
			<Button style={this.submit}><i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp; Signup</Button>
			<br/>
			</Form>
			</div>	
			</div>




			</>
			);
	}
}

export default Main;