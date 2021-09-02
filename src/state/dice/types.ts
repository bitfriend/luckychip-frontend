import { BigNumber } from 'ethers'

enum Status {
  Pending = 0,
  Open,
  Lock,
  Claimable,
  Expired
}

export interface DiceGame {
  bankerEndBlock: string
  playerEndBlock: string
}

export interface DiceRoundResult {
  startBlock: BigNumber
  lockBlock: BigNumber
  secretSentBlock: BigNumber
  bankHash: string
  bankSecret: BigNumber
  totalAmount: BigNumber
  maxBetAmount: BigNumber
  betAmounts?: Array<BigNumber>
  lcBackAmount: BigNumber
  bonusAmount: BigNumber
  swapLcAmount: BigNumber
  betUsers: BigNumber
  finalNumber: number
  status: Status
}

export interface DiceRound {
  startBlock: string
  lockBlock: string
  secretSentBlock: string
  bankHash: string
  bankSecret: string
  totalAmount: string
  maxBetAmount: string
  betAmounts?: Array<string>
  lcBackAmount: string
  bonusAmount: string
  swapLcAmount: string
  betUsers: string
  finalNumber: number
  status: Status
}

export interface DiceHistoryRecord {
  betHash: string
  account: string
  betNums: Array<boolean>
  betAmount: string
  outcome: number
  time: number
  roll: number
  profit: number
}

export interface BetInfo {
  amount: BigNumber
  numberCount: number
  numbers?: Array<boolean>
  claimed: boolean
  lcClaimed: boolean
}

export interface DiceState {
  attending?: boolean
  paused?: boolean
  bankerTimeBlocks?: string
  playerTimeBlocks?: string
  currentGame?: DiceGame
  currentEpoch?: string
  intervalBlocks?: string
  prevDrawnNumber?: number
  claimable?: boolean
  currentRound?: DiceRound
  rounds?: Array<DiceRound>
  publicHistoryRecords?: Array<DiceHistoryRecord>
  privateHistoryRecords?: Array<DiceHistoryRecord>
}
