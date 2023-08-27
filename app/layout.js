import StyledComponentsRegistry from '@/lib/AntdRegistry';
import './globals.css';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import theme from '@/theme';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={theme}>
        <html lang='en'>
          <body className={`${inter.className}`}>
            <Navbar />
            {children}
          </body>
        </html>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
}
