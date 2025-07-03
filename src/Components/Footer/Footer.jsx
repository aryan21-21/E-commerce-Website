import { RiTShirtLine, RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery, TbCoin } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
function FooterTopInfo() {
  return (
    <footer>
      <div className="container">
        <div className="row topInfo text-center text-md-start">
          <div className="col d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
            <span className="icon"><RiTShirtLine /></span>
            <span className="ml-2">Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
            <span className="icon"><TbTruckDelivery /></span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
            <span className="icon"><RiDiscountPercentLine /></span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>
          <div className="col d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="icon"><TbCoin /></span>
            <span className="ml-2">Best price on the market</span>
          </div>
        </div>

        <div className="row mt-5 linkwraps">
        <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
            <li><Link to="#">Fresh Vegetables</Link></li>
            <li><Link to="#">Herbs & Seasonings</Link></li>
            <li><Link to="#">Fresh Fruits</Link></li>
            <li><Link to="#">Cuts & Sprouts</Link></li>
            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
            <li><Link to="#">Packaged Produce</Link></li>
            <li><Link to="#">Party Trays</Link></li>
            </ul>
        </div>
        
        <div className="col">
            <h5>BREAKFAST & DAIRY</h5>
            <ul>
            <li><Link to="#">Milk & Flavoured Milk</Link></li>
            <li><Link to="#">Butter and Margarine</Link></li>
            <li><Link to="#">Cheese</Link></li>
            <li><Link to="#">Eggs Substitutes</Link></li>
            <li><Link to="#">Honey</Link></li>
            <li><Link to="#">Marmalades</Link></li>
            <li><Link to="#">Sour Cream and Dips</Link></li>
            <li><Link to="#">Yogurt</Link></li>
            </ul>
        </div>

        <div className="col">
            <h5>MEAT & SEAFOOD</h5>
            <ul>
            <li><Link to="#">Breakfast Sausage</Link></li>
            <li><Link to="#">Dinner Sausage</Link></li>
            <li><Link to="#">Beef</Link></li>
            <li><Link to="#">Chicken</Link></li>
            <li><Link to="#">Sliced Deli Meat</Link></li>
            <li><Link to="#">Shrimp</Link></li>
            <li><Link to="#">Wild Caught Fillets</Link></li>
            <li><Link to="#">Crab and Shellfish</Link></li>
            <li><Link to="#">Farm Raised Fillets</Link></li>
            </ul>
        </div>

        <div className="col">
            <h5>BEVERAGES</h5>
            <ul>
            <li><Link to="#">Water</Link></li>
            <li><Link to="#">Sparkling Water</Link></li>
            <li><Link to="#">Soda & Pop</Link></li>
            <li><Link to="#">Coffee</Link></li>
            <li><Link to="#">Milk & Plant-Based Milk</Link></li>
            <li><Link to="#">Tea & Kombucha</Link></li>
            <li><Link to="#">Drink Boxes & Pouches</Link></li>
            <li><Link to="#">Craft Beer</Link></li>
            <li><Link to="#">Wine</Link></li>
            </ul>
        </div>

        <div className="col">
            <h5>BREADS & BAKERY</h5>
            <ul>
            <li><Link to="#">Milk & Flavoured Milk</Link></li>
            <li><Link to="#">Butter and Margarine</Link></li>
            <li><Link to="#">Cheese</Link></li>
            <li><Link to="#">Eggs Substitutes</Link></li>
            <li><Link to="#">Honey</Link></li>
            <li><Link to="#">Marmalades</Link></li>
            <li><Link to="#">Sour Cream and Dips</Link></li>
            <li><Link to="#">Yogurt</Link></li>
            </ul>
        </div>
        </div>

       <div className="copy mt-3 pt-3 pb-3 d-flex justify-content-between align-items-center flex-wrap">
            <p className="mb-0 text-muted">
                © 2025 Shopify WordPress Theme. All rights reserved. Powered by Aryan.
                <Link to="https://www.privacypolicies.com/live/1f96d5ee-1e11-405b-a88a-f56e9bf05648" className="mx-2">Privacy Policy</Link>
                <Link to="https://www.privacypolicies.com/live/1f96d5ee-1e11-405b-a88a-f56e9bf05648">Terms and Conditions</Link>
            </p>

            <ul className="list-inline mb-0">
                <li className="list-inline-item mx-2">
                <Link to="#"><CiFacebook /></Link>
                </li>
                <li className="list-inline-item mx-2">
                <Link to="#"><IoLogoTwitter /></Link>
                </li>
                <li className="list-inline-item mx-2">
                <Link to="#"><FaInstagram /></Link>
                </li>
            </ul>
            </div>
        </div>
    </footer>
  );
}

export default FooterTopInfo;
