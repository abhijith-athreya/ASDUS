/**
 * This file contains styles related to the user settings of the theme
 */

/* Custom CSS */
body {
	font-size: 16px;
	color: rgba(0,0,0,.87);
	line-height: 1.5;
}
h1, h2, h3, h4, h5, h6, .heading {
	font-weight: 500!important;
	letter-spacing: 0;
}
h1 {
	font-size: 40px;
	line-height: 1.3;
}
pre code {
	font-size: 12px;
}
.inside .home-link .site-description {
	display: none!important;
}
.inside .header-shrink .site-description {
        display: none!important;
}

li.cat-item a[href="//blog.algorithmia.com/category/blog/"] {
	display: none;
}

.tagcloud {
	zoom:.8
}
.hentry .entry-title {
	font-size: 32px;
	letter-spacing: normal;
	font-weight: 500;
}

.hentry .entry-date {
	text-transform: uppercase;
	font-weight: normal;
}

.wp-caption {
	max-width: 100%;
}
.more-link:before {
	content: ' ';
	display: block;
    margin-top: 30px;
}
.more-link {
    text-transform: uppercase;
    font-weight: 500;
}
.blog .hentry, .search .hentry, .archive .hentry {
	border-width: 1px;
	border-color: rgba(0,0,0,.12);
}
h2 {
	font-size: 24px;
}
.site-content {
	max-width: 667px;
}
.site-header {
	height: 60px!important;
	padding: 0;
	padding-top: 4px;
	border-bottom: 1px solid rgba(0,0,0,.12);
	background-color: #FFF;
}
/*.entry-content p:not(:first-child) {
	display: none;
}*/
.header-shrink {
	height: 60px;
}
.header-shrink .site-description {
	display: block!important;
}
.home-link {
	margin-top: 12px;
}
.home-link img {
	width: 200px;
}
.btn-signup {
	color: rgba(0,0,0,.87);
	background-color: #00FFBE;
}

a:hover { 
  text-decoration: underline;
}
.entry-title a {
	color: #5000BE!important;
}
.author span [itemprop="name"] {
  font-size: 0.9em;
  Xword-break: break-all;
}
#mobile-nav {
	top: -35px;
}

#mobile-primary-menu {
	background-color: #FFF;
	padding: 16px;
	border-bottom: 1px solid rgba(0,0,0,.12);
}
#primary-menu {
	border: none;
	margin: 15px 0 0 0!important;
}
#site-navigation #primary-menu a {
	display: inline;
	border: none;
	text-decoration: none!important;
	color: rgba(0,0,0,.54);
	font-weight: 500;
}
#site-navigation #primary-menu a:hover {
	color: #5000BE;
}
.site-footer {
	background-color: #E0E0E0;
	color: rgba(0,0,0,.87);
}
.site-footer .icon {
	display: none;
}
.widget_search .widget-title {
	font-size: 14px;
	margin-bottom: 4px;
}
.service-content .widget-title {
	margin-bottom: 0;
	color: rgba(0,0,0,.87);
}
.subtle-cta {
	padding: 16px;
	opacity: .3;
	transition: .3s;
}
.subtle-cta:hover {
	opacity: 1;
	transition: .3s;
	background-color: #FAFAFA;
}
.subtle-cta h3 {
	font-weight: 500;
}
.subtle-cta .text-secondary {
	color: rgba(0,0,0,.54);
	margin-bottom: 32px;
	font-size: 14px;
}
.btn-primary {
	padding: 8px 16px;
	background-color: #00FFBE;
        border-radius: 2px;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none!important;
	color: rgba(0,0,0,.87);
	transition: .3s;
}
.btn-primary:hover {
	background-color: #8EFFF1;
	transition: .3s;
}
.btn-nav a {
	color: rgba(0,0,0,.87)!important;
	padding: 8px 16px!important;
	background-color: #00FFBE;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none!important;
	color: rgba(0,0,0,.87);
}
.btn-nav a:hover {
	color: rgba(0,0,0,.87)!important;
	background-color: #8EFFF1;
}
.paging-navigation .page-numbers {
	background-color: #E0E0E0;
	color: rgba(0,0,0,.38);
	margin-bottom: 4px;
}
.paging-navigation .page-numbers:hover {
	background-color: #E0E0E0;
	color: rgba(0,0,0,.87);
}
.paging-navigation .current {
	color: #FFF!important;
	background: #5000BE!important;
}
#searchform {
	font-size: 14px;
}
input[type="text"]:focus {
	border-color: #5000BE;
}
#dd_ajax_float {
	margin-top: 60px;
	border: none!important;
	box-shadow: none!important;
}

/* Custom Styles Output */
body{ background-color: #ffffff; }
body{ font-family: 'Rubik'; }

h1, h2, h3, h4, h5, h6, .heading, .intro-text { font-family: 'Rubik'; font-weight: normal; }
a, .ui-tabs-nav .ui-state-active a, .accent-color{ color: #5000be; }

button, .button, input[type='submit'], .comment-reply-link, .stag-button--green, .page-numbers, .nav-links a, .stag-toggle .ui-state-active, .paging-navigation .nav-links a {background: #5000be;}
.ui-tabs-nav .ui-state-active { border-color: #5000be; }.stag-toggle span.ui-icon:before { color: #5000be; }.cycle-pager-active{ background: #5000be !important; }

.the-blog-cover { background-image: url(); }

/* Custom Post Background Colors and Images */
