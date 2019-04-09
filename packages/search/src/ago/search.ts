/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { searchItems, ISearchResult } from "@esri/arcgis-rest-items";
import { IQueryObject, createQueryObject } from "./create-q";
import { ISearchParams } from "../common/params";
import { UserSession } from "@esri/arcgis-rest-auth";
import { encodeAgoQuery } from "./encode-ago-query";

/**
 * Search for Items in ArcGIS
 *
 * @export
 * @param {IParams} searchRequestOptions
 * @returns {Promise<ISearchResult>}
 */
export function search(
  params: ISearchParams,
  authentication: UserSession
): Promise<ISearchResult> {
  // console.log("Inside hubJS params = ", params);
  const queryObj: IQueryObject = createQueryObject(params);
  // console.log("Inside hubJS queryObj = ", queryObj);
  const agoParams = encodeAgoQuery(queryObj);
  // console.log("Inside hubJS agoParams = ", agoParams);
  return searchItems({
    authentication,
    searchForm: agoParams
  });
}