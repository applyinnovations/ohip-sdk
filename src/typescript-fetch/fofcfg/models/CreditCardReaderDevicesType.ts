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
/**
 * Supported credit card reader devices.
 * @export
 * @interface CreditCardReaderDevicesType
 */
export interface CreditCardReaderDevicesType {
    /**
     * Description of the device.
     * @type {string}
     * @memberof CreditCardReaderDevicesType
     */
    description?: string;
    /**
     * Device ID assigned to the credit card reader device.
     * @type {number}
     * @memberof CreditCardReaderDevicesType
     */
    deviceId?: number;
    /**
     * A flag indicating whether the data from the device is encrypted or not.
     * @type {boolean}
     * @memberof CreditCardReaderDevicesType
     */
    secureDevice?: boolean;
    /**
     * The Regular Expression pattern of the track data that is generated by this device.
     * @type {string}
     * @memberof CreditCardReaderDevicesType
     */
    trackDataPattern?: string;
}

/**
 * Check if a given object implements the CreditCardReaderDevicesType interface.
 */
export function instanceOfCreditCardReaderDevicesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreditCardReaderDevicesTypeFromJSON(json: any): CreditCardReaderDevicesType {
    return CreditCardReaderDevicesTypeFromJSONTyped(json, false);
}

export function CreditCardReaderDevicesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditCardReaderDevicesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'secureDevice': !exists(json, 'secureDevice') ? undefined : json['secureDevice'],
        'trackDataPattern': !exists(json, 'trackDataPattern') ? undefined : json['trackDataPattern'],
    };
}

export function CreditCardReaderDevicesTypeToJSON(value?: CreditCardReaderDevicesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'deviceId': value.deviceId,
        'secureDevice': value.secureDevice,
        'trackDataPattern': value.trackDataPattern,
    };
}
