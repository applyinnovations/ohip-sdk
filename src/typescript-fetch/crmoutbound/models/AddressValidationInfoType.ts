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
/**
 * 
 * @export
 * @interface AddressValidationInfoType
 */
export interface AddressValidationInfoType {
    /**
     * The suggestion that should be presented to the user as a possible match to their input.
     * @type {string}
     * @memberof AddressValidationInfoType
     */
    addressText?: string;
    /**
     * The ID of the address recieved as part of an address search validation.
     * @type {string}
     * @memberof AddressValidationInfoType
     */
    externalAddressId?: string;
    /**
     * If the Type is 'Address' then the Id can be passed to the Retrieve service. Any other Id should be passed as the Container to a further Find request to get more results.
     * @type {string}
     * @memberof AddressValidationInfoType
     */
    addressType?: string;
}

/**
 * Check if a given object implements the AddressValidationInfoType interface.
 */
export function instanceOfAddressValidationInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressValidationInfoTypeFromJSON(json: any): AddressValidationInfoType {
    return AddressValidationInfoTypeFromJSONTyped(json, false);
}

export function AddressValidationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressValidationInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressText': !exists(json, 'addressText') ? undefined : json['addressText'],
        'externalAddressId': !exists(json, 'externalAddressId') ? undefined : json['externalAddressId'],
        'addressType': !exists(json, 'addressType') ? undefined : json['addressType'],
    };
}

export function AddressValidationInfoTypeToJSON(value?: AddressValidationInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressText': value.addressText,
        'externalAddressId': value.externalAddressId,
        'addressType': value.addressType,
    };
}
