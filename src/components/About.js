import React from 'react'

import Layout from './Layout'

const About = () => {
    return (
        <Layout>
            <div className="about">
                <div className="about-cont">
                    This is a Demo. All Info is copyright to their Respective Owners.
                </div>
                <div className="about-api">
                        API USED
                        <a href="https://www.themealdb.com" className="api-link">Visit Website</a>
                </div>
            </div>
        </Layout>
    )
}

export default About
