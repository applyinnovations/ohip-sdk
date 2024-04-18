/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringMenuItemClassType } from './CateringMenuItemClassType';
import {
    CateringMenuItemClassTypeFromJSON,
    CateringMenuItemClassTypeFromJSONTyped,
    CateringMenuItemClassTypeToJSON,
} from './CateringMenuItemClassType';
import type { CateringMenuItemType } from './CateringMenuItemType';
import {
    CateringMenuItemTypeFromJSON,
    CateringMenuItemTypeFromJSONTyped,
    CateringMenuItemTypeToJSON,
} from './CateringMenuItemType';

/**
 * 
 * @export
 * @interface CopyMenuItemsType
 */
export interface CopyMenuItemsType {
    /**
     * Source Hotel code from where menu items needs to be copied
     * @type {string}
     * @memberof CopyMenuItemsType
     */
    hotelId?: string;
    /**
     * List of Values of Menu Item Class.
     * @type {Array<CateringMenuItemClassType>}
     * @memberof CopyMenuItemsType
     */
    menuItemClassList?: Array<CateringMenuItemClassType>;
    /**
     * List of Values of Menu Item.
     * @type {Array<CateringMenuItemType>}
     * @memberof CopyMenuItemsType
     */
    menuItemList?: Array<CateringMenuItemType>;
}

/**
 * Check if a given object implements the CopyMenuItemsType interface.
 */
export function instanceOfCopyMenuItemsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyMenuItemsTypeFromJSON(json: any): CopyMenuItemsType {
    return CopyMenuItemsTypeFromJSONTyped(json, false);
}

export function CopyMenuItemsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMenuItemsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'menuItemClassList': !exists(json, 'menuItemClassList') ? undefined : ((json['menuItemClassList'] as Array<any>).map(CateringMenuItemClassTypeFromJSON)),
        'menuItemList': !exists(json, 'menuItemList') ? undefined : ((json['menuItemList'] as Array<any>).map(CateringMenuItemTypeFromJSON)),
    };
}

export function CopyMenuItemsTypeToJSON(value?: CopyMenuItemsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'menuItemClassList': value.menuItemClassList === undefined ? undefined : ((value.menuItemClassList as Array<any>).map(CateringMenuItemClassTypeToJSON)),
        'menuItemList': value.menuItemList === undefined ? undefined : ((value.menuItemList as Array<any>).map(CateringMenuItemTypeToJSON)),
    };
}
