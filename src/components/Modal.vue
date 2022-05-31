<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" :class="open ? 'pointer-events-all' : 'pointer-events-none'" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-black bg-opacity-60 transition-opacity ease-out duration-300"
                :class="open ? 'opacity-100' : 'opacity-0'" aria-hidden="true"
                @click="$emit('close')"></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div class="inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all ease-out duration-300 w-full sm:my-8 sm:align-middle sm:max-w-sm sm:p-6"
                :class="open ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'">
                <div>
                    <div class="ml-auto flex items-center justify-center h-6 w-6 rounded-full bg-gray-600" @click="$emit('close')">
                        <i class="fas text-gray-300 fa-times"></i>
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                        <h3 class="text-xl font-semibold leading-6 text-gray-200" id="modal-title">
                            <slot name="title"></slot>
                        </h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-400" style="height: calc(100vh - 16rem)">
                                <slot></slot>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['open']
}
</script>