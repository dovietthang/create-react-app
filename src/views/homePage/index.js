// material-ui
import { Box } from '@mui/material';
// import { useEffect } from 'react';

// project imports
import Section1 from './sections-home/Section1'; // Kiểm tra đường dẫn này
import Section2 from './sections-home/Section2';
import Section3 from './sections-home/Section3';
import Section4 from './sections-home/Section4';
import Section5 from './sections-home/Section5';
import Section6 from './sections-home/Section6';
import Section7 from './sections-home/Section7';
import MySVG from './sections-home/MySVG';
// import GoogleTagManager from './sections-home/GoogleTagManager';

// ==============================|| DEFAULT HomePage ||============================== //

const HomePage = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <Box>
      {/* <GoogleTagManager /> */}
      <Box>
        <MySVG />
        <div className="wrapper" id="home-page-wrapper">
          <div id="resizable-container">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
          </div>
        </div>
      </Box>
      {/* <Helmet>
        <script type="text/javascript">
          {`
            // Đoạn mã JavaScript của bạn
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/5aa4e7f3d7591465c70874ab/default';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </script>
      </Helmet> */}
    </Box>
  );
};

export default HomePage;
