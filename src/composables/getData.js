import axios from 'axios'
import { ref } from 'vue'

export const useGetData = () => {
    const data = ref(null)
    const error = ref(null)   
    const loading = ref(true)

    const fetchPokemons = async (url) => {
        loading.value =  true
        try {
            const res = await axios.get(url)
            data.value = res.data
        } catch (e) {
            // console.log('Error en [fetchPokemons]', error)
            error.value = '404 - Error en la solicitud'
        } finally {
            loading.value = false
        }
    }

    return {
        fetchPokemons,
        data,
        loading,
        error
    }
}
