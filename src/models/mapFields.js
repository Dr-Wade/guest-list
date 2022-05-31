export const  mapFields = function(fields) {
    const computeds = {}
    for (const field of fields) {
        computeds[field] = {
            get() {
                return this.$store.state[field]
            },
            set(value) {
                this.$store.commit('UPDATE_' + field.toUpperCase(), value)
            }
        }
    }
    return computeds
}