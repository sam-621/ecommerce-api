import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Product: FC<IProductProps> = ({ image, name, price, id }) => {
  return (
    <article className="Product">
      <Link href={`/products/${name}-${id}`}>
        <a>
          <Image src={image} title={name} alt={name} width={80} height={80} />
        </a>
      </Link>
      <div className="Product-info">
        <div className="Product-info-text">
          <h3>{name}</h3>
          <span>${price}</span>
        </div>
        <div className="Product-info-button"></div>
      </div>
    </article>
  );
};

interface IProductProps {
  image: string;
  name: string;
  price: number;
  id: number;
}

export default Product;
