import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import LoaderComponent from './core/shared/loader/loader.component';
// import {ToastContainer} from 'react-toastify';
import useGlobalStyles from 'assets/styles/style';
import { ConfigProvider } from 'antd';
import { themeConfig } from './core/configs/theme.config';
// import {useStore} from './store/store.config';

const queryClient = new QueryClient();

function App() {
  // const loader = useStore('loader');

  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themeConfig}>
        <div className='App'>
          <RouterProvider router={router} />
          {/* {loader ? <LoaderComponent/> : null} */}
        </div>
        {/* <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    closeButton={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='light'
                    style={
                        {
                            minHeight: 'auto',
                            maxHeight: '80vh',
                        }
                    }
                /> */}
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
