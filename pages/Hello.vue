<template>
    <section class="bg-[url('~/assets/images/banner.webp')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply" id="home">
        <div class="relative px-4 mx-auto max-w-screen-xl text-white lg:py-16 xl:px-0 z-1 py-15p">
            <div class="mb-6 w-full lg:mb-0">
                <div class="flex w-full">
                    <div class="w-70">
                        <div class="w-min">
                            <h1
                                class="typewriter mb-4 pr-4 text-4xl font-extrabold tracking-tight leading-tight text-white w-auto md:text-5xl lg:text-6xl">
                                Olá, eu sou o Lucas.</h1>
                            <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
                                Estou aqui para impulsionar sua presença online.
                            </p>
                        </div>
                    </div>
                    <div class="w-30">
                        <img src="~/assets/images/logo-lucas.svg" class="h-80 w-100">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.py-15p {
    padding-top: 15%;
    padding-bottom: 15%;
}

.typewriter {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .10em solid white;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    /* Gives that scrolling effect as the typing happens */
    /* Adjust as needed */
    animation:
        typing 3.5s steps(30, end),
        blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: white;
    }
}
</style>