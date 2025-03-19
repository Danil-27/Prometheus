export function useStorageCheckContent(name: string, isCheck: Ref<boolean[]> | Ref<boolean>) {
  // Проверяем, что код выполняется в браузере
  if (typeof window !== 'undefined') {
    const storedData = sessionStorage.getItem(name);
    if (storedData) {
      isCheck.value = JSON.parse(storedData);
    } else {
      sessionStorage.setItem(name, JSON.stringify(isCheck.value));
    }
  }
}
