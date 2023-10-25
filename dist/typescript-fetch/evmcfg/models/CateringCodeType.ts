/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType200 } from './TranslationTextType200';
import {
    TranslationTextType200FromJSON,
    TranslationTextType200FromJSONTyped,
    TranslationTextType200ToJSON,
} from './TranslationTextType200';

/**
 * Base type provides information about Catering Code which will be used for removal operation
 * @export
 * @interface CateringCodeType
 */
export interface CateringCodeType {
    /**
     * Code is used to identify a Catering Code.
     * @type {string}
     * @memberof CateringCodeType
     */
    code?: string;
    /**
     * Code ID is used to identify a Catering Code by ID.
     * @type {number}
     * @memberof CateringCodeType
     */
    codeId?: number;
    /**
     * Catering Codes display sequence Number
     * @type {number}
     * @memberof CateringCodeType
     */
    displaySequence?: number;
    /**
     * 
     * @type {TranslationTextType200}
     * @memberof CateringCodeType
     */
    translatableDescription?: TranslationTextType200;
    /**
     * Indicator used for only WEB Code Type in Item Rate
     * @type {boolean}
     * @memberof CateringCodeType
     */
    webBookable?: boolean;
}

/**
 * Check if a given object implements the CateringCodeType interface.
 */
export function instanceOfCateringCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringCodeTypeFromJSON(json: any): CateringCodeType {
    return CateringCodeTypeFromJSONTyped(json, false);
}

export function CateringCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'codeId': !exists(json, 'codeId') ? undefined : json['codeId'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'translatableDescription': !exists(json, 'translatableDescription') ? undefined : TranslationTextType200FromJSON(json['translatableDescription']),
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function CateringCodeTypeToJSON(value?: CateringCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'codeId': value.codeId,
        'displaySequence': value.displaySequence,
        'translatableDescription': TranslationTextType200ToJSON(value.translatableDescription),
        'webBookable': value.webBookable,
    };
}

