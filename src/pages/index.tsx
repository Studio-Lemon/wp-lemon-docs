import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="hero__title">🍋 wp-lemon</h1>
          <p className="hero__subtitle">
            Build beautiful, lean WordPress websites quickly
          </p>
          <p className={styles.heroDescription}>
            Your go-to WordPress theme framework combining the power of Timber,
            ACF, and Bootstrap for creating modern, performant websites.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="docs/getting-started"
            >
              Get Started - 5min ⏱️
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="docs/requirements"
            >
              View Requirements
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  emoji: string;
  description: React.ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Block-Based Development",
    emoji: "🧱",
    description: (
      <>
        Create custom Gutenberg blocks with ease using our intuitive MVC
        architecture. Define block controllers, views, and styles in a clean,
        organized structure.
      </>
    ),
  },
  {
    title: "Powered by Modern Tools",
    emoji: "⚡",
    description: (
      <>
        Built on top of Timber for Twig templating, ACF for flexible content,
        Bootstrap for responsive design, and Bulldozer for optimized asset
        management.
      </>
    ),
  },
  {
    title: "Performance First",
    emoji: "🚀",
    description: (
      <>
        Optimized for speed and performance with lean code, efficient asset
        loading, and best practices baked in. Your sites will be fast by
        default.
      </>
    ),
  },
  {
    title: "Developer Friendly",
    emoji: "💻",
    description: (
      <>
        Clear MVC architecture, extensive documentation, and powerful CLI tools.
        Spend less time on boilerplate and more time building features.
      </>
    ),
  },
  {
    title: "Fully Customizable",
    emoji: "🎨",
    description: (
      <>
        Extend functionality with hooks and filters, customize templates with
        Twig, and configure your site through the WordPress Customizer API.
      </>
    ),
  },
  {
    title: "Modern Workflow",
    emoji: "🔧",
    description: (
      <>
        Uses Bedrock structure for better project organization, Composer for
        dependency management, and modern development practices.
      </>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className={styles.featureCard}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageBanner() {
  return (
    <div className={styles.announcementBanner}>
      <div className="container">
        <p>
          Current major version<strong> is wp-lemon 5.x</strong> is out! Check
          out the <Link to="docs/changelog">latest changes</Link> 🎊
        </p>
      </div>
    </div>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build beautiful, lean WordPress websites quickly with wp-lemon - a modern WordPress theme framework"
    >
      <HomepageBanner />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
