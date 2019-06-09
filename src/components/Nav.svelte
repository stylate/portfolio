<script>
    import { mobileCheck } from './core/Mobile.js'
    export let segment;
    let segments = [
        { id: 1, text: `home` },
        { id: 2, text: `about` },
        { id: 3, text: `fleeting dream` }
    ];

    function drop() {
        var toggle = document.getElementById("toggleDrop");
        var content = document.getElementById("toggleOpacity");
        var setting = toggle.style.display;
        if (setting == 'block') {
            toggle.style.display = 'none';
            content.style.opacity = 1.0;
        } else {
            toggle.style.display = 'block';
            content.style.opacity = 0.3;
        }
    }
</script>

<style src="../styles/Nav.scss">
</style>

<nav>
    <button on:click={drop}>Menu</button>
</nav>
        <div class='dropdown-content' id="toggleDrop">
            <ul>
		        <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		        <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
                <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
            </ul>
        </div>
