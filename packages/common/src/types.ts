/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

import { IItem, IUser } from "@esri/arcgis-rest-types";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IUserRequestOptions } from "@esri/arcgis-rest-auth";

/**
 * Generic Model, used with all items that have a json
 * `/data` payload
 *
 * @export
 * @interface IModel
 */
export interface IModel {
  item: IItem;
  data?: {
    [propName: string]: any;
  };
  [key: string]: any;
}

/**
 * Defined the Initiative Item as having
 * `type: "Hub Initiative"`
 *
 * @export
 * @interface IInitiativeItem
 * @extends {IItemAdd}
 */
export interface IInitiativeItem extends IItem {
  id: string;
  type: "Hub Initiative";
}

/**
 * Initiative Model
 *
 * @export
 * @interface IInitiativeModel
 * @extends {IModel}
 */
export interface IInitiativeModel extends IModel {
  item: IInitiativeItem;
  data?: {
    [propName: string]: any;
  };
}

export interface IInitiativeModelTemplate {
  item: Partial<IInitiativeItem>;
  data: {
    [propName: string]: any;
  };
}

// TODO fine-tune this with sensible constraints
export type IItemTemplate = Record<string, any>;

export interface ITemplateAsset {
  mimeType?: "image/png" | "image/jpg" | "image/jpeg";
  name: string;
  url?: string;
  type?: string;
}

export interface IModelTemplate {
  itemId: string;
  item: IItemTemplate;
  data: { [propName: string]: any };
  properties?: { [propName: string]: any };
  type: string;
  key: string;
  dependencies?: any[];
  resources?: string[];
  assets?: ITemplateAsset[];
  [propName: string]: any;
}

export interface ISolutionTemplate extends IModel {
  data: {
    templates: IModelTemplate[];
  };
}

export type GenericAsyncFunc = (...args: any) => Promise<any>;

interface IHubRequestOptionsPortalSelf extends IPortal {
  user?: IUser;
}

export interface IHubRequestOptions extends IUserRequestOptions {
  isPortal: boolean;
  hubApiUrl: string;
  portalSelf?: IHubRequestOptionsPortalSelf;
}

export interface IItemResource {
  type?: string;
  url: string;
  name: string;
}

export type IBBox = number[][];
