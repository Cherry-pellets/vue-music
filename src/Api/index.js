import Network from './Network'

export const getBanner = () => Network.get('/api/banner?type=2')
export const getPersonalized = () => Network.get('/api/personalized?limit=6')
export const getNewAlbum = () => Network.get('/api/album/newest')
export const getNewSongs = () => Network.get('/api/personalized/newsong')
export const getPlayList = (data) => Network.get('/api/playlist/detail', data)
export const getAlbum = (data) => Network.get('/api/album', data)
