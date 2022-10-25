import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 bg-orange-400 rounded-lg'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-origin resource sharing ( CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. [1] A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. [2] Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why Are you using Firebase?
                </div>
                <div className="collapse-content">
                    <p>Using Firebase in your project allows you to focus on the frontend and not so much on the backend because Firebase does a lot of things under the hood for you. Firebase also helps keeps costs low and reduces the need for boilerplate backend code. Firebase also helps you monitor errors. <br /> The top ten User Authentication and Access Management platforms include:

                        Prove MFA | Duo Access | HID Global IAM | ESET Secure Authentication | Ping Identity | TypingDNA Verify 2FA | Thales SafeNet Trusted Access | Entrust Identity Enterprise | Okta Adaptive Multi-Factor Authentication | SecureAuth Identity Platform</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>Nodes are the custodians of a blockchain. They keep all copies of the ledger in sync, storing encrypted data of past transactions while taking on new blocks for scalable growth. They are algorithmically programmed to execute transactions based on a majority consensus.
                        <br />Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;