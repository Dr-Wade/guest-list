import * as Data from './data'

export const mapModels = function(fields) {
    const computeds = {};
    for (const field of fields) {
        computeds[field] = {
            get() {
                return Data[field]
            }
        }
    }
    return computeds;
}