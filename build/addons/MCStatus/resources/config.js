var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDefined, IsNumber, IsPositive, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
class ServerConfig {
    id;
    address;
    port;
}
__decorate([
    IsDefined(),
    IsString(),
    __metadata("design:type", String)
], ServerConfig.prototype, "id", void 0);
__decorate([
    IsDefined(),
    IsString(),
    __metadata("design:type", String)
], ServerConfig.prototype, "address", void 0);
__decorate([
    IsDefined(),
    IsNumber(),
    IsPositive(),
    __metadata("design:type", Number)
], ServerConfig.prototype, "port", void 0);
export default class DefaultConfig {
    servers;
}
__decorate([
    IsDefined(),
    ValidateNested({ each: true }),
    Type(() => ServerConfig),
    __metadata("design:type", Array)
], DefaultConfig.prototype, "servers", void 0);
