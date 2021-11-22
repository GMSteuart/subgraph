import { BigInt } from "@graphprotocol/graph-ts"
import {
  FraktalMarket,
  Bought,
  OfferMade,
  FraktalClaimed,
  ItemListed,
  SellerPaymentPull,
  OfferVoted,
} from "../generated/FraktalMarket/FraktalMarket";
import { FraktalNft, Offer, ListItem } from "../generated/schema";
import { getUser, getFraktionBalance } from "./helpers";

// event ItemListed(address owner, address tokenAddress, uint256 price, uint256 amountOfShares);
export function handleItemListed(event: ItemListed): void {
  let fraktalAddress = event.params.tokenAddress;
  let fraktal = FraktalNft.load(fraktalAddress.toHexString());
  fraktal.status = "open";
  fraktal.save();
  let senderString = event.params.owner.toHexString();
  let listedItemId = senderString + "-" + fraktalAddress.toHexString();
  let listedItem = ListItem.load(listedItemId);
  if (!listedItem) {
    listedItem = new ListItem(listedItemId);
    listedItem.fraktal = fraktalAddress.toHexString();
    listedItem.seller = senderString;
    listedItem.gains = BigInt.fromI32(0);
  }
  listedItem.price = event.params.price;
  listedItem.amount = event.params.amountOfShares;
  listedItem.save();
}

// event Bought(address buyer,address seller, address tokenAddress, uint16 numberOfShares);
export function handleBought(event: Bought): void {
  let contract = FraktalMarket.bind(event.address);
  let sellerBalanceCall = contract.getSellerBalance(event.params.seller);
  let buyer = getUser(event.params.buyer.toHexString());
  buyer.save();

  let fraktalString = listedItem.fraktal
  let seller = getUser(event.params.seller)
  seller.balance = sellerBalanceCall
  seller.save();
  let buyerFraktions = getFraktionBalance(event.params.buyer, fraktalString)
  let sellerFraktions = getFraktionBalance(event.params.seller,fraktalString)
// duplicates the buyed items!! (transfersingle takes care!)
  buyerFraktions.amount += event.params.numberOfShares
  sellerFraktions.amount -= event.params.numberOfShares
  buyerFraktions.save()
  sellerFraktions.save()

  let fraktalString = listedItem.fraktal;
  let seller = getUser(event.params.seller.toHexString());
  seller.balance = sellerBalanceCall;
  seller.save();
  let buyerFraktions = getFraktionBalance(buyer.id, fraktalString);
  let sellerFraktions = getFraktionBalance(seller.id, fraktalString);
  // duplicates the buyed items!!
  buyerFraktions.amount.plus(event.params.numberOfShares);
  sellerFraktions.amount.minus(event.params.numberOfShares);
  buyerFraktions.save();
  sellerFraktions.save();
}

// event OfferMade(address offerer, address tokenAddress, uint256 value);
export function handleOfferMade(event: OfferMade): void {
  let offererString = event.params.offerer.toHexString();
  let user = getUser(offererString);
  user.save();
  let fraktalString = event.params.tokenAddress.toHexString();
  let offerString = offererString + "-" + fraktalString;
  let offer = Offer.load(offerString);
  if (!offer) {
    offer = new Offer(offerString);
  }
  offer.offerer = offererString;
  offer.fraktal = fraktalString;
  offer.value = event.params.value;
  offer.votes = BigInt.fromI32(0);
  offer.timestamp = event.block.timestamp;
  offer.winner = false;
  offer.save();
  let fraktal = FraktalNft.load(fraktalString);
  let totalOffers = fraktal.offers;
  totalOffers.push(offerString);
  fraktal.offers = totalOffers;
  fraktal.save();
}

// event SellerPaymentPull(address seller, uint256 balance);
export function handleSellerPaymentPull(event: SellerPaymentPull): void {
  let user = getUser(event.params.seller.toHexString());
  user.balance = BigInt.fromI32(0);
  user.save();
}

// event FraktalClaimed(address owner, address tokenAddress);
export function handleFraktalClaimed(event: FraktalClaimed): void {
  let fraktalAddress = event.params.tokenAddress
  let ownerString = event.params.owner.toHexString()
  let fraktal = FraktalNft.load(fraktalAddress.toHexString())
  let offerString = ownerString+'-'+fraktal.id
  let offer = Offer.load(offerString)
  if(offer){
    offer.value = BigInt.fromI32(0);
    offer.save()
  }
  fraktal.status = 'Retrieved'
  fraktal.owner = ownerString
  fraktal.save()
  }

// OfferVoted(address voter, address offerer, address tokenAddress, bool sold)
  export function handleOfferVoted(event: OfferVoted): void {
    if(event.params.sold == true){
      let fraktal = FraktalNft.load(event.params.tokenAddress.toHexString());
      fraktal.status = 'sold'
      fraktal.save();
      let offerString = event.params.offerer.toHexString()+'-'+event.params.tokenAddress.toHexString();
      let offer = Offer.load(offerString);
      offer.winner = true;
      offer.save();
    }
    // offer.votes = balance...
  }

// // event FeeUpdated(uint16 newFee);
// // event AdminWithdrawFees(uint256 feesAccrued);
