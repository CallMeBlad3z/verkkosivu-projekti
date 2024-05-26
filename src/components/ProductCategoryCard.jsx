import { Link } from 'react-router-dom';

const ProductCategoryCard = ({ category }) => {
    
    const {title, link, imageUrl} = category;
    
    return (
        <Link to={link}>
        <div className="category-card">
            <div className="category-title">
                <p>{title}</p>
            </div>
            <div className="category-image">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
        </Link>
    );
};

export default ProductCategoryCard;

