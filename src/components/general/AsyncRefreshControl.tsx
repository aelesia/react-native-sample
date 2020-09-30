import React, { useState } from 'react'
import { RefreshControl } from 'react-native'

import { sp } from '../../style/Style'

export const AsyncRefreshControl: React.FC<{ onRefresh: () => Promise<void> }> = p => {
  const [loading, setLoading] = useState<boolean>(false)

  const onRefresh = async () => {
    setLoading(true)
    try {
      await p.onRefresh()
    } catch (err) {
      console.warn('Uncaught promise in AsyncRefreshControl: ' + err)
    } finally {
      setLoading(false)
    }
  }
  return <RefreshControl {...p} refreshing={loading} onRefresh={onRefresh} />
}
