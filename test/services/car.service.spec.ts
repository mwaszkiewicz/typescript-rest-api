/* eslint-disable no-undef */
import { CarService } from '../../src/services/car.service';
import { pino } from 'pino';

describe('controller.service', () => {
  let service: CarService;

  beforeAll(async () => {
    service = new CarService(pino());
  });

  it('Create car', async () => {
    const result = await service.create({ vin: '12345', brand: 'Audi', model: 'A4' });
    expect(result).toMatchSnapshot();
  });

  it('Update car', async () => {
    const result = await service.update({ vin: '12345', brand: 'Audi', model: 'A4' });
    expect(result).toEqual(true);
  });

  it('Get all cars', async () => {
    const result = await service.getAll();
    expect(result.length).toEqual(2);
    expect(result).toMatchSnapshot();
  });

  it('Delete car by vin', async () => {
    const result = await service.delete('12345');
    expect(result).toEqual(1);
  });
});
