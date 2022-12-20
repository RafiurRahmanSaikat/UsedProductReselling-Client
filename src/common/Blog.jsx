import React from "react";

const Blog = () => {
  return (
    <>
      <section className="  text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            My Blogs
          </h2>
          <div className="grid gap-10 bg-white  md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                What are the different ways to manage a state in a React
                application?
              </h3>
              <p className="m-2 text-start text-gray-600">
                The Four Kinds of React State to Manage When we talk about state
                in our applications, it’s important to be clear about what types
                of state actually matter. There are four main types of state you
                need to properly manage in your React .
                <br />
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                How does prototypical inheritance work?
              </h3>
              <p className="mt-1 text-start text-gray-600">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is a unit test in react ? </h3>
              <p className="mt-1 text-start text-gray-600">
                Unit Testing is a testing method that tests an individual unit
                of software in isolation.
              </p>
              <h3 className="font-semibold">
                {" "}
                Why should we write unit tests?
              </h3>
              <p className="m-2 text-start text-gray-600">
                For Test-Driven Development (TDD), you write unit tests before
                writing any implementation. This makes your implementation
                details in your code shorter and easier to understand. In this
                instance, the best time to write unit tests is immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Vue vs React vs Angular </h3>
              <p className="m-2 text-start text-gray-600">
                <strong> Angular </strong> is the most mature of the frameworks,
                has good backing in terms of contributors and is a complete
                package.However, the learning curve is steep and concepts of
                development in Angular may put off new developers. Angular is a
                good choice for companies with large teams and developers who
                already use TypeScript.
              </p>
              <p className="m-2 text-start text-gray-600">
                <strong> React </strong> is just old enough to be mature and has
                a huge number of contributions from the community. It has gained
                widespread acceptance. The job market for React is really good,
                and the future for this framework looks bright. React looks like
                a good choice for someone getting started with front-end
                JavaScript frameworks, startups, and developers who like some
                flexibility. The ability to integrate with other frameworks
                seamlessly gives it a great advantage for those who would like
                some flexibility in their code.
              </p>

              <p className="m-2 text-start text-gray-600">
                <strong>Vue </strong> is newest to the arena, without the
                backing of a major company. However, it has done really well in
                the last few years to come out as a strong competitor for
                Angular and React, and especially so with the release of Vue
                3.0. This is perhaps playing a role with a lot of Chinese giants
                like Alibaba and Baidu picking Vue as their primary front-end
                JavaScript framework
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Blog;
