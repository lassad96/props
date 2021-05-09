import React from 'react'
import PropTypes from "prop-types";
import imageslt from '../../imageslt.jpg';

const Profile = ({ fullName, bio, profession, hundleName }) => {
    return (
        <div>
            <div style={{ color: "red", width: "100%" }}>
                {fullName}
            </div>
            <br />
            <div className="Bio">
                {bio}
            </div>
            <br />
            <div className="profession">
                {profession}
            </div>
            <br />
            <button onClick={() => hundleName(fullName)}  >Clic Me</button>          <br />
        </div>
    )
}
export const ImageChildren = ({ children }) => {
    return (
        <>
          
            <img src={imageslt} alt="Imagechildren" style={{ marginBottom: 20, marginTop: 10 }}></img>
        </>
    )
};
Profile.defaultProps = {
    fullName: "Lassaad Tajouri",
}
Profile.defultProps = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired
};
export default Profile;