/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TelephoneType } from './TelephoneType';
import {
    TelephoneTypeFromJSON,
    TelephoneTypeFromJSONTyped,
    TelephoneTypeToJSON,
} from './TelephoneType';

/**
 * Information on a telephone number for the customer.
 * @export
 * @interface StagedProfilePhoneType
 */
export interface StagedProfilePhoneType {
    /**
     * 
     * @type {TelephoneType}
     * @memberof StagedProfilePhoneType
     */
    telephone?: TelephoneType;
    /**
     * The error in telephone information in a staged profile with an invalid status.
     * @type {string}
     * @memberof StagedProfilePhoneType
     */
    errorDescription?: string;
    /**
     * Inactivation date of the record.
     * @type {string}
     * @memberof StagedProfilePhoneType
     */
    inactiveDate?: string;
    /**
     * Indicates whether the phone is the default confirmation method.
     * @type {boolean}
     * @memberof StagedProfilePhoneType
     */
    defaultConfirmation?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfilePhoneType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfilePhoneType
     */
    type?: string;
}

/**
 * Check if a given object implements the StagedProfilePhoneType interface.
 */
export function instanceOfStagedProfilePhoneType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfilePhoneTypeFromJSON(json: any): StagedProfilePhoneType {
    return StagedProfilePhoneTypeFromJSONTyped(json, false);
}

export function StagedProfilePhoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfilePhoneType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'telephone': !exists(json, 'telephone') ? undefined : TelephoneTypeFromJSON(json['telephone']),
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'defaultConfirmation': !exists(json, 'defaultConfirmation') ? undefined : json['defaultConfirmation'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StagedProfilePhoneTypeToJSON(value?: StagedProfilePhoneType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'telephone': TelephoneTypeToJSON(value.telephone),
        'errorDescription': value.errorDescription,
        'inactiveDate': value.inactiveDate,
        'defaultConfirmation': value.defaultConfirmation,
        'id': value.id,
        'type': value.type,
    };
}

