<template>
    <article :class="['p-2 md:p-4 pt-24 md:pt-48', returnThemeClass(true, 'purple')]">
        <div>
            <!-- //TODO replace with svgs -->
            <!-- //TODO add functionality -->
            <span class="text-5xl cursor-pointer">↑↓</span>
        </div>
        <section class="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-y-2 md:grid-cols-3">
            <div v-for="project in projects" :key="project._id">
                <figure class="overflow-hidden">
                    <SanityImage :asset-id="project.mainMedia.image.asset._ref" class="object-cover h-full w-full" />
                </figure>

                <h2 class="text-yellow leading-4 pt-2 md:hidden">{{ project.title }}</h2>
            </div>
        </section>
    </article>
</template>

<script>
import general from '~/mixins/general'

export default {
    mixins: [general],
    async asyncData({ $sanity }) {
        return await $sanity.fetch(query)
    },
}

const query = `{
  "projects": *[_type == "project"],
}`
</script>

<style scoped>
figure {
    border-radius: 16px;
    aspect-ratio: 1;
    border: 1px solid var(--darkgray);
}

@media (min-width: 786px) {
    figure {
        aspect-ratio: 442 / 323;
    }
}
</style>
