import React from "react";
import "./HomePage.scss";


// Import Modules Here
import axios from "axios";
import { Link } from "react-router-dom";

// Import Redux here
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/global";
import { setUserList, setUser} from "../../redux/reducers/authReducer";

// Import Components here 
import Modal from "../../components/Modal/Modal";
import Navbar from "../../components/Navbar/Navbar";
import Planet from "../../components/Planet/Planet";


// Import Propses here 
interface HomePageProps extends PropsFromRedux {

}

interface HomePageStates {
  userName: string;
  userEmail: string;
  userNameError: string;
  userEmailError: string;
  showModal: boolean;
}



class HomePage extends React.Component<HomePageProps, HomePageStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userNameError: "",
      userEmailError: "",
      showModal: true,
    };
  }


  // Get users list and add new user
  getUsersList(){

    // If user exists
    if(this.props.user != null){
         // Fetch users
         axios.get('https://new-backend.unistory.app/api/data?page=1&perPage=50').then((res) => {

         // Add user to the list
         res.data.items.unshift(this.props.user)

         // Dispatch the users
         this.props.dispatch(setUserList(res.data.items))
         
         })
       
    }
  }


// Error Form Handler
errorHandleForm(inputName: string, inputValue: string) {

  // Name length more than 4
  if (inputName === "userName" && inputValue.length < 4) {
    this.setState({
      userNameError: "Your name must contain at least 4 letters.",
    });
  } else {
    this.setState(
      {
        userNameError: "",
      },
    );
  }

  // Correct email format
  if (inputName === "email" && !/\S+@\S+\.\S+/.test(inputValue)) {
    this.setState({
      userEmailError: "Wrong email format.",
    });
  } else {
    this.setState(
      {
        userEmailError: "",
      },
     
    );
  }
}

// Form Submittion 
signUpBetaSubmit = async (e:any) => {
e.preventDefault();
const name = e.target.name.value;
const email = e.target.email.value;

// If wallet connected
if(this.props.wallet !== '') {

  // Valid Form
  if(this.state.userEmailError === '' && this.state.userNameError === ''){

    // Dispatch user
    await this.props.dispatch(setUser({
      username: name,
      email: email,
      address: this.props.wallet
    }))

    // Get updated user list
    await this.getUsersList()
   
  } 
} else {
  this.setState({showModal: true})
}

};



// Remove User 
  removeUser = () => {
    // Update list 
   if(this.props.userList.length > 0){
    // Copy & change list 
    const list = [...this.props.userList]
    list.shift()
      // Dispatch new list & user
      this.props.dispatch(setUserList(list))
      this.props.dispatch(setUser({
        username: null,
        email: null,
        address: null
      }))
   }
  };

// Modal close 
  handleModal = () => {
    this.setState({showModal: false});
  };


  render() {
    // States
    const {
      userEmailError,
      userNameError,
      showModal,
    } = this.state;

    // Redux states
    const { web3, wallet, user, userList } = this.props;
    return (
      <>
        <div className="app">
          {/* Navbar */}
              <Navbar />
          {/* Navbar */}   

          {/* Show Modal */}
          {(!web3 && showModal) || (wallet === "" && showModal) ? (
            <Modal closeModal={this.handleModal} />
          ) : (
            ""
          )}
          {/* Show Modal */}

          
          {/* Home page */}
          <main className="home container">

            {/* LANDING SECTION */}
            <section className="landing">
              <div className="text">
                <h2>
                  EXPLORE YOUR OWN PLANET
                  <br />
                  IN <span>OUR NEW</span> METAVERSE
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>

              {/* Planet */}
              <Planet />
              {/* Planet */}

              <div className="stats">
                <h2>ROADMAP STATS</h2>
                <ul>
                  <li>
                    <div className="count">12, 345</div>
                    <div className="description">Lorem, ipsum dolor.</div>
                  </li>
                  <li className="border">
                    <div className="count">12, 345</div>
                    <div className="description">Lorem, ipsum dolor.</div>
                  </li>
                  <li>
                    <div className="count">12, 345</div>
                    <div className="description">Lorem, ipsum dolor.</div>
                  </li>
                </ul>
              </div>
            </section>
            {/* LANDING SECTION END*/}



            {/* REGISTRATION SECTION */}
            <section className="beta">

               {/* FORM SECTION */}
              <div className="registration">
                <h2 >BETA TEST REGISTRATION</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                {/* FORM */}
                <form onSubmit={(e) => this.signUpBetaSubmit(e)}>
                  <div className="name">
                    {userList.length === 0 || user.username === null ? userNameError === "" ? (
                      <h3>NAME</h3>
                    ) : (
                      <h3 style={{ color: "brown" }}>
                        {userNameError}
                      </h3>
                    ) : <h4>{user.username}</h4>}
                    

                    {userList.length === 0 || user.username === null ?
                    <input
                      type="text"
                      placeholder="We will display your name in participation list"
                      onChange={(e) => { this.errorHandleForm("userName", e.target.value);}}                  
                      name="name"
                  /> : ''}
                   
                   
                  </div>

                  <div className="email">
                  {userList.length == 0 || user.email == null ? userEmailError === "" ? (
                      <h3>EMAIL</h3>
                    ) : (
                      <h3 style={{ color: "brown" }}>
                        {userEmailError}
                      </h3>
                    ) : <h4>{user.email}</h4>}



                    {userList.length == 0 || user.email == null ?
                     <input
                     type="email"
                     placeholder="We will display your email in participation list"
                     onChange={(e) => {
                       this.errorHandleForm("email", e.target.value);
                     }}
                     name="email"
                   />:''}
                  </div>

                  {user.username == null ? (<button type='submit' className="btn-primary">GET EARLY ACCESS</button> ) 
                  : (<button className="btn-primary">LIST ME TO THE TABLE</button> )}                           
                </form>
                {/* FORM END */}
              </div>
              {/* FORM SECTION END*/} 
            {/* REGISTRATION SECTION END*/}

          
  {userList.length > 0 && (
    <div className="user-list">
      <h2>PARTICIPATION (ENABLE ONLY FOR PARTICIPANTS)</h2>
      <header>
        <h3>NAME</h3>
        <h3>EMAIL</h3>
        <h3>WALLET</h3>
      </header>
      <ul>
        {userList.map((item: any, i: any) => (
          <li
            className={
              user.username != null && item.address === user.address ? "active" : ""
            }
            key={i}
          >
            {item.address !== user.address ? (
              <>
                <Link className="name" to={`/user/${item.address}`}>
                  <p>{item.username}</p>
                </Link>
                <Link className="email" to={`/user/${item.address}`}>
                  <p>{item.email}</p>
                </Link>
                <Link className="wallet" to={`/user/${item.address}`}>
                  <p>{item.address}</p>
                </Link>
              </>
            ) : (
               user.username != null && (
                <>
                  <div className="name">
                    <p>{user.username}</p>
                  </div>
                  <div className="email">
                    <p>{user.email}</p>
                  </div>
                  <div className="wallet">
                    <p>{user.address}</p>
                    <div
                      className="close-button"
                      onClick={this.removeUser}
                    ></div>
                  </div>
                </>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
    </section>

          </main>
        </div>
      </>
    );
  }
}


// Map Redux state to component props
const mapStateToProps = (state: RootState) => {
  return {
    web3: state.auth.web3,
    wallet: state.auth.wallet,
    userList: state.auth.userList,
    user: state.auth.user
  };
};

// Define the Redux props using the ConnectedProps helper
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


export default connect(mapStateToProps)(HomePage);
// Connect component to Redux store

