import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      "description":
      "In this Todos app, you can add, edit, mark complete, and delete items. To edit an item, double click on it. Press the enter key to resubmit your changes. This app will save(persist) your data in the browser's local storage. Whether you reload, close, or reopen it, you still have access to your todo items.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
      "This app was built by Onaje Oladuwa(Naj) with guidance from a tutorial by Ibas Majid. Naj is a current student at Lambda School. He began his coding journey in late 2020 after a successful career as a classroom teacher. Naj is open to work and you can reach him via:",
    },
  ]
    const contacts = () => {
     return(
     <>
      <a href="https://www.linkedin.com/in/ooladuwa/">LinkedIn</a>
      <a href="https://twitter.com/ooladuwa">Twitter</a>
      </>
     );
    }

  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;

  return (
    <div className="main--content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
