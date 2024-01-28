import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="py-10 xl:py-16 px-4">
      <Helmet>
        <title>Tomatino | Blogs</title>
      </Helmet>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-toga text-center">
        Blogs
      </h2>
      <div className="py-4 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            1. What is one way data binding ?
          </h3>
          <p className="hyphens-auto md:text-lg lg:text-xl">
            <span className="font-semibold">Ans:</span> Data binding is a way to
            synchronise the data between the model and view components
            automatically.One-way data binding is a concept in web development
            that allows data to flow in one direction from the model to the
            view. In other words, when the data in the model changes, the view
            is updated automatically. However, if the data in the view changes,
            it does not affect the model. This is useful when you want to
            display data in a read-only format or when you want to avoid
            unnecessary updates to the model. One-way data binding is used in
            many web frameworks.React is one of them.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            1. What is NPM in node.js ?
          </h3>
          <p className="hyphens-auto md:text-lg lg:text-xl">
            <span className="font-semibold">Ans:</span>
            npm (Node Package Manager) is the default package manager for
            Node.js, which is a JavaScript runtime built on the Chrome V8
            JavaScript engine. npm is used for managing and distributing Node.js
            modules, which are essentially libraries or packages of reusable
            code.npm helps us to install, share, and manage dependencies for our
            Node.js projects. It allows us to easily install packages
            (libraries) that others have created, and it also helps manage your
            project dependencies.npm is primarily used through the command
            line.npm has a public registry that hosts a vast collection of
            Node.js packages. You can find and install packages from this
            registry, and you can also publish your own packages to share with
            the community.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            1. What are the difference between MongoDB database and mySQL
            database ?
          </h3>
          <div>
            <p className="hyphens-auto md:text-lg lg:text-xl">
              <span className="font-semibold">Ans:</span> MongoDB and MySQL are
              both popular database management systems, but they belong to
              different categories of databases and have distinct
              characteristics. Here are some key differences between MongoDB and
              MySQL:
            </p>
            <table className="table-auto border-collapse border border-slate-500 mt-4">
              <thead>
                <tr>
                  <th className="border border-slate-600 p-3">Subject</th>
                  <th className="border border-slate-600 p-3">MongoDB</th>
                  <th className="border border-slate-600 p-3">mySQL</th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-md md:text-lg">
                <tr>
                  <td className="border border-slate-700 p-2">Type</td>
                  <td className="border border-slate-700 p-2">
                    MongoDB is a NoSQL database, specifically a
                    document-oriented database. It stores data in flexible,
                    JSON-like BSON (Binary JSON) documents. It is designed to be
                    schema-less, allowing for dynamic and flexible data
                    structures.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MongoDB is a NoSQL database, specifically a
                    document-oriented database. It stores data in flexible,
                    JSON-like BSON (Binary JSON) documents. It is designed to be
                    schema-less, allowing for dynamic and flexible data
                    structures.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2">Data Schema</td>
                  <td className="border border-slate-700 p-2">
                    MongoDB is schema-free, allowing documents in the same
                    collection to have different fields. This flexibility is
                    well-suited for evolving or rapidly changing data.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MySQL requires a predefined schema with a fixed structure.
                    Changes to the schema may require altering the table, and it
                    follows the principles of normalization.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2">
                    Query Language
                  </td>
                  <td className="border border-slate-700 p-2">
                    MongoDB uses a query language that is specific to its
                    document model. It supports rich queries and indexing.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MySQL uses SQL (Structured Query Language), which is a
                    standard language for relational databases. SQL is powerful
                    and widely used across various database systems.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2">Scaling</td>
                  <td className="border border-slate-700 p-2">
                    MongoDB is designed to scale horizontally, making it easier
                    to handle large amounts of data by distributing it across
                    multiple servers.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MySQL traditionally scales vertically by adding more
                    resources (CPU, RAM) to a single server. However,
                    technologies like replication and sharding can be used for
                    horizontal scaling as well.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2">Transactions</td>
                  <td className="border border-slate-700 p-2">
                    MongoDB supports atomic operations within a single document.
                    It does not support multi-document transactions across
                    multiple collections or databases in versions prior to
                    MongoDB 4.0.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MySQL supports ACID-compliant transactions, ensuring that
                    database transactions are reliable even in the case of
                    failures.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 p-2">Use Cases</td>
                  <td className="border border-slate-700 p-2">
                    MongoDB is often chosen for projects with dynamic, evolving
                    schemas, large-scale applications with high write loads, and
                    scenarios where flexibility in data modeling is crucial.
                  </td>
                  <td className="border border-slate-700 p-2">
                    MySQL is a good fit for applications that have a
                    well-defined schema, require ACID compliance, and involve
                    complex queries or reporting.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
