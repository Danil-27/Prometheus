export function useStorageCheckContent(name: string, arr: Ref<boolean[]>) {
  // Проверяем, что код выполняется в браузере
  if (typeof window !== 'undefined') {
    const storedData = sessionStorage.getItem(name);
    if (storedData) {
      arr.value = JSON.parse(storedData);
    } else {
      sessionStorage.setItem(name, JSON.stringify(arr.value));
    }
  }
}
