import {ref} from 'vue'

export function useFetch(url: string) {
  const data = ref(null)
  const isLoading = ref(false)

  const fetchData = () => {
    isLoading.value = true
    fetch(url)
    .then((res) => res.json())
    .then((json) => data.value = json)
    .catch((err) => {
      console.log('Something goes wrong:', err)
    })
    .finally(() => isLoading.value = false)
  }

  fetchData();

  return {data, fetchData, isLoading}
}