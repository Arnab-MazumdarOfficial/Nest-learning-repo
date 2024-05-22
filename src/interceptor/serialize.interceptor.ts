import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface classConstructor{
new (... args : any[]) : {}

}
export function serialize(dto: any) {
    return UseInterceptors(new SerializeInterceptor(dto))
}
@Injectable()
export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: any) { }
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log("Interceptor: Before handler execution.", context.switchToHttp().getRequest().url);

        return next.handle().pipe(
            map((data: any) => {
                console.log("Interceptor: Before response is sent.", data);

                if (data === undefined || data === null) {
                    console.warn("Interceptor: Data is undefined or null, skipping transformation.");
                    return data;
                }

                try {
                    const transformedData = plainToClass(this.dto, data, {
                        excludeExtraneousValues: true,
                    });
                    console.log("Interceptor: Data after transformation.", transformedData);
                    return transformedData;
                } catch (error) {
                    console.error("Interceptor: Error during transformation.", error);
                    throw error;
                }
            }),
        );
    }
}
