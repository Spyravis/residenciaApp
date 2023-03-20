import React from 'react'
export const Cookie = () => {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function cookieConsent() {
        if (!getCookie('allowCookies')) {
            document.querySelector('.toast').toast('show')
        }
    }

    document.querySelector('#btnDeny').onClick(() => {
        eraseCookie('allowCookies')
        document.querySelector('.toast').toast('hide')
    })

    document.querySelector('#btnAccept').onClick(() => {
        setCookie('allowCookies', '1', 7)
        document.querySelector('.toast').toast('hide')
    })

    // load
    cookieConsent()

    // for demo / testing only
    document.querySelector('#btnReset').onClick(() => {
        // clear cookie to show toast after acceptance
        eraseCookie('allowCookies')
        document.querySelector('.toast').toast('show')
    })




    return (

        <div className="fixed-bottom p-4">
            <div className="toast bg-dark text-white w-100 mw-100" role="alert" data-autohide="false">
                <div className="toast-body p-4 d-flex flex-column">
                    <h4>Cookie Warning</h4>
                    <p>
                        This website stores data such as cookies to enable site functionality including analytics and personalization. By using this website, you automatically accept that we use cookies.
                    </p>
                    <div className="ml-auto">
                        <button type="button" className="btn btn-outline-light mr-3" id="btnDeny">
                            Deny
                        </button>
                        <button type="button" className="btn btn-light" id="btnAccept">
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}