import React from 'react'
import BlogCmpt from './Components/Blog/BlogCmpt'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'


const BlogPage = () => {
    return (
        <div>
            <Hero h1="Blog Section"/>
            <div className='container'>
                <Title subTitle="Blog" Title="Everything You need to know"/>
                <BlogCmpt />
            </div>
        </div>
    )
}

export default BlogPage
