import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={470}
        viewBox="0 0 280 470"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="636" cy="537" r="115" />
        <circle cx="137" cy="127" r="117" />
        <rect x="5" y="261" rx="7" ry="7" width="265" height="33" />
        <rect x="5" y="310" rx="7" ry="7" width="265" height="76" />
        <rect x="130" y="405" rx="17" ry="17" width="143" height="42" />
        <rect x="4" y="405" rx="7" ry="7" width="105" height="40" />
    </ContentLoader>
)

export default MyLoader;

