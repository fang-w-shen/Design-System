```html
<header class="top-bar-container">
    <div class="grid-container">
        <div class="top-bar">
            <div class="title-bar" id="menuBar" data-hide-for="medium" data-toggler=".expanded">
                <a href="#" data-toggle="responsive-menu menuBar">
                	<span class="icon-menu-right"></span>
                	<span class="icon-close"></span>
                </a>
            </div>
            <div class="top-bar-left">
                <a class="logo-link" href="/">
                	<span class="icon-ascensiontech-logo branding--logo"></span>
                </a>
                <span>Web App Design System</span>
            </div>
            <div class="top-bar-right" id="responsive-menu" data-toggler=".expanded">
                <ul class="menu" >
                    <li {{#ifpage 'index'}}class="is-active" {{/ifpage}}>
						<a href="#">
							<span class="icon-dashboard"></span>One
						</a>
                    </li>
                    <li>
                        <a href="#">
                        	<span class="icon-dashboard"></span>Two
                        </a>
                    </li>
                    <li>
                        <ul class="dropdown menu" data-dropdown-menu data-disable-hover="true" data-click-open="true">
                            <li>
                                <a href="#">
                                	<span class="icon-human"></span>
                                	Resources
                                	<span class="icon-arrow-down"></span>
                                </a>
                                <ul class="menu">
                                    <li>
                                        <a href="#">schema Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Foudation Docs</a>
                                    </li>
                                    <li>
                                        <a href="#">Foudation Support</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                        	<span class="icon-dashboard"></span>Three
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        	<span class="icon-dashboard"></span>Four
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

```