import "./globals.css";
import "./embla.css";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import { Montserrat } from "next/font/google";

// Montserrat 폰트 설정
const montserrat = Montserrat({
  subsets: ["latin"], // 사용할 폰트 서브셋
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // 사용할 폰트 두께
  style: ["normal", "italic"], // 폰트 스타일
  display: "swap", // 폰트 로딩 중 기본 폰트와 대체되도록 설정
});

export const metadata = {
  title: "강혜원 : 프론트앤드 개발자 포트폴리오",
  description: "프론트엔드 개발자 강혜원 포트폴리오입니다!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <div className="px-[5vw] py-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
