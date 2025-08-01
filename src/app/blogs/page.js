import fs from 'fs';
import path from 'path';
import ClientBlogPage from './ClientBlogPage.jsx';

// Function to read blogs data
function getBlogs() {
  const filePath = path.join(process.cwd(), 'public', 'blogs.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(fileData);
  return blogs;
}
export const metadata = {
  title: "Blog | Dr Jagdish Singh Charan – Orthopedic & Spine in Ajmer",
  description:
    "Explore expert insights, tips, and updates from Dr. Jagdish Singh Charan on orthopedic and spine health. Stay informed on the latest in joint care, surgery, and recovery.",
  keywords:
    "Orthopedic Blog Ajmer, Spine Health Tips, Dr Jagdish Singh Charan Blog, Bone Care Articles, Joint Replacement Info, Orthopedic Advice India, Spine Surgery Updates",
  openGraph: {
    title: "Blog | Dr Jagdish Singh Charan – Orthopedic & Spine Health Tips",
    description:
      "Get expert advice and the latest updates from Dr. Jagdish Singh Charan on bone, joint, and spine care. Your guide to better orthopedic health starts here.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/home/docter2.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Jagdish Singh Charan Blog Cover",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/blogs",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/blogs",
  },
  robots: "index, follow",
  authors: [
    {
      name: "Dr. Jagdish Singh Charan",
      url: "https://drjagdishcharan.in/",
    },
  ],
  publisher: "Dr. Jagdish Singh Charan",
};



export default function BlogPage() {
  const blogs = getBlogs();
  return <ClientBlogPage blogs={blogs} />;
}