import styled from 'styled-components'

const ArticleThumbnail = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0.2em;
  background: url(https://source.unsplash.com/random/150x150);
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default ArticleThumbnail