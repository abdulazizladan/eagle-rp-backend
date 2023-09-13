import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorEntity } from './entities/vendor.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class VendorsService {

  constructor(
    @InjectRepository(VendorEntity) private readonly vendorRepository: Repository<VendorEntity>
  ) {

  }

  create(createVendorDto: CreateVendorDto) {
    return 'This action adds a new vendor';
  }

  /**
   * 
   * @returns a full list of vendprs
   */
  getAll(): Observable<VendorEntity[]> {
    const VendorsList = this.vendorRepository.find();
    return from(VendorsList).pipe();
  }

  /**
   * 
   * @param id 
   * @returns details of vendor with given ID
   */
  findOne(id: string): Observable<VendorEntity> {
    const searchID = id;
    const vendor = this.vendorRepository.findOne({where: {id: searchID}, relations: ['services', 'products', 'contact']});
    if(!vendor) throw new NotFoundException();
    return from(vendor).pipe();
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
