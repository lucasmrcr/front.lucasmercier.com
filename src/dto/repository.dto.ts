import {OwnerDTO} from './owner.dto'

export class RepositoryDTO {

  fullName!: String
  pushedAt!: Date
  createdAt!: Date
  isPrivate!: Boolean
  isFork!: Boolean
  owner!: OwnerDTO
  description?: string
  language?: string

}
