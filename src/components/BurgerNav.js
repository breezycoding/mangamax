import React, {useState} from "react";
import { bindActionCreators } from "redux";

import { categoryDescription } from "src/redux/action/categoryDescription";
import "../../node_modules/hamburgers/dist/hamburgers.min.css";

import { connect } from "react-redux";

const BurgerNav = (props) => {
    const [toggleBurgerNav, settoggleBurgerNav] = useState(false);

    //props.categoryDescription(toggleBurgerNav);
    return(
        <div className="burger_nav">
            <button 
                onClick={() => {
                    settoggleBurgerNav(!toggleBurgerNav);
                    props.categoryDescription({id:props.id, showCategoryDesc:!toggleBurgerNav});
                    }}
                className={"hamburger hamburger--3dx burger_nav__btn " + (toggleBurgerNav && "is-active")} 
                type="button"
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        categoryDescription
    },dispatch)
};

export default connect(null, mapDispatchToProps)(BurgerNav);
