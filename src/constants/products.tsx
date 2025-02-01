import bantingcomm from "public/images/bantingcomm.png";
import lifeslice from "public/images/life-slice.png";
import toonrole from "public/images/toonrole.png";
import tpco from "public/images/tpco.png";

export const products = [
  {
    href: "https://www.lifeslice.pro",
    title: "Life Slice",
    description:
      "LifeSlice helps users document life's journeys by organizing moments into 'slices.' Users can create timelines with text and photos, highlighting growth and memories. It also offers public and collaborative journeys for shared storytelling.",
    thumbnail: lifeslice,
    images: [lifeslice],
    stack: ["Nextjs", "Supabase", "Shadcn/ui"],
    slug: "lifeslice",
    content: (
      <div>
        <p>
          LifeSlice helps users document life&apos;s journeys by organizing
          moments into &apos;slices.&apos; Users can create timelines with text
          and photos, highlighting growth and memories. It also offers public
          and collaborative journeys for shared storytelling.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.theparentcompany.com.my",
    title: "Ecommerce Storefront & Back Office",
    description:
      "This is an E-commerce website that I built for a SME using Nextjs, Typescript and MedusaJS. It contains all the basic functions and features that an e-commerce website should have, such as Add To Cart, Check Out, Make Payment with Stripe, Check Order Details, Admin Back Office etc.",
    thumbnail: tpco,
    images: [tpco],
    stack: ["Nextjs", "MedusaJS", "Typescript"],
    slug: "tpco",
    content: (
      <div>
        <p>
          This is an E-commerce website that I built for a SME using Nextjs,
          Typescript and MedusaJS. It contains all the basic functions and
          features that an e-commerce website should have, such as Add To Cart,
          Check Out, Make Payment with Stripe, Check Order Details, Admin Back
          Office etc.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.toonrole.ai",
    title: "ToonRole.ai",
    description:
      "ToonRole.ai is an interactive, story-driven platform where users can engage with AI characters in immersive narratives. Instead of simple avatars, ToonRole.ai offers a range of characters with unique backgrounds, personalities, and evolving storylines that users can explore and influence.",
    thumbnail: toonrole,
    images: [toonrole],
    stack: ["Nextjs", "AI", "Text-to-Speech"],
    slug: "toonrole",
    content: (
      <div>
        <p>
          ToonRole.ai is an interactive, story-driven platform where users can
          engage with AI characters in immersive narratives. Instead of simple
          avatars, ToonRole.ai offers a range of characters with unique
          backgrounds, personalities, and evolving storylines that users can
          explore and influence.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.bantingcomm.com.my",
    title: "Corporate Website",
    description:
      "This is the landing page that I built for a SME using Nextjs, typescript and Chakra UI. It contains all the basic information and functions that a landing page should have, such as product information, contact form and social media button, as well as some basic SEO.",
    thumbnail: bantingcomm,
    images: [bantingcomm],
    stack: ["Nextjs", "Chakra UI", "Typescript"],
    slug: "bantingcomm",
    content: (
      <div>
        <p>
          This is the landing page that I built for a SME using Nextjs,
          typescript and Chakra UI. It contains all the basic information and
          functions that a landing page should have, such as product
          information, contact form and social media button, as well as some
          basic SEO.
        </p>
      </div>
    ),
  },
];
