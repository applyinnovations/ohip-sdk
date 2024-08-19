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
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';
import type { ChannelAccountDetailsType } from './ChannelAccountDetailsType';
import {
    ChannelAccountDetailsTypeFromJSON,
    ChannelAccountDetailsTypeFromJSONTyped,
    ChannelAccountDetailsTypeToJSON,
} from './ChannelAccountDetailsType';
import type { EmailInfoType } from './EmailInfoType';
import {
    EmailInfoTypeFromJSON,
    EmailInfoTypeFromJSONTyped,
    EmailInfoTypeToJSON,
} from './EmailInfoType';
import type { IndicatorType } from './IndicatorType';
import {
    IndicatorTypeFromJSON,
    IndicatorTypeFromJSONTyped,
    IndicatorTypeToJSON,
} from './IndicatorType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * To hold channel account detailed information.
 * @export
 * @interface ChannelAccountSummaryType
 */
export interface ChannelAccountSummaryType {
    /**
     * 
     * @type {ChannelAccountDetailsType}
     * @memberof ChannelAccountSummaryType
     */
    accountDetails?: ChannelAccountDetailsType;
    /**
     * 
     * @type {AddressInfoType}
     * @memberof ChannelAccountSummaryType
     */
    addressInfo?: AddressInfoType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof ChannelAccountSummaryType
     */
    channelAccountIndicators?: Array<IndicatorType>;
    /**
     * Channel account contract ends on date.
     * @type {string}
     * @memberof ChannelAccountSummaryType
     */
    contractEndsOn?: string;
    /**
     * 
     * @type {EmailInfoType}
     * @memberof ChannelAccountSummaryType
     */
    emailInfo?: EmailInfoType;
    /**
     * Property of the Billing Account.
     * @type {string}
     * @memberof ChannelAccountSummaryType
     */
    hotelId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChannelAccountSummaryType
     */
    hotels?: Array<string>;
    /**
     * Indicates whether the account is inactive or not.
     * @type {boolean}
     * @memberof ChannelAccountSummaryType
     */
    inactive?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ChannelAccountSummaryType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof ChannelAccountSummaryType
     */
    telephoneInfo?: TelephoneInfoType;
}

/**
 * Check if a given object implements the ChannelAccountSummaryType interface.
 */
export function instanceOfChannelAccountSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelAccountSummaryTypeFromJSON(json: any): ChannelAccountSummaryType {
    return ChannelAccountSummaryTypeFromJSONTyped(json, false);
}

export function ChannelAccountSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountDetails': !exists(json, 'accountDetails') ? undefined : ChannelAccountDetailsTypeFromJSON(json['accountDetails']),
        'addressInfo': !exists(json, 'addressInfo') ? undefined : AddressInfoTypeFromJSON(json['addressInfo']),
        'channelAccountIndicators': !exists(json, 'channelAccountIndicators') ? undefined : ((json['channelAccountIndicators'] as Array<any>).map(IndicatorTypeFromJSON)),
        'contractEndsOn': !exists(json, 'contractEndsOn') ? undefined : json['contractEndsOn'],
        'emailInfo': !exists(json, 'emailInfo') ? undefined : EmailInfoTypeFromJSON(json['emailInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotels': !exists(json, 'hotels') ? undefined : json['hotels'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'telephoneInfo': !exists(json, 'telephoneInfo') ? undefined : TelephoneInfoTypeFromJSON(json['telephoneInfo']),
    };
}

export function ChannelAccountSummaryTypeToJSON(value?: ChannelAccountSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountDetails': ChannelAccountDetailsTypeToJSON(value.accountDetails),
        'addressInfo': AddressInfoTypeToJSON(value.addressInfo),
        'channelAccountIndicators': value.channelAccountIndicators === undefined ? undefined : ((value.channelAccountIndicators as Array<any>).map(IndicatorTypeToJSON)),
        'contractEndsOn': value.contractEndsOn,
        'emailInfo': EmailInfoTypeToJSON(value.emailInfo),
        'hotelId': value.hotelId,
        'hotels': value.hotels,
        'inactive': value.inactive,
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'telephoneInfo': TelephoneInfoTypeToJSON(value.telephoneInfo),
    };
}

