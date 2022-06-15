//create header componet
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function Header(props) {
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);

  const HeaderWrapper = styled.div`
    position: sticky;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    width: 90%;
    height: 100px;
    z-index: 10;
    top: 0;
    margin: 0 auto;
    background-color: #fff;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex: 1;
      gap: 10px;
      height: 100%;
    }
  `;

  const MenuWrapper = styled.li`
    > a {
      padding: 10px 30px;
      text-decoration: none;
      text-align: center;
      border-radius: 5px;
      text-transform: capitalize;
      color: #fff;
      background-color: #0b879c;
      font-size: 15px;

      @media (max-width: 500px) {
        margin: 0;
      }
    }
  `;

  const LeftMenuWrapper = styled.div`
    margin-left: 30px;
    margin-top: 20px;
    > a {
      font-size: 30px;
      font-weight: bold;
      color: #0b879c !important;
    }
  `;

  const RightMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    > div {
      float: right;
      > ul {
        display: flex;
        margin-right: 10px;
        margin-top: 10px;
        > li {
          list-style: none;
          margin-top: 20px;
          margin-right: 20px;
        }
      }
    }
  `;
  return (
    <HeaderWrapper>
      <LeftMenuWrapper>
        <Link to={'/'}>
          B.<span>L</span>.<span>O</span>.<span>G</span>
        </Link>
      </LeftMenuWrapper>
      <RightMenuWrapper>
        <div>
          <ul>
            <MenuWrapper>
              <Link to="/post">post</Link>
            </MenuWrapper>
            {user.username ? (
              <li>
                <Link to="/post">post</Link>
              </li>
            ) : (
              <MenuWrapper>
                <Link to="/signup">signup</Link>
              </MenuWrapper>
            )}

            {user.username && (
              <div
                className="profile"
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <img src="images/avt2.png" alt="" />
              </div>
            )}
          </ul>
        </div>
      </RightMenuWrapper>
      <div>
        <Modal modalState={modal} />
      </div>
    </HeaderWrapper>
  );
}
