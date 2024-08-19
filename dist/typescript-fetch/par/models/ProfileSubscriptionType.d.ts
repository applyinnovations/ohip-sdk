/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileId } from './ProfileId';
import type { ProfileSubscriptionTypeProfileInfo } from './ProfileSubscriptionTypeProfileInfo';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Contains details of the profile subscription. The subscription represents the link between the OPERA profile and the external profile within a particular external system
 * @export
 * @interface ProfileSubscriptionType
 */
export interface ProfileSubscriptionType {
    /**
     * Indicates if the profile was distributed to the external system.
     * @type {boolean}
     * @memberof ProfileSubscriptionType
     */
    distributed?: boolean;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ProfileSubscriptionType
     */
    externalProfileId?: UniqueIDType;
    /**
     * Indicates if the profile information should be overwritten by the external system.
     * @type {boolean}
     * @memberof ProfileSubscriptionType
     */
    force?: boolean;
    /**
     * Indicates whether this subscription is active or inactive.
     * @type {boolean}
     * @memberof ProfileSubscriptionType
     */
    inactive?: boolean;
    /**
     * Timestamp of the most recent distribution of this profile to the external system.
     * @type {string}
     * @memberof ProfileSubscriptionType
     */
    lastDistributionDate?: string;
    /**
     * Timestamp of the most recent update of the subscription information by the external system.
     * @type {string}
     * @memberof ProfileSubscriptionType
     */
    lastExternalUpdateDate?: string;
    /**
     *
     * @type {ProfileId}
     * @memberof ProfileSubscriptionType
     */
    profileId?: ProfileId;
    /**
     *
     * @type {ProfileSubscriptionTypeProfileInfo}
     * @memberof ProfileSubscriptionType
     */
    profileInfo?: ProfileSubscriptionTypeProfileInfo;
    /**
     * Timestamp when the profile was subscribed to.
     * @type {string}
     * @memberof ProfileSubscriptionType
     */
    subscriptionDate?: string;
}
/**
 * Check if a given object implements the ProfileSubscriptionType interface.
 */
export declare function instanceOfProfileSubscriptionType(value: object): boolean;
export declare function ProfileSubscriptionTypeFromJSON(json: any): ProfileSubscriptionType;
export declare function ProfileSubscriptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSubscriptionType;
export declare function ProfileSubscriptionTypeToJSON(value?: ProfileSubscriptionType | null): any;
