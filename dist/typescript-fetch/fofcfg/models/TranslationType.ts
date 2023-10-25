/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InterfaceControlArticleType } from './InterfaceControlArticleType';
import {
    InterfaceControlArticleTypeFromJSON,
    InterfaceControlArticleTypeFromJSONTyped,
    InterfaceControlArticleTypeToJSON,
} from './InterfaceControlArticleType';
import type { InterfaceControlCfgType } from './InterfaceControlCfgType';
import {
    InterfaceControlCfgTypeFromJSON,
    InterfaceControlCfgTypeFromJSONTyped,
    InterfaceControlCfgTypeToJSON,
} from './InterfaceControlCfgType';
import type { InterfaceControlLangType } from './InterfaceControlLangType';
import {
    InterfaceControlLangTypeFromJSON,
    InterfaceControlLangTypeFromJSONTyped,
    InterfaceControlLangTypeToJSON,
} from './InterfaceControlLangType';
import type { InterfaceControlSpecType } from './InterfaceControlSpecType';
import {
    InterfaceControlSpecTypeFromJSON,
    InterfaceControlSpecTypeFromJSONTyped,
    InterfaceControlSpecTypeToJSON,
} from './InterfaceControlSpecType';

/**
 * 
 * @export
 * @interface TranslationType
 */
export interface TranslationType {
    /**
     * Translation article setup of a hotel interface.
     * @type {Array<InterfaceControlArticleType>}
     * @memberof TranslationType
     */
    articles?: Array<InterfaceControlArticleType>;
    /**
     * Translation configuration of a hotel interface.
     * @type {Array<InterfaceControlCfgType>}
     * @memberof TranslationType
     */
    configuation?: Array<InterfaceControlCfgType>;
    /**
     * Default charge of a translation setup.
     * @type {number}
     * @memberof TranslationType
     */
    defaultCharge?: number;
    /**
     * Group number length of a translation setup.
     * @type {string}
     * @memberof TranslationType
     */
    groupNoLength?: string;
    /**
     * Guest message id length of a translation setup.
     * @type {string}
     * @memberof TranslationType
     */
    guestMessageIdLength?: string;
    /**
     * Guest number length of a translation setup.
     * @type {string}
     * @memberof TranslationType
     */
    guestNoLength?: string;
    /**
     * Translation languages setup of a hotel interface.
     * @type {Array<InterfaceControlLangType>}
     * @memberof TranslationType
     */
    languages?: Array<InterfaceControlLangType>;
    /**
     * Translation specifications setup of a hotel interface.
     * @type {Array<InterfaceControlSpecType>}
     * @memberof TranslationType
     */
    specifications?: Array<InterfaceControlSpecType>;
}

/**
 * Check if a given object implements the TranslationType interface.
 */
export function instanceOfTranslationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TranslationTypeFromJSON(json: any): TranslationType {
    return TranslationTypeFromJSONTyped(json, false);
}

export function TranslationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articles': !exists(json, 'articles') ? undefined : ((json['articles'] as Array<any>).map(InterfaceControlArticleTypeFromJSON)),
        'configuation': !exists(json, 'configuation') ? undefined : ((json['configuation'] as Array<any>).map(InterfaceControlCfgTypeFromJSON)),
        'defaultCharge': !exists(json, 'defaultCharge') ? undefined : json['defaultCharge'],
        'groupNoLength': !exists(json, 'groupNoLength') ? undefined : json['groupNoLength'],
        'guestMessageIdLength': !exists(json, 'guestMessageIdLength') ? undefined : json['guestMessageIdLength'],
        'guestNoLength': !exists(json, 'guestNoLength') ? undefined : json['guestNoLength'],
        'languages': !exists(json, 'languages') ? undefined : ((json['languages'] as Array<any>).map(InterfaceControlLangTypeFromJSON)),
        'specifications': !exists(json, 'specifications') ? undefined : ((json['specifications'] as Array<any>).map(InterfaceControlSpecTypeFromJSON)),
    };
}

export function TranslationTypeToJSON(value?: TranslationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'articles': value.articles === undefined ? undefined : ((value.articles as Array<any>).map(InterfaceControlArticleTypeToJSON)),
        'configuation': value.configuation === undefined ? undefined : ((value.configuation as Array<any>).map(InterfaceControlCfgTypeToJSON)),
        'defaultCharge': value.defaultCharge,
        'groupNoLength': value.groupNoLength,
        'guestMessageIdLength': value.guestMessageIdLength,
        'guestNoLength': value.guestNoLength,
        'languages': value.languages === undefined ? undefined : ((value.languages as Array<any>).map(InterfaceControlLangTypeToJSON)),
        'specifications': value.specifications === undefined ? undefined : ((value.specifications as Array<any>).map(InterfaceControlSpecTypeToJSON)),
    };
}

