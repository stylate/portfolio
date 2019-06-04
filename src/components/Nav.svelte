<script>
    export let segment;
    
    let segments = [
        { id: 1, text: `home` },
        { id: 2, text: `about` },
        { id: 3, text: `fleeting dream` }
    ];
</script>

<style src="../styles/Nav.scss">
</style>

<nav>
    <div class='dropdown-content'>
        <ul>
		    <li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		    <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
            <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
        </ul>
    </div>
</nav>
