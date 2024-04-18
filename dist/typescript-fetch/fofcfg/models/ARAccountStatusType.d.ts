/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Type for the Account Status. Status can be restricted and a message/description added to the Account.
 * @export
 * @interface ARAccountStatusType
 */
export interface ARAccountStatusType {
    /**
     * User defined status message on the Account.
     * @type {string}
     * @memberof ARAccountStatusType
     */
    description?: string;
    /**
     * Flag to indicate if the Account is restricted.
     * @type {boolean}
     * @memberof ARAccountStatusType
     */
    restricted?: boolean;
    /**
     * The Restriction Code added on the Account. This is available when the functionality for adding restriction codes is ON.
     * @type {string}
     * @memberof ARAccountStatusType
     */
    restriction?: string;
}
/**
 * Check if a given object implements the ARAccountStatusType interface.
 */
export declare function instanceOfARAccountStatusType(value: object): boolean;
export declare function ARAccountStatusTypeFromJSON(json: any): ARAccountStatusType;
export declare function ARAccountStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountStatusType;
export declare function ARAccountStatusTypeToJSON(value?: ARAccountStatusType | null): any;