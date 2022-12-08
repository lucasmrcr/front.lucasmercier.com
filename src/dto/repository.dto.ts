import { OwnerDTO } from './owner.dto';

export class RepositoryDTO {
    fullName!: string;
    pushedAt!: Date;
    createdAt!: Date;
    isPrivate!: boolean;
    isFork!: boolean;
    owner!: OwnerDTO;
    description?: string;
    language?: string;
    languages?: Map<string, number>;
}
