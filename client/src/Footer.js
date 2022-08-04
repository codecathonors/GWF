import React from "react";

function Footer() {

    function handleFacebookClick(e) {
        e.preventDefault()
        window.location.replace("https://www.facebook.com/thegregoryweinerfoundation/")
    }

    function handleAmazonClick(e) {
        e.preventDefault()
        window.location.replace("https://smile.amazon.com/charity/select?ref_=smi_se_rspo_change_cycsc")
    }

    return (
        <>
        <nav class="navbar navbar-light">
            <div class="container-fluid footer" style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "#F2F2F2"
            }}>
            <div class="d-grid mx-auto" style={{ fontSize: 14, letterSpacing: 1}}>
                        <a class="navbar-text text-decoration-none"><a href="/" class="text-decoration-none">©2014, The Gregory Weiner Foundation</a> | <a href="/contact-us" class="text-decoration-none">Contact Us</a> | <a href="/site-disclaimer" class="text-decoration-none">Privacy Policy</a> | <a class="nav-item" onClick={handleFacebookClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                </a> | <a class="nav-item" onClick={handleAmazonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                        <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                    </svg>
                </a></a>
            </div>
            </div>
        </nav>
        </>  
    )
}

export default Footer;