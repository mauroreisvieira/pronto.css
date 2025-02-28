import { type ReactElement } from "react";

function Typography({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"article">): ReactElement {
  return <article {...props}>{children}</article>;
}

export default {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered"
  }
};

export const Base = {
  args: {
    children: (
      <p>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging
        on his throne. One day, his advisors came to him with a problem: the kingdom was running out
        of money.
      </p>
    )
  }
};

export const Headings = {
  args: {
    children: (
      <>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </>
    )
  }
};

export const Article = {
  args: {
    children: (
      <>
        <h2>The Uncharted Realms of Knowledge</h2>

        <p>
          Throughout history, humanity has sought to understand the <em>unknown</em>. From ancient
          philosophers pondering existence to modern scientists exploring the universe, the pursuit
          of knowledge is a defining trait of our species.
        </p>

        <blockquote>
          <p>
            The only true wisdom is in knowing you know nothing.
            <cite>— Socrates</cite>
          </p>
        </blockquote>

        <p>
          This relentless curiosity has given rise to disciplines such as{" "}
          <dfn title="The study of fundamental questions about existence, knowledge, and ethics.">
            philosophy
          </dfn>{" "}
          and
          <dfn title="The systematic study of the structure and behavior of the physical and natural world.">
            science
          </dfn>
          .
        </p>

        <p>
          Consider the vastness of space. Astronomers estimate the universe is{" "}
          <mark>13.8 billion years</mark> old, and yet we have barely scratched the surface of its
          mysteries.
        </p>

        <p>
          Scientific notation often involves superscripts and subscripts, such as the equation for
          Einstein's famous theory: E = mc<sup>2</sup>. Similarly, chemical compounds use
          subscripts, like H<sub>2</sub>O for water.
        </p>

        <p>
          Technology has made acquiring knowledge easier than ever. If you want to search for
          information, simply press <kbd>Ctrl</kbd> + <kbd>F</kbd> on your keyboard and start
          typing.
        </p>

        <h2>Key Concepts</h2>

        <dl>
          <dt>Epistemology</dt>
          <dd>The branch of philosophy concerned with the nature and scope of knowledge.</dd>

          <dt>Cosmology</dt>
          <dd>The study of the origin, evolution, and fate of the universe.</dd>

          <dt>Metaphysics</dt>
          <dd>
            A branch of philosophy that explores fundamental concepts such as being, existence, and
            reality.
          </dd>
        </dl>

        <h2>Fields of Exploration</h2>

        <p>Knowledge spans across various domains, including:</p>

        <ul>
          <li>
            <p>
              <strong>For example, here's another nested list.</strong>
            </p>
            <p>But this time with a second paragraph.</p>
            <ul>
              <li>
                These list items won't have <code>&lt;p&gt;</code> tags
              </li>
              <li>Because they are only one line each</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>But in this second top-level list item, they will.</strong>
            </p>
            <p>This is especially annoying because of the spacing on this paragraph.</p>
            <ul>
              <li>
                <p>
                  As you can see here, because I've added a second line, this list item now has a{" "}
                  <code>&lt;p&gt;</code> tag.
                </p>
                <p>This is the second line I'm talking about by the way.</p>
              </li>
              <li>
                <p>Finally here's another list item so it's more like a list.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>A closing list item, but with no nested list, because why not?</p>
          </li>
        </ul>

        <p>
          However, structured knowledge requires careful categorization. For example, the scientific
          method follows a strict process:
        </p>

        <ol>
          <li>Observation</li>
          <li>Hypothesis</li>
          <li>Experimentation</li>
          <li>Analysis</li>
          <li>Conclusion</li>
        </ol>

        <table>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Origin</th>
              <th>Finisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bret "The Hitman" Hart</td>
              <td>Calgary, AB</td>
              <td>Sharpshooter</td>
            </tr>
            <tr>
              <td>Stone Cold Steve Austin</td>
              <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
            </tr>
            <tr>
              <td>Randy Savage</td>
              <td>Sarasota, FL</td>
              <td>Elbow Drop</td>
            </tr>
            <tr>
              <td>Vader</td>
              <td>Boulder, CO</td>
              <td>Vader Bomb</td>
            </tr>
            <tr>
              <td>Razor Ramon</td>
              <td>Chuluota, FL</td>
              <td>Razor's Edge</td>
            </tr>
          </tbody>
        </table>

        <p>
          If you're intrigued, explore more on this topic by visiting{" "}
          <a href="https://example.com/explore">
            <strong>The Knowledge Database</strong>
          </a>
          .
        </p>

        <p>
          Got thoughts? <a href="https://example.com/discussion">Join the conversation →</a>
        </p>
      </>
    )
  }
};
