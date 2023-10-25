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
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';
import type { EmailInfoType } from './EmailInfoType';
import {
    EmailInfoTypeFromJSON,
    EmailInfoTypeFromJSONTyped,
    EmailInfoTypeToJSON,
} from './EmailInfoType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';

/**
 * 
 * @export
 * @interface ConfRecipientInfoType
 */
export interface ConfRecipientInfoType {
    /**
     * 
     * @type {AddressInfoType}
     * @memberof ConfRecipientInfoType
     */
    addressInfo?: AddressInfoType;
    /**
     * 
     * @type {EmailInfoType}
     * @memberof ConfRecipientInfoType
     */
    emailInfo?: EmailInfoType;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof ConfRecipientInfoType
     */
    faxInfo?: TelephoneInfoType;
    /**
     * 
     * @type {ProfileNameType}
     * @memberof ConfRecipientInfoType
     */
    formerName?: ProfileNameType;
    /**
     * 
     * @type {ProfileId}
     * @memberof ConfRecipientInfoType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ProfileTypeType}
     * @memberof ConfRecipientInfoType
     */
    recipientType?: ProfileTypeType;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof ConfRecipientInfoType
     */
    telephoneInfo?: TelephoneInfoType;
}

/**
 * Check if a given object implements the ConfRecipientInfoType interface.
 */
export function instanceOfConfRecipientInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfRecipientInfoTypeFromJSON(json: any): ConfRecipientInfoType {
    return ConfRecipientInfoTypeFromJSONTyped(json, false);
}

export function ConfRecipientInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfRecipientInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressInfo': !exists(json, 'addressInfo') ? undefined : AddressInfoTypeFromJSON(json['addressInfo']),
        'emailInfo': !exists(json, 'emailInfo') ? undefined : EmailInfoTypeFromJSON(json['emailInfo']),
        'faxInfo': !exists(json, 'faxInfo') ? undefined : TelephoneInfoTypeFromJSON(json['faxInfo']),
        'formerName': !exists(json, 'formerName') ? undefined : ProfileNameTypeFromJSON(json['formerName']),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'recipientType': !exists(json, 'recipientType') ? undefined : ProfileTypeTypeFromJSON(json['recipientType']),
        'telephoneInfo': !exists(json, 'telephoneInfo') ? undefined : TelephoneInfoTypeFromJSON(json['telephoneInfo']),
    };
}

export function ConfRecipientInfoTypeToJSON(value?: ConfRecipientInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressInfo': AddressInfoTypeToJSON(value.addressInfo),
        'emailInfo': EmailInfoTypeToJSON(value.emailInfo),
        'faxInfo': TelephoneInfoTypeToJSON(value.faxInfo),
        'formerName': ProfileNameTypeToJSON(value.formerName),
        'profileId': ProfileIdToJSON(value.profileId),
        'recipientType': ProfileTypeTypeToJSON(value.recipientType),
        'telephoneInfo': TelephoneInfoTypeToJSON(value.telephoneInfo),
    };
}

