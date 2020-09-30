import { UnsplashAPI } from '../../services/unsplash/UnsplashAPI'
import { Cfg } from '../configs/Cfg'

export const Unsplash = new UnsplashAPI(Cfg.CLIENT_ID)
