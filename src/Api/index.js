import Network from './Network'

export const getBanner = () => Network.get('/api/banner?type=2')
