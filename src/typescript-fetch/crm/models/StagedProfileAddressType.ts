/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressType } from './AddressType';
import {
    AddressTypeFromJSON,
    AddressTypeFromJSONTyped,
    AddressTypeToJSON,
} from './AddressType';
import type { StagedAddressCleansStatus } from './StagedAddressCleansStatus';
import {
    StagedAddressCleansStatusFromJSON,
    StagedAddressCleansStatusFromJSONTyped,
    StagedAddressCleansStatusToJSON,
} from './StagedAddressCleansStatus';

/**
 * Provides address information.
 * @export
 * @interface StagedProfileAddressType
 */
export interface StagedProfileAddressType {
    /**
     * 
     * @type {AddressType}
     * @memberof StagedProfileAddressType
     */
    address?: AddressType;
    /**
     * The postal barcode for the address.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    barCode?: string;
    /**
     * 
     * @type {StagedAddressCleansStatus}
     * @memberof StagedProfileAddressType
     */
    cleansStatus?: StagedAddressCleansStatus;
    /**
     * The error in address information in a staged profile with an invalid status
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    errorDescription?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    id?: string;
    /**
     * Inactivation date of the record.
     * @type {Date}
     * @memberof StagedProfileAddressType
     */
    inactiveDate?: Date;
    /**
     * Postal code extension.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    postalCodeExtension?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof StagedProfileAddressType
     */
    type?: string;
}

/**
 * Check if a given object implements the StagedProfileAddressType interface.
 */
export function instanceOfStagedProfileAddressType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileAddressTypeFromJSON(json: any): StagedProfileAddressType {
    return StagedProfileAddressTypeFromJSONTyped(json, false);
}

export function StagedProfileAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileAddressType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressTypeFromJSON(json['address']),
        'barCode': !exists(json, 'barCode') ? undefined : json['barCode'],
        'cleansStatus': !exists(json, 'cleansStatus') ? undefined : StagedAddressCleansStatusFromJSON(json['cleansStatus']),
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : (new Date(json['inactiveDate'])),
        'postalCodeExtension': !exists(json, 'postalCodeExtension') ? undefined : json['postalCodeExtension'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function StagedProfileAddressTypeToJSON(value?: StagedProfileAddressType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressTypeToJSON(value.address),
        'barCode': value.barCode,
        'cleansStatus': StagedAddressCleansStatusToJSON(value.cleansStatus),
        'errorDescription': value.errorDescription,
        'id': value.id,
        'inactiveDate': value.inactiveDate === undefined ? undefined : (value.inactiveDate.toISOString().substring(0,10)),
        'postalCodeExtension': value.postalCodeExtension,
        'type': value.type,
    };
}
