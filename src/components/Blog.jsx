import NavigationBar from "../shared/NavigationBar";

const Blog = () => {
  return (
    <>
      <div className="bg-secondary">
        <NavigationBar />
      </div>
      <div id="blog-content" className="container mx-auto">
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="text-Shade1">Access tokens are credentials issued to client applications after authentication to access protected resources. They are short-lived and stored securely on the client-side, typically in memory or local storage. Refresh tokens are long-lived credentials used to obtain new access tokens when the current one expires. They should be stored more securely, such as in HTTP-only cookies or encrypted storage, to mitigate risks.</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">Compare SQL and NoSQL databases? </h2>
            <p className="text-Shade1">
            SQL databases use a structured, tabular data model with predefined schemas, while NoSQL databases offer flexible data models. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases use SQL for querying, while NoSQL databases have their own query languages. SQL databases have rigid schemas, while NoSQL databases have schema flexibility. SQL databases are suited for structured data and complex relationships, while NoSQL databases excel in handling unstructured or rapidly changing data.




</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">What is express js? What is Nest JS?</h2>
            <p className="text-Shade1">Express.js is a lightweight web application framework for Node.js, known for its simplicity and flexibility. It allows developers to handle routes, requests, and responses easily.

NestJS is a TypeScript-based web application framework built on top of Express.js. It provides a structured and modular approach for building scalable and maintainable server-side applications. It emphasizes code reusability and testability.</p>
          </div>
          <div className="p-5 mb-8 rounded-lg shadow-md">
            <h2 className="mb-4 text-3xl text-Shade font-semibold">What is MongoDB aggregate and how does it work?</h2>
            <p className="text-Shade1">MongoDB's aggregate is a feature that allows for advanced data processing and analysis. It works by applying stages of operations to transform and aggregate data. Each stage performs a specific task, and the output feeds into the next stage. The aggregation pipeline enables complex queries, data manipulations, and analytics in a single query. It is useful for generating reports, performing analysis, and extracting insights from MongoDB collections.</p>
          </div>
          
        </div>
    </>
  );
};

export default Blog;
