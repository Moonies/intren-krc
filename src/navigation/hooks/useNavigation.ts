import { useLocation } from 'react-router-dom'

export default function useNavigation() {
  const location = useLocation()
  return {
    location,
  }
}
