import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Package, Star, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import '../Componenets Css/AssetSpotlight.css';

const ASSET_STORE_URL = 'https://assetstore.unity.com/packages/slug/scene-optimizer-pro-384146';

const images = [
  { src: './images/SO_Cover.png', alt: 'Scene Optimizer Pro — main dashboard overview' },
  { src: './images/SO_1.jpg', alt: 'Scene Optimizer Pro — main dashboard overview' },
  { src: './images/SO_2.jpg', alt: 'Scene Optimizer Pro — texture breakdown panel' },
  { src: './images/SO_3.jpg', alt: 'Scene Optimizer Pro — model analysis view' },
  { src: './images/SO_4.jpg', alt: 'Scene Optimizer Pro — issue reporter' },
  { src: './images/SO_5.jpg', alt: 'Scene Optimizer Pro — compression workflow' },
  { src: './images/SO_6.jpg', alt: 'Scene Optimizer Pro — batch optimize results' },
  { src: './images/SO_7.jpg', alt: 'Scene Optimizer Pro — revert system' },
  { src: './images/SO_8.jpg', alt: 'Scene Optimizer Pro — settings panel' },
];

const highlights = [
  { icon: Zap,     text: 'One-click texture & mesh compression with live build-size preview' },
  { icon: Shield,  text: 'Non-destructive workflow — full revert at any point' },
  { icon: Package, text: 'Modular breakdown by asset type: Normal Maps, Lightmaps, UI, Textures' },
  { icon: Star,    text: 'Custom high-performance editor UI built entirely in Unity Editor scripting' },
];

export default function AssetSpotlight() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIdx(i => (i === images.length - 1 ? 0 : i + 1));

  // Show max 4 thumbnails in the strip, always keep active visible
  const thumbs = images;

  return (
    <section className="spotlight-section" id="asset-spotlight">
      <div className="sp-orb sp-orb-a" aria-hidden />
      <div className="sp-orb sp-orb-b" aria-hidden />

      <div className="sp-inner">

        {/* Eyebrow */}
        <div className="sp-eyebrow-row">
          <span className="section-eyebrow">Published Work</span>
          <span className="sp-live-badge">
            <span className="sp-live-dot" />
            Live on Unity Asset Store
          </span>
        </div>

        <div className="sp-layout">

          {/* LEFT — text */}
          <motion.div
            className="sp-content"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="sp-title">
              Scene Optimizer <span className="grad-text">Pro</span>
            </h2>
            <p className="sp-subtitle">Unity Editor Extension · Published & Maintained</p>

            <p className="sp-desc">
              A comprehensive Unity Editor tool I built, published, and actively maintain on the
              Unity Asset Store. It gives developers a real-time dashboard to audit scene memory
              usage — textures, meshes, UI assets — and execute batch optimizations without ever
              leaving the editor. Born out of real production pain on mobile projects where build
              size and runtime performance directly impact store rankings.
            </p>

            <ul className="sp-highlights">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="sp-highlight-item">
                  <span className="sp-highlight-icon">
                    <Icon size={14} strokeWidth={2} />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="sp-ctas">
              <a
                href={ASSET_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn-primary"
              >
                <Package size={15} />
                View on Asset Store
                <ExternalLink size={12} style={{ opacity: 0.7 }} />
              </a>
              <div className="sp-meta-tags">
                <span className="sp-meta-tag">Unity Editor Scripting</span>
                <span className="sp-meta-tag">C#</span>
                <span className="sp-meta-tag">Mobile / iOS / Android</span>
                <span className="sp-meta-tag">DevOps</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — image gallery */}
          <motion.div
            className="sp-image-side"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Main image with prev/next */}
            <div className="sp-img-frame">
              <div className="sp-corner sp-corner-tl" aria-hidden />
              <div className="sp-corner sp-corner-br" aria-hidden />

              {/* Animated image swap */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={images[activeIdx].src}
                  alt={images[activeIdx].alt}
                  className="sp-img-main"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                className="sp-arrow sp-arrow-l"
                onClick={prev}
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="sp-arrow sp-arrow-r"
                onClick={next}
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              {/* Image counter */}
              <div className="sp-img-counter">
                {activeIdx + 1} / {images.length}
              </div>

              {/* Floating stat badges */}
              <div className="sp-badge sp-badge-tl">
                <span className="sp-badge-val">20+</span>
                <span className="sp-badge-lbl">Asset Types<br />Analyzed</span>
              </div>
              <div className="sp-badge sp-badge-br">
                <span className="sp-badge-val">∞</span>
                <span className="sp-badge-lbl">Non-Destructive<br />Reverts</span>
              </div>
            </div>

            {/* Thumbnail strip — click to jump to image */}
            <div className="sp-img-strip">
              {thumbs.map((img, i) => (
                <button
                  key={i}
                  className={`sp-img-thumb ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`View screenshot ${i + 1}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}