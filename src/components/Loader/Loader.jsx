import { InfinitySpin } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

function Loader() {
  return (
    <Wrapper>
    <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
    </Wrapper>
  );
}

export default Loader;