import React from "react";
import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar.jpg";

function Post({ post }) {
  return (
    <>
      <div class="bg-whitesmoke">
        <div class="flex justify-center items-center gap-2 place-items-center mt-10">
          <div>
            <div class="flex justify-center items-center rounded lg:flex mb-5 ">
              <Link href={`/blog/${post.slug}`}>
                <div class="bg-white rounded px-4 py-4 max-w-2xl flex flex-col justify-between leading-normal border-t-2 shadow-inner hover:shadow-lg border-light-blue">
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
                    <Image
                      src={avatar}
                      alt=""
                      width={""}
                      height={""}
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
