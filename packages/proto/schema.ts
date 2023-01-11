/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Blob {
  addressOwner: string;
  name: string;
}

function createBaseBlob(): Blob {
  return { addressOwner: "", name: "" };
}

export const Blob = {
  encode(message: Blob, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressOwner !== "") {
      writer.uint32(10).string(message.addressOwner);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blob {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressOwner = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blob {
    return {
      addressOwner: isSet(object.addressOwner) ? String(object.addressOwner) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Blob): unknown {
    const obj: any = {};
    message.addressOwner !== undefined && (obj.addressOwner = message.addressOwner);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Blob>, I>>(base?: I): Blob {
    return Blob.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Blob>, I>>(object: I): Blob {
    const message = createBaseBlob();
    message.addressOwner = object.addressOwner ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
