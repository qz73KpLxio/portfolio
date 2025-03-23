import { siteMetadata } from "@/data/siteMetadata";

export function Footer() {
  return (
    <footer className="flex justify-center align-center pt-10 pb-5 h-20px">
      <p className="text-gray-500  dark:text-gray-400 text-sm">
        © {new Date().getFullYear()}&nbsp;
        <a
          href={siteMetadata.social.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Samuel Dervishi.
        </a>
      </p>
    </footer>
  );
}
