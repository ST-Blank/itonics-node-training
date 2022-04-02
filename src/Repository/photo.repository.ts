import {EntityRepository,Repository} from 'typeorm';
import { Photo } from "../entity/Photo";

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo>{}