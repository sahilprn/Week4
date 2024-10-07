function App() {
    return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Card title="Card Title 1" content="This is the content of the first card." />
          <Card title="Card Title 2" content="This is the content of the second card." />
          <Button label="Click Me" onClick={() => alert('Button clicked!')} />
        </div>
        <Footer />
      </div>
    );
  }

  <div className="content">
  <Card title="Card Title 1" content="This is the content of the first card." />
  <Card title="Card Title 2" content="This is the content of the second card." />
  <Card title="Card Title 3" content="This is the content of the third card." />  {/* New card */}
  <Button label="Click Me" onClick={handleClick} />
</div>