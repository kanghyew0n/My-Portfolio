import MetaTag from "../MetaTag";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, onItsMeClick }) => {
    return (
        <>
            <MetaTag />
            <Header onItsMeClick={onItsMeClick} />
            <main className='min-h-[calc(100vh-360px)] pt-[60px] lg:pt-[80px] px-4 sm:px-16'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
