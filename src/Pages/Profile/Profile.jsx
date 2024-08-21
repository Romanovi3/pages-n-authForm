import React from "react";
import '../Profile/style.css'

export default function Profile(){
    return(
        <div className="profile">
            <div className="profile__avatar">
                <img src="../src/assets/zaglushka.png" alt="zaglushka" />
            </div>
            <div className="profile__info">
                <h2>Eto pro menya: </h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi libero animi cum ut voluptate quisquam temporibus, repellendus magnam, exercitationem nesciunt, officiis eligendi culpa molestias perspiciatis est veniam ex assumenda delectus.</span>
                <div className="links">
                    <p>Linkedin</p>
                    <p>Git</p>
                    <p>X</p>
                </div>
            </div>
        </div>
    )
}