import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { GrFormClose } from 'react-icons/gr';
import { IoSearch, IoBagOutline, IoCameraOutline } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown, FaRegCircleUser } from 'react-icons/fa6';
import { CiHome } from 'react-icons/ci';
import { GiClothes } from 'react-icons/gi';
import { GiRunningShoe } from "react-icons/gi";
import { MdOutlineLocalPhone } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import logo from '../../assets/Logo/logo.jpg';
import { IoGlasses } from "react-icons/io5";
import { MyContext } from '../../App';
import { SlBasket } from "react-icons/sl";
import { PiWatchThin } from "react-icons/pi";

function Header() {
  const [locOpen, setLocOpen] = useState(false);
  const [selectCountry, setSelectCountry] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [searchText, setSearchText] = useState('');

  const ctx = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCountryList(ctx.countryList || []);
  }, [ctx.countryList]);

  const runFilter = () => {
    const keyword = searchText.trim().toLowerCase();
    if (keyword === '') {
      setCountryList(ctx.countryList);
      return;
    }
    const filtered = ctx.countryList.filter((item) =>
      item.country.toLowerCase().includes(keyword)
    );
    setCountryList(filtered);
  };

  const handleInputChange = (e) => setSearchText(e.target.value);
  const handleInputKeyDown = (e) => e.key === 'Enter' && runFilter();
  const handleSelectCountry = (index) => {
    setSelectCountry(index);
    setLocOpen(false);
  };

  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center message">Everything You Need. All in One Place.</p>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">
              {ctx.countryList.length !== 0 && (
                <button className="countryDrop" onClick={() => setLocOpen(true)}>
                  <div className="info d-flex flex-column">
                    <span className="lable">Your Location</span>
                    <span className="name">
                      {selectCountry !== null
                        ? ctx.countryList[selectCountry]?.country
                        : ' '}
                    </span>
                  </div>
                  <span className="ms-auto">
                    <FaAngleDown />
                  </span>
                </button>
              )}

              <Dialog
                open={locOpen}
                onClose={() => setLocOpen(false)}
                maxWidth="sm"
                fullWidth
                className="locationModel"
              >
                <DialogTitle>
                  Choose Your Delivery Location
                  <IconButton
                    className="close_"
                    onClick={() => setLocOpen(false)}
                    aria-label="close"
                  >
                    <GrFormClose />
                  </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                  <p className="mb-3">
                    Enter your address and we will show offers for your area.
                  </p>
                  <div className="headerSearch w-100 mb-3">
                    <input
                      type="text"
                      placeholder="Search your area"
                      value={searchText}
                      onChange={handleInputChange}
                      onKeyDown={handleInputKeyDown}
                    />
                    <button type="button" onClick={runFilter}>
                      <IoSearch />
                    </button>
                  </div>
                  <ul className="countrylist">
                    {countryList.length !== 0 &&
                      countryList.map((item, index) => (
                        <li key={index}>
                          <Button
                            onClick={() => handleSelectCountry(index)}
                            className={selectCountry === index ? 'active' : ''}
                          >
                            {item.country}
                          </Button>
                        </li>
                      ))}
                  </ul>
                </DialogContent>
              </Dialog>

              <div className="headerSearch ml-3">
                <input type="text" placeholder="Search for Products" />
                <Link to="/">
                  <button type="button">
                    <IoSearch />
                  </button>
                </Link>
              </div>

              <div className="part3 d-flex align-items-center ml-auto ">


                <button className="- mr-3">
                  <Link to="/Login"><FaRegCircleUser /></Link>
                </button>

                
                <div className="cartTab ml-20 d-flex align-items-center">
                  <span className="price">${ctx.cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                  <div className="position-relative ml-2">

                    <button className="cart ml-2" onClick={() => navigate('/cart')}>
                      <IoBagOutline />
                      <span className="count d-flex align-items-center justify-content-center">
                        {ctx.cart.length}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1 px-0 mx-0"></div>
            <div className="col-sm-10 navPart2">
              <ul className="list list-inline ml-0">
                <li className="list-inline-item">
                  <Link to="/"><CiHome /> Home</Link>
                </li>
                <li className="list-inline-item position-relative">
                 <Link to="/cat"><SlBasket/>Shop</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/Contect"><MdOutlineLocalPhone /> Contact Us</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/about"><VscAccount /> About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
