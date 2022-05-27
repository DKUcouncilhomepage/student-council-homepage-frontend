import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';
import { MenuItems } from './MenuItems';

const Ul = styled.ul`
  position: absolute;
  top: 120px;
  max-width: 150px;
  width: 9%;
  font-family: 'Apple SD Gothic Neo'; // TODO: 마찬가지로 폰트 통일 부탁드립니다.
  font-style: normal;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};
  list-style: none;
  z-index: 1000;
`;

const Li = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  #menus {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.125rem;
    text-decoration: none;
  }
`;

function Dropdown() {
  return (
    <ThemeProvider theme={theme}>
      {/* TODO: 불필요한 ThemeProvider */}
      <Ul>
        {MenuItems.map((item) => {
          return (
            <Li key={item.id}>
              <Link to={item.path} id="menus">
                {item.title}
              </Link>
            </Li>
          );
        })}
      </Ul>
    </ThemeProvider>
  );
}

export default Dropdown;
