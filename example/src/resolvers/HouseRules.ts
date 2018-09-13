import { IHouseRules } from "../generated/resolvers";
import { Types } from "./types/typemap";

export interface HouseRulesParent {
  additionalRules?: string;
  createdAt: string;
  id: string;
  partiesAndEventsAllowed?: boolean;
  petsAllowed?: boolean;
  smokingAllowed?: boolean;
  suitableForChildren?: boolean;
  suitableForInfants?: boolean;
  updatedAt: string;
}

export const HouseRules: IHouseRules.Resolver<Types> = {
  additionalRules: parent => parent.additionalRules,
  createdAt: parent => parent.createdAt,
  id: parent => parent.id,
  partiesAndEventsAllowed: parent => parent.partiesAndEventsAllowed,
  petsAllowed: parent => parent.petsAllowed,
  smokingAllowed: parent => parent.smokingAllowed,
  suitableForChildren: parent => parent.suitableForChildren,
  suitableForInfants: parent => parent.suitableForInfants,
  updatedAt: parent => parent.updatedAt
};
