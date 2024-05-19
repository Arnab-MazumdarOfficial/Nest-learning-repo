import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerServiceService {

    supplyPower(watt: number){
        console.log(`suppling ${watt} worth of power.`);
    }
}
