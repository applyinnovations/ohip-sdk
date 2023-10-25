/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Holds the configuration to generate membership card number.
 * @export
 * @interface AutoGenerateCardNumberType
 */
export interface AutoGenerateCardNumberType {
    /**
     * Indicates what format the random generation card number should follow, Format we support are - 9 for Numbers, X for Alphanumeric mixed, and A for Alpha only. For example, 32093K.
     * @type {string}
     * @memberof AutoGenerateCardNumberType
     */
    cardNumberFormat?: string;
    /**
     * Valid card number prefix.
     * @type {string}
     * @memberof AutoGenerateCardNumberType
     */
    cardNumberPrefix?: string;
    /**
     * Card number auto generation range.
     * @type {string}
     * @memberof AutoGenerateCardNumberType
     */
    cardRangeEnd?: string;
    /**
     * Card number auto generation range.
     * @type {string}
     * @memberof AutoGenerateCardNumberType
     */
    cardRangeStart?: string;
}

/**
 * Check if a given object implements the AutoGenerateCardNumberType interface.
 */
export function instanceOfAutoGenerateCardNumberType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoGenerateCardNumberTypeFromJSON(json: any): AutoGenerateCardNumberType {
    return AutoGenerateCardNumberTypeFromJSONTyped(json, false);
}

export function AutoGenerateCardNumberTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoGenerateCardNumberType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardNumberFormat': !exists(json, 'cardNumberFormat') ? undefined : json['cardNumberFormat'],
        'cardNumberPrefix': !exists(json, 'cardNumberPrefix') ? undefined : json['cardNumberPrefix'],
        'cardRangeEnd': !exists(json, 'cardRangeEnd') ? undefined : json['cardRangeEnd'],
        'cardRangeStart': !exists(json, 'cardRangeStart') ? undefined : json['cardRangeStart'],
    };
}

export function AutoGenerateCardNumberTypeToJSON(value?: AutoGenerateCardNumberType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardNumberFormat': value.cardNumberFormat,
        'cardNumberPrefix': value.cardNumberPrefix,
        'cardRangeEnd': value.cardRangeEnd,
        'cardRangeStart': value.cardRangeStart,
    };
}

