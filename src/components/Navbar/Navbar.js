import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Navbar = () => {

  const [showForm, setShowForm] = useState(false)
  return (
    <div className='NavbarContainer'>

      <nav class="navbar ps-1 navbar-expand-lg navbar-dark bg-primsary  text-dark">
        <div class="container-fluid ">
          <Link to="/">
            <img className='LogoImg' src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" alt="" />
          </Link>
          <div className='ToggleButtondiv'>
            <div className="profileDiv">
              <div className="toggleIconshow">
                <div className="profileIconDiv">
                  <img src="https://geeks-react.netlify.app/static/media/sun.b75d9ae1f8dafcf0365aa12aeb1e0362.svg" alt="" />
                </div>
                <div className="profileIconDiv">
                  <i class="fa-regular bellicon fa-bell"></i>
                </div>
                <div onClick={() => {
                  setShowForm(!showForm)
                }} className="profileIconDivImg">
                  <img src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" alt="" />
                  {
                    <div className={`dashboardForm ${showForm ? 'open' : ''}`}>
                      <div className="InnerBoxDiv">
                        <p className="userSettingBtn userNamePar"
                        >
                          <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUser} />
                          </p>
                        <p onClick={(e) => {
                          e.stopPropagation();
                          setShowForm(false)
                        }} className="userSettingBtn">
                          User settings
                        </p>
                        <p onClick={(e) => {
                          e.stopPropagation();
                          setShowForm(false)
                        }} className="userSettingBtn">
                          <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSignOutAlt} />
                          Sign out
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
            <button class="navbar-toggler togglebtn" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icons">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown ">
      <Link class="nav-link DropDownText " to="/" data-bs-toggle="dropdown">  Browse  <i class="fa-solid fa-angle-right iconSizeNav rotateIcon"></i>  </Link>
                <ul class="dropdown-menu">
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Web Development <i class="fa-solid fa-angle-right iconSizeNav iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li><Link class="dropdown-item DropDownItem" to="/secondpage">Second Page</Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Design <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Mobile App  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >IT SOftware  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Marketing  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Music  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Life Style  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Business </Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link DropDownText " to="/" data-bs-toggle="dropdown">  Landings  <i class="fa-solid fa-angle-right iconSizeNav rotateIcon"></i>  </Link>
                <ul class="dropdown-menu">
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Courses <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Single </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Single V2 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Resume </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Category </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Paths <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Blog <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Courses  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Lead Courses </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Home Academy </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Request Access </Link></li>
                  <hr></hr>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >About </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Help Canter <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link DropDownText " to="/" data-bs-toggle="dropdown">  Pages  <i class="fa-solid fa-angle-right iconSizeNav rotateIcon"></i>  </Link>
                <ul class="dropdown-menu">
                  <li> <Link class="dropdown-item DropDownItemBagde" to="/" aria-readonly> Education <span class="badge bg-primary">New</span>  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Courses  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Lead Courses </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Home Academy </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Request Access </Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link DropDownText " to="/" data-bs-toggle="dropdown">  Accounts  <i class="fa-solid fa-angle-right iconSizeNav rotateIcon"></i>  </Link>
                <ul class="dropdown-menu">
                  <p className='ReadOnlyText'>ACCOUNTS</p>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Instructor <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li><p className='ReadOnlyText'>INSTRUCTOR</p></li>
                      <p className='ReadOnlyTextDes'>Instructor Dashboard for Manage courses and earning</p>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Dashboard </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Profile </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >My Course  </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Category </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Student <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li><p className='ReadOnlyText'>STUDENTS</p></li>
                      <p className='ReadOnlyTextDes'>Students Dashboard for Manage courses and Subscriptions</p>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Dashboard </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Subscriptions </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Payments </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Billing Info </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Admin <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                  <hr></hr>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Sign In  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Sign Up  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Forgot Password </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Edit Profile </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Security </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Social Profile <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link DropDownText dots-Text  no-dropdown-arrow show no-dropdown-arrow   fs-3 lh-1 pt-2" to="/" data-bs-toggle="dropdown">  ...   </Link>
                <ul class="dropdown-menu">
                  <p className='ReadOnlyText'>ACCOUNTS</p>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Instructor <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li><p className='ReadOnlyText'>INSTRUCTOR</p></li>
                      <p className='ReadOnlyTextDes'>Instructor Dashboard for Manage courses and earning</p>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Dashboard </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Profile </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >My Course  </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Course Category </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Student <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li><p className='ReadOnlyText'>STUDENTS</p></li>
                      <p className='ReadOnlyTextDes'>Students Dashboard for Manage courses and Subscriptions</p>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Dashboard </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Subscriptions </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Payments </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Billing Info </Link></li>
                    </ul>
                  </li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Admin <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                  <hr></hr>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Sign In  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Sign Up  </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Forgot Password </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Edit Profile </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" >Security </Link></li>
                  <li> <Link class="dropdown-item DropDownItem" to="/" > Social Profile <i class="fa-solid fa-angle-right iconSizeNav"></i>  </Link>
                    <ul class="submenu dropdown-menu">
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Bootstrap </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >React </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >HTML5 </Link></li>
                      <li> <Link class="dropdown-item DropDownItem" to="/" >Angular </Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item searchDiv ">
                <input type="text"  class="form-control searchInput" placeholder="Search Courses" aria-label="Username" />
                <img src="search (2).svg" alt="" className='searchIcon'/>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <div className="toggleIcon">
                <li class="nav-item">
                  <div className="profileIconDiv">
                    <img src="https://geeks-react.netlify.app/static/media/sun.b75d9ae1f8dafcf0365aa12aeb1e0362.svg" alt="" />
                  </div>
                </li>
                <li class="nav-item">
                  <div className="profileIconDiv">
                    <i class="fa-regular bellicon fa-bell"></i>
                  </div>
                </li>
                <li class="nav-item">
                  <div onClick={() => {
                    setShowForm(!showForm)
                  }} className="profileIconDivImg">
                    <img src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" alt="" />
                    {
                      <div className={`dashboardForm ${showForm ? 'open' : ''}`}>
                        <div className="InnerBoxDiv">
                          <p className="userSettingBtn userNamePar"
                          >
                            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUser} />
                            Profile</p>
                          <p onClick={(e) => {
                            e.stopPropagation();
                            setShowForm(false)
                          }} className="userSettingBtn">
                            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUserPlus} />

                            Subscription
                          </p>
                          <p onClick={(e) => {
                            e.stopPropagation();
                            setShowForm(false)
                          }} className="userSettingBtn">
                            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCog} />
                            settings
                          </p>
                          <hr />
                          <p onClick={(e) => {
                            e.stopPropagation();
                            setShowForm(false)
                          }} className="userSettingBtn">
                            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSignOutAlt} />
                            Sign out
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar