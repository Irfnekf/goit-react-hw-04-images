import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '46%',
        left: '48%',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#5b5de1', '#608af4', '#6abff8', '#81a9bd', '#84969b']}
    />
  );
};

export default Loader;
