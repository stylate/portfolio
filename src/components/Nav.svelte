<script>
    import { mobileCheck } from './core/Mobile.js'
    export let segment;
    function reset() {
        let toggle = document.getElementById("toggleDrop");
        let content = document.getElementById("toggleOpacity");
        toggle.style.display = 'none';
        content.style.opacity = 1.0;
    }

    function drop() {
        let toggle = document.getElementById("toggleDrop");
        let content = document.getElementById("toggleOpacity");
        var setting = toggle.style.display;
        if (setting == 'block') {
            reset();
        } else {
            toggle.style.display = 'block';
            content.style.opacity = 0.1;
        }
    }
</script>

<style src="../styles/Nav.scss">
</style>

<div class='sidebar'>
    <nav>
        <h1><a href="">alan nguyen</a></h1>    
        <button on:click={drop}>Menu</button>
    </nav>

    <div class='dropdown-content' id="toggleDrop">
        <ul on:click={reset}>
		    <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
            <li><a>photo</a>
                <ul>
                    <li><a rel=prefetch class='{segment === "fleeting-dream" ? "selected" : ""}' href='fleeting-dream'>fleeting dream</a></li>
                    <li><a rel=prefetch class='{segment === "anachronism" ? "selected" : ""}' href='anachronism'>anachronism</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
