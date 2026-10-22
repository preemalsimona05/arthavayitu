import './App.css'
import { Brand } from './components/Brand'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Brand />
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <button className="text-button" type="button">My documents</button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Kannada text digitization</p>
            <h1>Don&apos;t skip the <span>Kannada.</span><br />Understand it.</h1>
            <p className="hero-description">
              Turn Kannada text from books, notes, and signs into clear,
              searchable words—right in your browser.
            </p>
          </div>

          <div className="upload-card" aria-label="Upload a document">
            <div className="upload-icon" aria-hidden="true">↑</div>
            <h2>Bring your Kannada text to life</h2>
            <p>Upload an image to extract and understand its text.</p>
            <button className="primary-button" type="button">
              Choose an image
            </button>
            <span className="upload-note">JPG, PNG or WEBP · up to 10 MB</span>
          </div>
        </section>

        <section className="feature-strip" id="how-it-works">
          <article>
            <span className="feature-number">01</span>
            <div>
              <h3>Upload</h3>
              <p>Add a photo of Kannada text from your device.</p>
            </div>
          </article>
          <article>
            <span className="feature-number">02</span>
            <div>
              <h3>Read</h3>
              <p>Get clean, editable text from your image.</p>
            </div>
          </article>
          <article>
            <span className="feature-number">03</span>
            <div>
              <h3>Understand</h3>
              <p>Make meaning accessible when you need it.</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <span>Made for Kannada readers.</span>
        <span>Private by design · Your documents stay yours.</span>
      </footer>
    </div>
  )
}

export default App
