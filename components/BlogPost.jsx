import React from "react";
import Link from "next/link";

function BlogPost() {
  return (
    <div class="grid grid-cols-1 gap-4 place-items-center h-56 ">
      <div>
        <a class="block rounded w-full lg:flex mb-10" href=".">
          <div class="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
            <div>
              <div class="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                {post.frontmatter.title}
              </div>
              <div class="mt-3 md:mt-0 text-gray-700 font-normal text-xl mb-2">
                {post.frontmatter.excerpt}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <div class="">Read More</div>
              </Link>
            </div>
            <div class="flex mt-3">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/men/11.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p class="font-semibold text-gray-700 text-sm capitalize">
                  Gunpriya Sarpate
                </p>
                <p class="text-gray-600 text-xs">
                  posted{post.frontmatter.date}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogPost;
