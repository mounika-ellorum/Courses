<template>
    <li>
        
            <header>
                <h3>{{title}}</h3>
                <button>Delete</button>
            </header>
        
        <p>{{description}}</p>
        <nav>
            <a :href="link">view resource</a>
        </nav>
    </li>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        link: String
    }
}
</script>