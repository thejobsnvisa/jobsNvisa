import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogs } from "../Data/BlogData";
import { Helmet } from "react-helmet-async";
import rehypeRaw from "rehype-raw";
import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";

const BlogsArticle = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const article = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (article) {
      let isMounted = true;

      // Use BASE_URL to handle deployment subpaths automatically
      const baseUrl = import.meta.env.BASE_URL || "/";
      const filePath = `${baseUrl}content/blogs/${slug}.md`.replace(
        /\/+/g,
        "/"
      );

      fetch(filePath)
        .then((res) => {
          if (!res.ok) throw new Error("File not found");
          return res.text();
        })
        .then((text) => {
          if (isMounted) {
            if (
              text.trim().startsWith("<!doctype html>") ||
              text.trim().startsWith("<html")
            ) {
              throw new Error(
                "Wrong file path - received HTML instead of Markdown"
              );
            }
            setContent(text);
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setContent(
            "## Content Not Found\nPlease check that the file exists in `public/content/blogs/`."
          );
        });

      return () => {
        isMounted = false;
      };
    }
  }, [slug, article]);

  // Safely split markdown into blocks at level-2 headings (##)
  const markdownBlocks = useMemo(() => {
    if (typeof content !== "string" || !content.trim()) return [];
    try {
      const blocks = content.split(/(?=\n##\s)/g);
      return blocks.map((b) => b.trim()).filter(Boolean);
    } catch (e) {
      console.error("Markdown split error:", e);
      return [content];
    }
  }, [content]);

  // Custom markdown components (strips 'node' via destructuring)
  const markdownComponents = {
    h2: ({ ...props }) => (
      <h2
        className="text-[#28535B] text-[22px] md:text-[24px] font-bold mb-4"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3
        className="text-[#28535B] text-[18px] md:text-[20px] font-semibold mt-4 mb-3"
        {...props}
      />
    ),
    p: ({ ...props }) => (
      <p
        className="text-[15px] md:text-[16px] leading-[1.8] text-[#333] mb-4"
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul
        className="ml-12 mb-4 list-disc space-y-2 text-[#333] list-inside gap-3 text-justify "
        {...props}
      />
    ),
    ol: ({ ...props }) => (
      <ol
        className="pl-8 mb-4 list-decimal space-y-2 text-[#333]"
        {...props}
      />
    ),
    li: ({ ...props }) => (
      <li className="text-[#333] marker:text-[#28535B]" {...props} />
    ),
    strong: ({ ...props }) => (
      <strong className="font-semibold text-[#042325]" {...props} />
    ),
    a: ({ ...props }) => (
      <a
        className="text-[#2ED09B] underline font-medium hover:text-[#0D542B] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    img: ({ ...props }) => (
      <img
        className="w-full max-h-[420px] object-cover my-6 rounded-2xl shadow-sm"
        loading="lazy"
        {...props}
      />
    ),
    table: ({ ...props }) => (
      <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl">
        <table className="w-full text-sm border-collapse" {...props} />
      </div>
    ),
    thead: ({ ...props }) => (
      <thead className="bg-green-100/50" {...props} />
    ),
    th: ({ ...props }) => (
      <th
        className="border border-gray-200 px-4 py-3 text-left font-semibold text-[#042325]"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="border border-gray-200 px-4 py-3 text-[#333]" {...props} />
    ),
    tr: ({ ...props }) => (
      <tr className="hover:bg-white/60 transition" {...props} />
    ),
    iframe: ({ ...props }) => (
      <div className="my-6 w-full overflow-hidden rounded-2xl shadow-md">
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            {...props}
          />
        </div>
      </div>
    ),
  };

  if (!article) {
    return (
      <div className="py-20 text-center font-bold text-gray-700">
        Article metadata not found.
      </div>
    );
  }

  const articleTitle = article?.metaTitle || article?.title || "Blog Article";
  const articleDesc = article?.metaDescription || article?.title || "";

  // Helper to retrieve block 2 & block 4 images from article data safely
  const getBlockImage = (blockIndex) => {
    if (blockIndex === 1) {
      return article?.image;
    }
    if (blockIndex === 3) {
      return article?.img;
    }
    return null;
  };

  return (
    <>
      <Helmet>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDesc} />
        <link
          rel="canonical"
          href={`https://jobsnvisa.com.au/blogs/${slug}/`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDesc} />
        {article?.image && (
          <meta
            property="og:image"
            content={`https://jobsnvisa.com.au${article.image}`}
          />
        )}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        {article?.image && (
          <meta
            name="twitter:image"
            content={`https://jobsnvisa.com.au${article.image}`}
          />
        )}
        <meta
          property="og:url"
          content={`https://jobsnvisa.com.au/blogs/${slug}/`}
        />
        <meta name="publisher" content="Jobs N Visa" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <section className="max-w-[1420px] mx-auto px-4 pt-6 md:pt-10 pb-12 overflow-x-hidden">
      <div className="flex flex-col items-center text-center mt-6 xl:mt-24">
        <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 mt-20 xl:mt-8 md:mt-14 md:px-12 py-8 md:py-10">
          <img
            src={w1}
            alt="Background Decorative Vector"
            className="hidden md:block absolute top-[-56px] left-[-100px] opacity-90 md:top-[-40px] md:left-[-120px] w-[455px] h-[250px] rotate-[-23deg]"
          />

          <div className="relative z-10">
            <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-normal text-[#0D542B]">
              Home &gt; Blogs
            </p>
            <h1 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
              {article?.topic || "Blog Topic"}
            </h1>
            <p className="mt-3 max-w-[739px] sm:max-w-[720px] mx-auto text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
              {article?.title}
            </p>
            {article?.date && (
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-bold mt-2 text-gray-600">
                Date Posted : {article.date}
              </p>
            )}
            <img
              src={w2}
              alt="Background Accent Vector"
              className="hidden lg:block absolute top-[10px] left-[1040px] w-[224px] h-[105px]"
            />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <section className="py-12 max-w-[920px] mx-auto px-4 sm:px-6 md:px-6 flex flex-col space-y-8 items-center justify-center">
          {/* FLOW 1: Render Markdown Split into Individual Styled Cards */}
          {markdownBlocks.length > 0 &&
            markdownBlocks.map((blockText, idx) => {
              const blockImg = getBlockImage(idx);

              return (
                <div
                  key={`md-block-${idx}`}
                  className={`w-full max-w-[880px] rounded-[35px] text-center md:rounded-[50px] p-6 md:p-10 shadow-lg border border-gray-100 transition-all ${
                    idx % 2 === 0 ? "bg-slate-50" : "bg-green-50"
                  }`}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={markdownComponents}
                  >
                    {blockText}
                  </ReactMarkdown>

                  {/* Renders image dynamically for Block 2 (idx 1) & Block 4 (idx 3) */}
                  {(idx === 1 || idx === 3) && blockImg && (
                    <img
                      src={blockImg}
                      alt={article.title || `Block ${idx + 1} Visual`}
                      className="mt-6 w-full max-h-[420px] object-cover rounded-2xl shadow-sm mx-auto"
                      loading="lazy"
                    />
                  )}
                </div>
              );
            })}

          {/* FLOW 2: Fallback for JSON Data Array (article.sections) */}
          {markdownBlocks.length === 0 &&
            article?.sections &&
            Array.isArray(article.sections) &&
            article.sections.map((sec, idx) => (
              <div
                key={`sec-block-${idx}`}
                className={`w-full max-w-[880px] rounded-[35px] md:rounded-[50px] p-6 md:p-10 shadow-lg border border-gray-100 ${
                  idx % 2 === 0 ? "bg-slate-50" : "bg-green-50/70"
                }`}
              >
                {sec.title && (
                  <h3 className="text-green-300 font-bold text-lg text-center md:text-xl mb-4">
                    {sec.title}
                  </h3>
                )}
                {(sec.image || sec.img || article.image) && (
                  <img
                    src={sec.image || sec.img || article.image}
                    alt={sec.title || `section-${idx}`}
                    className="w-full max-h-[420px] object-cover mb-4 rounded-2xl shadow-sm text-green-300"
                  />
                )}
                {sec.text && (
                  <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
                    {sec.text}
                  </p>
                )}
              </div>
            ))}

          {/* FLOW 3: Fallback for Single Excerpt/Summary */}
          {markdownBlocks.length === 0 &&
            !article?.sections &&
            (article?.excerpt || article?.summary) && (
              <div className="w-full max-w-[880px] rounded-[35px] md:rounded-[50px] bg-slate-50 p-6 md:p-10 shadow-lg border border-gray-100">
                <p className="text-[15px] md:text-[16px] text-[#333] leading-relaxed">
                  {article.excerpt || article.summary}
                </p>
              </div>
            )}
        </section>
      </div>
      </section>
    </>
  );
};

export default BlogsArticle;