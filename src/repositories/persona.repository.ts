import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MonGoDbDataSource} from '../datasources';
import {Persona, PersonaRelations} from '../models';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.cedula,
  PersonaRelations
> {
  constructor(
    @inject('datasources.MonGODb') dataSource: MonGoDbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
