/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddressInfoType } from './AddressInfoType';
import type { EmailInfoType } from './EmailInfoType';
import type { ProfileId } from './ProfileId';
import type { ProfileNameType } from './ProfileNameType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { TelephoneInfoType } from './TelephoneInfoType';
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
export declare function instanceOfConfRecipientInfoType(value: object): boolean;
export declare function ConfRecipientInfoTypeFromJSON(json: any): ConfRecipientInfoType;
export declare function ConfRecipientInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfRecipientInfoType;
export declare function ConfRecipientInfoTypeToJSON(value?: ConfRecipientInfoType | null): any;
