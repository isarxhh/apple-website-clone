import React from 'react'
import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE (1-800-692-7753).</p>
                <img src="/logo.svg" alt="logo" />
            </div>
            <hr/>
            <div className="links">
                <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                <ul>
                    {footerLinks.map(({label,link}) => (
                        <li key={label}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
