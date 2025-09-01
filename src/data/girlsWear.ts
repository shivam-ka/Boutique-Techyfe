// girlsWear.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string; // Original Price (MRP)
  discountPrice: string; // Discounted Price
}

export interface Category {
  id: number;
  title: string;
  products: Product[];
}

export const girlsWear: Category[] = [
  {
    id: 1,
    title: "Dresses",
    products: [
      {
        id: 101,
        name: "Floral Summer Dress",
        description:
          "Lightweight cotton dress with floral prints, perfect for summer outings.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/2/wWnbqSDX_64d280e58bde4ca2a88d7e89382cb881.jpg",
        price: "₹2,075",
        discountPrice: "₹1,799",
      },
      {
        id: 102,
        name: "Party Sequin Dress",
        description:
          "Shiny sequin dress for birthdays and festive celebrations.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27443692/2024/12/6/2148e1e4-af7f-45e9-a6c2-501c743209471733477391151-Azira-Checked-Cotton-Empire-Puff-Sleeve-Layered-Fit--Flare-M-1.jpg",
        price: "₹3,320",
        discountPrice: "₹2,799",
      },
      {
        id: 103,
        name: "Casual Denim Dress",
        description: "Classic denim dress with pockets for daily wear.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/2/Aiq8sRDN_2c5d1d11c759420f93250262331bce22.jpg",
        price: "₹2,490",
        discountPrice: "₹2,099",
      },
      {
        id: 104,
        name: "Polka Dot Dress",
        description: "Trendy polka dot dress with a flared bottom.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/22/215DSMD1_ed89d95655104ac89bc3161377b99574.jpg",
        price: "₹2,324",
        discountPrice: "₹1,949",
      },
      {
        id: 105,
        name: "Layered Princess Dress",
        description: "Beautiful layered gown for parties and special events.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28191418/2024/4/18/0412f3e4-9ef8-4571-9d87-6b04c7491c321713425082795-DressBerry-Slit--Shift-Ruffle-Strap-A-Line-Dress-27417134250-1.jpg",
        price: "₹4,150",
        discountPrice: "₹3,599",
      },
    ],
  },
  {
    id: 2,
    title: "Tops & Tees",
    products: [
      {
        id: 201,
        name: "Graphic T-Shirt",
        description: "Cotton tee with fun graphic print, soft and comfortable.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14066122/2021/9/20/a595bf67-f90d-4672-b534-b13fa26991a81632126780388-DressBerry-Women-Tops-6811632126779892-1.jpg",
        price: "₹1,245",
        discountPrice: "₹999",
      },
      {
        id: 202,
        name: "Ruffled Sleeve Top",
        description: "Trendy ruffled sleeves for a stylish casual look.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32335848/2025/1/14/f3b340a9-53fc-466c-ad88-2d020fe94ecc1736860308283COLORCAPITALWomenV-NeckExtendedSleevesPocketsT-shirt1.jpg",
        price: "₹1,660",
        discountPrice: "₹1,399",
      },
      {
        id: 203,
        name: "Basic White Tee",
        description: "Classic plain white cotton t-shirt for everyday wear.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/29960138/2024/6/13/c24a2679-da79-4d30-9b00-4a557dcc17de1718297254579USPoloAssnWomenWomenPrintedDrop-ShoulderSleevesPureCottonT-s1.jpg",
        price: "₹996",
        discountPrice: "₹799",
      },
      {
        id: 204,
        name: "Printed Crop Top",
        description: "Soft crop top with trendy prints for a cool look.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21817076/2023/2/2/21e398d5-1602-49fa-818a-d798de29cffa1675345314733TechnosportWomenTshirt1.jpg",
        price: "₹1,494",
        discountPrice: "₹1,249",
      },
      {
        id: 205,
        name: "Striped Full Sleeve",
        description: "Comfortable striped full-sleeve t-shirt for outings.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/15/tWNqcXLd_449600defab543c988c66265f9e3b70c.jpg",
        price: "₹1,826",
        discountPrice: "₹1,499",
      },
    ],
  },
  {
    id: 3,
    title: "Skirts",
    products: [
      {
        id: 301,
        name: "Denim Skirt",
        description: "Casual blue denim skirt with button-up style.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/27030178/2024/1/21/4774d1e1-4063-4ea4-bc72-5b90850ee3931705779143832ZastraaA-lineMiniSkorts1.jpg",
        price: "₹2,075",
        discountPrice: "₹1,749",
      },
      {
        id: 302,
        name: "Pleated Skirt",
        description:
          "Stylish pleated skirt suitable for school and casual wear.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/9/LJIXK9Oq_bd0397cbc1c2453db6983b728e625089.jpg",
        price: "₹2,324",
        discountPrice: "₹1,899",
      },
      {
        id: 303,
        name: "Layered Net Skirt",
        description: "Cute layered net skirt, ideal for parties.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/27/z1dfUTVd_38c272f5982645908d2d2330597eab07.jpg",
        price: "₹2,490",
        discountPrice: "₹2,099",
      },
      {
        id: 304,
        name: "Polka Dot Skirt",
        description: "Trendy black and white polka dot skirt.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/30/DqhjwdlQ_4e5da35f1da24012a14e100cec791f4c.jpg",
        price: "₹1,992",
        discountPrice: "₹1,599",
      },
      {
        id: 305,
        name: "A-Line Skirt",
        description:
          "Classic A-line skirt perfect for both formal and casual outings.",
        image:
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/14/QWWUJ9YF_b663a5963d7a49e8adff2ead11d42447.jpg",
        price: "₹2,158",
        discountPrice: "₹1,799",
      },
    ],
  },
];
