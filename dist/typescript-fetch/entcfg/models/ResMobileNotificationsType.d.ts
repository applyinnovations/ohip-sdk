/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CommunicationStatusType } from './CommunicationStatusType';
/**
 * Contains the status of Room Ready and Key Ready messages.
 * @export
 * @interface ResMobileNotificationsType
 */
export interface ResMobileNotificationsType {
    /**
     * Indicates if the Mobile checkout message is received.
     * @type {boolean}
     * @memberof ResMobileNotificationsType
     */
    checkoutMessageReceived?: boolean;
    /**
     * Error message when Mobile Notification has failed.
     * @type {string}
     * @memberof ResMobileNotificationsType
     */
    errorMessage?: string;
    /**
     *
     * @type {CommunicationStatusType}
     * @memberof ResMobileNotificationsType
     */
    keyReady?: CommunicationStatusType;
    /**
     * Indicates if user action is required. The action could be for sending Room Ready or Key Ready Notification. It could also be for initiating Checkout
     * @type {boolean}
     * @memberof ResMobileNotificationsType
     */
    requiresAction?: boolean;
    /**
     *
     * @type {CommunicationStatusType}
     * @memberof ResMobileNotificationsType
     */
    roomReady?: CommunicationStatusType;
}
/**
 * Check if a given object implements the ResMobileNotificationsType interface.
 */
export declare function instanceOfResMobileNotificationsType(value: object): boolean;
export declare function ResMobileNotificationsTypeFromJSON(json: any): ResMobileNotificationsType;
export declare function ResMobileNotificationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResMobileNotificationsType;
export declare function ResMobileNotificationsTypeToJSON(value?: ResMobileNotificationsType | null): any;
