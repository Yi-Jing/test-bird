import { ref, onMounted } from 'vue'

export const useDevice = () => {
  const isMobile = ref(false)
  const isPc = ref(false)

  const checkDevice = () => {
    isMobile.value = window.innerWidth < 1024
    isPc.value = window.innerWidth >= 1024
  }

  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })

  return { isMobile, isPc }
}
