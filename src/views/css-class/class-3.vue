<template>
    <div class="page">
        <div id="nav-container">
            <div class="bg"></div>
            <div class="button" tabindex="0">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
            <div id="nav-content" tabindex="0">
                <ul>
                    <li><a href="#0">Home</a></li>
                    <li><a href="#0">Services</a></li>
                    <li><a href="#0">Blog</a></li>
                    <li><a href="#0">About</a></li>
                    <li><a href="#0">Contact</a></li>
                </ul>
            </div>
        </div>

        <main>
            <div class="content">
                <h2>Off-screen navigation using <span>:focus-within</span></h2>
                <p>Adding yet another pure CSS technique to the list of off-screen navigation by "hacking" the
                    :focus-within pseudo-class. Have a look at the code to see how it works.</p>
                <small><strong>NB!</strong> Use a browser that supports :focus-within</small>
            </div>
        </main>
    </div>
</template>

<style scoped>
.page {
    width: 100%;
    background: #fdfdfd;
    font-weight: 600;
    letter-spacing: .03em;
    color: #212121;
}

#nav-container {
    width: 100%;
    pointer-events: none;
}

#nav-container .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    background: #000;
}

#nav-container:focus-within .bg {
    visibility: visible;
    opacity: .6;
}

#nav-container * {
    visibility: visible;
}

.button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    border: 0;
    background: transparent;
    border-radius: 0;
    height: 70px;
    width: 30px;
    cursor: pointer;
    pointer-events: auto;
    margin-left: 25px;
}

.icon-bar {
    display: block;
    width: 100%;
    height: 3px;
    background: #aaa;
    transition: .3s;
}

.icon-bar+.icon-bar {
    margin-top: 5px;
}

#nav-container:focus-within .button {
    /* 忽略鼠标操作 让浏览器在处理鼠标操作时 忽略掉这个元素的存在 */
    pointer-events: none;
}

#nav-container:focus-within .icon-bar:nth-of-type(1) {
    transform: translate3d(0, 8px, 0) rotate(45deg);
}

#nav-container:focus-within .icon-bar:nth-of-type(2) {
    opacity: 0;
}

#nav-container:focus-within .icon-bar:nth-of-type(3) {
    transform: translate3d(0, -8px, 0) rotate(-45deg);
}

#nav-content {
    padding: 20px;
    width: 90%;
    max-width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #ececec;
    pointer-events: auto;
    transform: translateX(-100%);
    transition: transform .3s;
    will-change: transform;
}

#nav-content ul {
    height: 100%;
    display: flex;
    flex-direction: column;
}

#nav-content li a {
    padding: 10px 5px;
    display: block;
    text-transform: uppercase;
    transition: color .1s;
}

#nav-content li a:hover {
    color: #BF7497;
}


#nav-container:focus-within #nav-content {
    transform: none;
}



main {
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
}


main h2 span {
    color: #BF7497;
}

main p {
    line-height: 1.5;
    font-weight: 200;
    margin: 20px 0;
}

main small {
    font-weight: 300;
    color: #888;
}
</style>