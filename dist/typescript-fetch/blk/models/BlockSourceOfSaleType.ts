/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SourceCodeInfoType } from './SourceCodeInfoType';
import {
    SourceCodeInfoTypeFromJSON,
    SourceCodeInfoTypeFromJSONTyped,
    SourceCodeInfoTypeToJSON,
} from './SourceCodeInfoType';

/**
 * Point of Sale of Block. Identifies the entity/channel who made the block reservation.
 * @export
 * @interface BlockSourceOfSaleType
 */
export interface BlockSourceOfSaleType {
    /**
     * 
     * @type {SourceCodeInfoType}
     * @memberof BlockSourceOfSaleType
     */
    sourceCode?: SourceCodeInfoType;
    /**
     * The of entity/channel where this business block originated.
     * @type {string}
     * @memberof BlockSourceOfSaleType
     */
    sourceType?: string;
    /**
     * The of entity/channel where this business block originated.
     * @type {string}
     * @memberof BlockSourceOfSaleType
     */
    sourceTypeDescription?: string;
}

/**
 * Check if a given object implements the BlockSourceOfSaleType interface.
 */
export function instanceOfBlockSourceOfSaleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockSourceOfSaleTypeFromJSON(json: any): BlockSourceOfSaleType {
    return BlockSourceOfSaleTypeFromJSONTyped(json, false);
}

export function BlockSourceOfSaleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockSourceOfSaleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceCode': !exists(json, 'sourceCode') ? undefined : SourceCodeInfoTypeFromJSON(json['sourceCode']),
        'sourceType': !exists(json, 'sourceType') ? undefined : json['sourceType'],
        'sourceTypeDescription': !exists(json, 'sourceTypeDescription') ? undefined : json['sourceTypeDescription'],
    };
}

export function BlockSourceOfSaleTypeToJSON(value?: BlockSourceOfSaleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceCode': SourceCodeInfoTypeToJSON(value.sourceCode),
        'sourceType': value.sourceType,
        'sourceTypeDescription': value.sourceTypeDescription,
    };
}

