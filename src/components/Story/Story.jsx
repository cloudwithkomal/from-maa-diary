import React from "react";
import "./Story.scss";

function Story() {
  return (
    <section className="story">
      <blockquote className="quote">
        "A mother’s recipe isn’t just about ingredients—it’s a memory, a lesson, and a love letter written in flavors." 
      </blockquote>
      <p>
        The country I grew up in expected mothers to teach their daughters how to cook and manage a household from a young age. But my mom was different. She valued education and financial independence above all else.  
      </p>
      <p>
        She taught me to cook not to meet societal expectations, but simply so I wouldn’t starve if no one was around. She never formally taught me recipes—her only lesson was, 
        <strong> "Listen to your heart, and it will guide you."</strong>
      </p>
      <p>
        When I started cooking in college, I would call her to ask what to do next. I always thought I’d learn from her once I finished my studies, but life had other plans. By the time I graduated, she was too unwell to teach me.  
      </p>
      <p>
        When I cooked again, I relied on my heart, the memories of how she made things, and the tastes I grew up with. Then, I found her diary—filled with recipes she had learned and written down. It was like hearing her voice again, guiding me through each step.  
      </p>
      <p>
        Now, I want to honor her in the best way I know—by creating this website and sharing her recipes with the world, keeping her love and lessons alive.
        </p>
        <p className="signature">— With Love, From Heavens Above</p>

    </section>
  );
}

export default Story;
