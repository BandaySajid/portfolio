import React from 'react'

const Contact = () => {

    return (
        <div className='w-100 p-3 ' style={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: '1rem' }}>
            <span className='text-white'>Email: <a href="mailto: admin@sajidbanday.in" style={{ color: 'rgb(30,34,46)' }} target='_blank'>admin@sajidbanday.in</a></span>

            <div className="socials" style={{ display: 'flex', gap: '1rem', background: 'linear-gradient(90deg, rgba(30,34,46,1) 0%, rgba(28,49,71,1) 51%, rgba(62,68,90,1) 100%)', padding: "1rem", borderRadius: "10px" }}>

                <a className="social_icon" href="https://github.com/BandaySajid" id="github" target="_blank"><i
                    className="fa fa-github-square fa-3x"></i></a>

                <a className="social_icon" href="https://twitter.com/BandayySajid" id="twitter" target="_blank"><i
                    className="fa fa-twitter-square fa-3x"></i></a>

                <a className="social_icon" href="https://www.linkedin.com/in/sajid-banday-521b6b240" id="linkedIN" target="_blank"><i
                    className="fa fa-linkedin-square fa-3x"></i></a>
            </div>
        </div>
    )
}

export default Contact;
