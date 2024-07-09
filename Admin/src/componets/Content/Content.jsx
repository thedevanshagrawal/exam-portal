// src/Content.js
import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <main>
      <section className="topSection">
        <div className="leftSection">
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3doaWtkcGZ2eXM5N3FsbDlnOW1wY2R6Zng0MzF3aHZuOXF0NTMyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1J9LA7uGSENdz3KU/giphy.gif" alt="" />
        </div>

        <div className="rightSection">
          <h1>Welcome to Your Ultimate Exam Portal !</h1>
          <p>
            Start your journey to success with our comprehensive exam platform!
            Streamline your exam preparations with our easy-to-use dashboard,
            where you can access your exam schedules, review past results, and
            stay on top of your academic progress. Our portal is designed to
            make your exam experience smooth and efficient.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Content;
