import { useState, useRef, useEffect } from 'react'

export type RecordItem = {
  tags: number[]
  note: string
  category: number
  amount: string
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
    let amount = record.amount.slice(-1) === '.' ? record.amount.slice(0, -1) : record.amount
    record = { ...record, createTime: new Date().toISOString(), amount }
    setRecords([...records, record])
  }
  useEffect(() => {
    localStorage.setItem('records', JSON.stringify(records))
  }, [records])
  return { records, addRecord }
}