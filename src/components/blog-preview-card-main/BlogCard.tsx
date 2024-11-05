import './style.scss'
const BlogCard = () => {
    return  (
        <div className="container">
            <div className="card">
                <div className="blog-image"></div>
                <div className="content">
                    <div className="blog-tag"><a href="#">Learning</a></div>
                    <p className="date">Published 21 Dec 2023</p>
                    <h3>HTML & CSS foundations</h3>
                    <p>These languages are the back bone of every website, defining structure, content, and presentation</p>
                </div>
                <div className="author">
                    <div className="user-avatar"></div>
                    <p className="user-name">Greg Hooper</p>
                </div>
            </div>
        </div>
    )
}

export default  BlogCard;