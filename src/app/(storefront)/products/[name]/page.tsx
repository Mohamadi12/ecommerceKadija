import { ProductCard } from "@/components/global/storefront/ProductCard";
import { client } from "@/lib/prisma";
import { notFound } from "next/navigation";

export async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma?.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });
      return {
        title: "All products",
        data: data,
      };
    }

    case "men": {
      const data = await client.product.findMany({
        where: {
          status: "published",
          category: "men",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });
      return {
        title: "Products for men",
        data: data,
      };
    }

    case "women": {
      const data = await client.product.findMany({
        where: {
          status: "published",
          category: "women",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });
      return {
        title: "Products for women",
        data: data,
      };
    }
    case "kids": {
      const data = await client.product.findMany({
        where: {
          status: "published",
          category: "kids",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });
      return {
        title: "Products for kids",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

const CategoriesPage = async ({ params }: { params: { name: string } }) => {
  const { name } = await params;
  const { data, title } = await getData(name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
