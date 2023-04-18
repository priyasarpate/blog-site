import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <>
      <div>
        <div class="grid grid-cols-1 gap-2 place-items-center mt-10">
          <div>
            <div class="block rounded lg:flex mb-5">
              <Link href={`/blog/${post.slug}`}>
                <div class="bg-white rounded w-auto px-4 py-4 flex flex-col justify-between leading-normal shadow border-t-2 border-light-blue">
                  <div>
                    <div class="mt-3 md:mt-0 text-dark-blue font-semibold text-2xl mb-2">
                      {post.frontmatter.title}
                    </div>
                    <div class="mt-3 md:mt-0 font-normal text-md mb-2">
                      {post.frontmatter.excerpt}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <div class="">Read More...</div>
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
                      <div class="text-gray-600 text-xs flex gap-2">
                        <h1 class="text-gray">posted</h1>
                        {post.frontmatter.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
