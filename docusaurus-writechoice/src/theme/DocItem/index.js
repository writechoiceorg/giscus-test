import React, { useEffect } from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import './style.css';

export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute('data-repo', "writechoiceorg/giscus-test");
    script.setAttribute('data-repo-id', "R_kgDOLyJwIg");
    script.setAttribute('data-category', "Q&A");
    script.setAttribute('data-category-id', "DIC_kwDOLyJwIs4Ce4Zp");
    script.setAttribute('data-mapping', "pathname");
    script.setAttribute('data-strict', "0");
    script.setAttribute('data-reactions-enabled', "1");
    script.setAttribute('data-emit-metadata', "0");
    script.setAttribute('data-input-position', "bottom");
    script.setAttribute('data-theme', "light_high_contrast");
    script.setAttribute('data-lang', "en");
    script.setAttribute('crossorigin', "anonymous");

    // Find the target container by class name
    const container = document.querySelector('.docItemCol_z5aJ');

    // Append the script to the target container, if it exists
    if (container) {
      container.appendChild(script);
    } else {
      console.error('The target container .docItemCol_z5aJ does not exist.');
    }

    // Clean up function to remove the script
    return () => {
      if (container) {
        container.removeChild(script);
      }
    }
  }, []);

  return (
    <>
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
    </>
  );
}
