<template>
    
    <main class="container">

        <div class="row g-5">

            <div class="col-md-8">

                <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

                <article class="blog-post">
                    <h2 class="display-5 link-body-emphasis mb-1">Sample blog post</h2>
                    <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
                    <p>This blog post shows a few different types of content that`s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                    <hr>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h2>Blockquotes</h2>
                    <p>This is an example blockquote in action:</p>
                    <blockquote class="blockquote"><p>Quoted text goes here.</p></blockquote>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h3>Example lists</h3>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
                    <ul>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ul>
                    <p>And this is an ordered list:</p>
                    <ol>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ol>
                    <p>And this is a definition list:</p>
                    <dl>
                        <dt>HyperText Markup Language (HTML)</dt>
                        <dd>The language used to describe and define the content of a Web page</dd>
                        <dt>Cascading Style Sheets (CSS)</dt>
                        <dd>Used to describe the appearance of Web content</dd>
                        <dt>JavaScript (JS)</dt>
                        <dd>The programming language used to build advanced Web sites and applications</dd>
                    </dl>
                    <h2>
                        Inline HTML elements
                    </h2>
                    <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                    <ul>
                        <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                        <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                        <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                        <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                        <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                        <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
                    </ul>
                    <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                    <h2>Heading</h2>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <h3>Sub-heading</h3>
                    <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                    <pre><code>Example code block</code></pre>
                    <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                </article>

            </div>




            <div class="col-md-4">
                <div class="position-sticky" style="top: 2rem;">
                    <div >
                        <aside class="bd-aside sticky-xl-top text-body-primary align-self-start mb-2 mb-xl-5 px-2">
                            <h4 class="h4 pt-3 pb-3 mb-4 border-bottom fst-italic">On this page</h4>
                            <nav class="small" id="toc">
                                <ul class="list-unstyled">
                                <li class="my-2">
                                    <button type="button" class="btn d-inline-flex align-items-center border-0 collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
                                    <ul class="list-unstyled ps-3 collapse" id="contents-collapse" style="">
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#typography">Typography</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#images">Images</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#tables">Tables</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#figures">Figures</a></li>
                                    </ul>
                                </li>
                                <li class="my-2">
                                    <button type="button" class="btn d-inline-flex align-items-center border-0 collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
                                    <ul class="list-unstyled ps-3 collapse" id="forms-collapse" style="">
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#overview">Overview</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#disabled-forms">Disabled forms</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#sizing">Sizing</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#input-group">Input group</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#floating-labels">Floating labels</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#validation">Validation</a></li>
                                    </ul>
                                </li>
                                <li class="my-2">
                                    <button type="button" class="btn d-inline-flex align-items-center border-0 collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse">Components</button>
                                    <ul class="list-unstyled ps-3 collapse" id="components-collapse" style="">
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#accordion">Accordion</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#alerts">Alerts</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#badge">Badge</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#breadcrumb">Breadcrumb</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#buttons">Buttons</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#button-group">Button group</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#card">Card</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#carousel">Carousel</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#dropdowns">Dropdowns</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#list-group">List group</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#modal">Modal</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#navs">Navs</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#navbar">Navbar</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#pagination">Pagination</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#popovers">Popovers</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#progress">Progress</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#scrollspy">Scrollspy</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#spinners">Spinners</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#toasts">Toasts</a></li>
                                    <li><a class="d-inline-flex align-items-center rounded text-decoration-none" href="#tooltips">Tooltips</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </nav>
                            </aside>
                    </div>
                    <div>
                        <h4 class="fst-italic">
                            Recent posts
                        </h4>
                        <ul class="list-unstyled">
                            <li>
                                <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                                    <div class="col-lg-8">
                                        <h6 class="mb-0">
                                            Example blog post title
                                        </h6>
                                        <small class="text-body-secondary">
                                            January 15, 2024
                                        </small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                                    <div class="col-lg-8">
                                        <h6 class="mb-0">
                                            This is another blog post title
                                        </h6>
                                        <small class="text-body-secondary">
                                            January 14, 2024
                                        </small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                    <svg class="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                                    <div class="col-lg-8">
                                        <h6 class="mb-0">
                                            Longer blog post title: This one has multiple lines!
                                        </h6>
                                        <small class="text-body-secondary">
                                            January 13, 2024
                                        </small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4">
                        <h4 class="fst-italic">
                            Archives
                        </h4>
                        <ol class="list-unstyled mb-0">
                            <li>
                                <a href="#">
                                    March 2021
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    February 2021
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    January 2021
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    December 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    November 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    October 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    September 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    August 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    July 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    June 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    May 2020
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    April 2020
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div class="p-4">
                        <h4 class="fst-italic">
                            Elsewhere
                        </h4>
                        <ol class="list-unstyled">
                            <li>
                                <a href="#">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Facebook
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>


        </div>
        
    </main>
    
    <FooterPage />
</template>

<script>
import FooterPage from "@/components/Footer.vue";
export default {
    name: 'Course',
    components: { FooterPage }
}
</script>