/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * To hold channel account detailed setup information.
 * @export
 * @interface ChannelAccountSetupDetailsType
 */
export interface ChannelAccountSetupDetailsType {
    /**
     * Chain information where current account is configured with.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    chainCode?: string;
    /**
     * Contract End date.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    contractEndsOn?: string;
    /**
     * Holds Currency code.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    currencyCode?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChannelAccountSetupDetailsType
     */
    hotelCodes?: Array<string>;
    /**
     * The date that account was marked as inactive.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    inactiveDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChannelAccountSetupDetailsType
     */
    instances?: Array<string>;
    /**
     * The rebate date for the account.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    rebateDate?: string;
    /**
     * Property which registered this channel account.
     * @type {string}
     * @memberof ChannelAccountSetupDetailsType
     */
    registeredHotel?: string;
}

/**
 * Check if a given object implements the ChannelAccountSetupDetailsType interface.
 */
export function instanceOfChannelAccountSetupDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelAccountSetupDetailsTypeFromJSON(json: any): ChannelAccountSetupDetailsType {
    return ChannelAccountSetupDetailsTypeFromJSONTyped(json, false);
}

export function ChannelAccountSetupDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountSetupDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'contractEndsOn': !exists(json, 'contractEndsOn') ? undefined : json['contractEndsOn'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelCodes': !exists(json, 'hotelCodes') ? undefined : json['hotelCodes'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'instances': !exists(json, 'instances') ? undefined : json['instances'],
        'rebateDate': !exists(json, 'rebateDate') ? undefined : json['rebateDate'],
        'registeredHotel': !exists(json, 'registeredHotel') ? undefined : json['registeredHotel'],
    };
}

export function ChannelAccountSetupDetailsTypeToJSON(value?: ChannelAccountSetupDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainCode': value.chainCode,
        'contractEndsOn': value.contractEndsOn,
        'currencyCode': value.currencyCode,
        'hotelCodes': value.hotelCodes,
        'inactiveDate': value.inactiveDate,
        'instances': value.instances,
        'rebateDate': value.rebateDate,
        'registeredHotel': value.registeredHotel,
    };
}
