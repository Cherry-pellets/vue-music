import Network from './Network'

export const getBanner = () => Network.get('/api/banner?type=2')
export const getPersonalized = () => Network.get('/api/personalized?limit=6')
export const getNewAlbum = () => Network.get('/api/album/newest')
