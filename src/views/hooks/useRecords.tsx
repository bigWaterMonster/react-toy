import { useState, useRef, useEffect } from 'react'

type RecordItem = {
  tags: number[]
  note: string
  category: number
  amount: number
  createTime?: string
}
//  Omit<RecordItem, 'createTime' | ''>

const getRecords = (): RecordItem[] => {
  return JSON.parse(localStorage.getItem('records') || '[]')
}

export const useRecords = () => {
  let initialRecords = useRef(getRecords())
  const [records, setRecords] = useState<RecordItem[]>(initialRecords.current)
  const addRecord = (record: RecordItem) => {
    record = { ...record, createTime: new Date().toISOString() }
    setRecords([...records, record])
  }
  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  return { records, addRecord }
}