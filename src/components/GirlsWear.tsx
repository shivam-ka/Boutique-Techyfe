import { girlsWear, Product } from "@/data/girlsWear";
import Image from "next/image";

export default function GirlsWear() {
  return (
    <div className="py-8 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {girlsWear.map((item) => (
        <div key={item.id} className="mb-12">
          <h1 className="w-fit text-3xl font-bold mb-8 ml-4 sm:ml-0 border-b-2 border-pink-500 pb-2">
            {item.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-6">
            {item.products.map((prod) => (
              <Product product={prod} key={prod.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  function Product({ product }: { product: Product }) {
    function productInquiryLink(
      phone: string,
      productName: string,
      url?: string
    ) {
      const msg = `Hello 👋, I'm interested in "${productName}". Could you please share more details?${
        url ? `\n\nProduct link: ${url}` : ""
      }`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }

    return (
      <a
        href={productInquiryLink("919990118082", product.name)}
        className="group border border-muted-foreground rounded-sm transition-shadow duration-300 overflow-hidden cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            alt={product.name}
            src={product.image}
            width={300}
            height={600}
            draggable={false}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
          <h2 className="font-semibold text-base md:text-lg group-hover:text-pink-600 transition-colors line-clamp-1">
            {product.name}
          </h2>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-base line-through text-muted-foreground">
              {product.discountPrice}
            </p>
            <p className="text-xl font-bold text-pink-700">{product.price}</p>
          </div>
        </div>
      </a>
    );
  }
}
