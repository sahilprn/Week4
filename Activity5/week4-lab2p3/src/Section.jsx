function Section({ heading, content }) {
    return (
      <section>
        <h2>{heading}</h2>
        <p>{content}</p>
      </section>
    );
  }
  
  export default Section;