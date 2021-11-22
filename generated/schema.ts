// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FraktalNft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("marketId", Value.fromBigInt(BigInt.zero()));
    this.set("hash", Value.fromString(""));
    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromString(""));
    this.set("revenues", Value.fromStringArray(new Array(0)));
    this.set("offers", Value.fromStringArray(new Array(0)));
    this.set("status", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FraktalNft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FraktalNft entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FraktalNft", id.toString(), this);
    }
  }

  static load(id: string): FraktalNft | null {
    return changetype<FraktalNft | null>(store.get("FraktalNft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get marketId(): BigInt {
    let value = this.get("marketId");
    return value!.toBigInt();
  }

  set marketId(value: BigInt) {
    this.set("marketId", Value.fromBigInt(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get fraktions(): Array<string> {
    let value = this.get("fraktions");
    return value!.toStringArray();
  }

  set fraktions(value: Array<string>) {
    this.set("fraktions", Value.fromStringArray(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value!.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get collateral(): string | null {
    let value = this.get("collateral");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set collateral(value: string | null) {
    if (!value) {
      this.unset("collateral");
    } else {
      this.set("collateral", Value.fromString(<string>value));
    }
  }

  get revenues(): Array<string> {
    let value = this.get("revenues");
    return value!.toStringArray();
  }

  set revenues(value: Array<string>) {
    this.set("revenues", Value.fromStringArray(value));
  }

  get offers(): Array<string> {
    let value = this.get("offers");
    return value!.toStringArray();
  }

  set offers(value: Array<string>) {
    this.set("offers", Value.fromStringArray(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get fraktionsIndex(): BigInt | null {
    let value = this.get("fraktionsIndex");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set fraktionsIndex(value: BigInt | null) {
    if (!value) {
      this.unset("fraktionsIndex");
    } else {
      this.set("fraktionsIndex", Value.fromBigInt(<BigInt>value));
    }
  }

  get minOffer(): BigInt | null {
    let value = this.get("minOffer");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set minOffer(value: BigInt | null) {
    if (!value) {
      this.unset("minOffer");
    } else {
      this.set("minOffer", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class NFTCollateral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("type", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTCollateral entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTCollateral entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTCollateral", id.toString(), this);
    }
  }

  static load(id: string): NFTCollateral | null {
    return changetype<NFTCollateral | null>(store.get("NFTCollateral", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fraktal(): string | null {
    let value = this.get("fraktal");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fraktal(value: string | null) {
    if (!value) {
      this.unset("fraktal");
    } else {
      this.set("fraktal", Value.fromString(<string>value));
    }
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }
}

export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fraktal", Value.fromString(""));
    this.set("offerer", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("votes", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("winner", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Offer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Offer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Offer", id.toString(), this);
    }
  }

  static load(id: string): Offer | null {
    return changetype<Offer | null>(store.get("Offer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fraktal(): string {
    let value = this.get("fraktal");
    return value!.toString();
  }

  set fraktal(value: string) {
    this.set("fraktal", Value.fromString(value));
  }

  get offerer(): string {
    let value = this.get("offerer");
    return value!.toString();
  }

  set offerer(value: string) {
    this.set("offerer", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get votes(): BigInt {
    let value = this.get("votes");
    return value!.toBigInt();
  }

  set votes(value: BigInt) {
    this.set("votes", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get winner(): boolean {
    let value = this.get("winner");
    return value!.toBoolean();
  }

  set winner(value: boolean) {
    this.set("winner", Value.fromBoolean(value));
  }
}

export class Revenue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromString(""));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("buyout", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Revenue entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Revenue entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Revenue", id.toString(), this);
    }
  }

  static load(id: string): Revenue | null {
    return changetype<Revenue | null>(store.get("Revenue", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get buyout(): boolean {
    let value = this.get("buyout");
    return value!.toBoolean();
  }

  set buyout(value: boolean) {
    this.set("buyout", Value.fromBoolean(value));
  }
}

export class ListItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("seller", Value.fromString(""));
    this.set("fraktal", Value.fromString(""));
    this.set("gains", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ListItem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ListItem", id.toString(), this);
    }
  }

  static load(id: string): ListItem | null {
    return changetype<ListItem | null>(store.get("ListItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value!.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get fraktal(): string {
    let value = this.get("fraktal");
    return value!.toString();
  }

  set fraktal(value: string) {
    this.set("fraktal", Value.fromString(value));
  }

  get gains(): BigInt {
    let value = this.get("gains");
    return value!.toBigInt();
  }

  set gains(value: BigInt) {
    this.set("gains", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class FraktionsBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("nft", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("locked", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FraktionsBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FraktionsBalance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FraktionsBalance", id.toString(), this);
    }
  }

  static load(id: string): FraktionsBalance | null {
    return changetype<FraktionsBalance | null>(
      store.get("FraktionsBalance", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get locked(): BigInt {
    let value = this.get("locked");
    return value!.toBigInt();
  }

  set locked(value: BigInt) {
    this.set("locked", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("balance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get created(): Array<string> | null {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set created(value: Array<string> | null) {
    if (!value) {
      this.unset("created");
    } else {
      this.set("created", Value.fromStringArray(<Array<string>>value));
    }
  }

  get fraktals(): Array<string> {
    let value = this.get("fraktals");
    return value!.toStringArray();
  }

  set fraktals(value: Array<string>) {
    this.set("fraktals", Value.fromStringArray(value));
  }

  get fraktions(): Array<string> | null {
    let value = this.get("fraktions");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set fraktions(value: Array<string> | null) {
    if (!value) {
      this.unset("fraktions");
    } else {
      this.set("fraktions", Value.fromStringArray(<Array<string>>value));
    }
  }

  get listedItems(): Array<string> {
    let value = this.get("listedItems");
    return value!.toStringArray();
  }

  set listedItems(value: Array<string>) {
    this.set("listedItems", Value.fromStringArray(value));
  }

  get offersMade(): Array<string> {
    let value = this.get("offersMade");
    return value!.toStringArray();
  }

  set offersMade(value: Array<string>) {
    this.set("offersMade", Value.fromStringArray(value));
  }

  get revenues(): Array<string> {
    let value = this.get("revenues");
    return value!.toStringArray();
  }

  set revenues(value: Array<string>) {
    this.set("revenues", Value.fromStringArray(value));
  }
}
