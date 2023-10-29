import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets';
import { useSelector } from 'react-redux';

import * as S from '../styles';

export const Header = () => {


    const location = useLocation();
    const lastPath = location.pathname.split("/").pop()
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.auth.currentUser)


    return (
        <S.NavBarDiv>
            {/* <S.ImageContainer> */}
            <S.HeightFitRoundedImage src={Logo} onClick={() => { navigate("/") }}></S.HeightFitRoundedImage>
            {/* </S.ImageContainer> */}
            <S.NavItem>
                <NavLink to="problem">
                    <S.LinkText active={lastPath == "problem"}>Problems</S.LinkText>
                </NavLink>

                <NavLink to="discussion">
                    <S.LinkText active={lastPath == "discussion"}>Discussions</S.LinkText>
                </NavLink>

                {currentUser && <NavLink to="history">
                    <S.LinkText active={lastPath == "history"}>History</S.LinkText>
                </NavLink>
                }
                {currentUser &&
                    <NavLink to="profile" >
                        <S.LinkText active={lastPath == "profile"}>Profile</S.LinkText>
                    </NavLink>}

                {!currentUser &&
                    <NavLink to="signin">
                        <S.LinkText active={lastPath == "signin" || lastPath == "signup" || lastPath == "resetpassword"}>signin</S.LinkText>
                    </NavLink>}
            </S.NavItem>

        </S.NavBarDiv>
    )
}

export default Header;
