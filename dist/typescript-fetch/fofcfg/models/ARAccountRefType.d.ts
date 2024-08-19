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
 * AR account Info.
 * @export
 * @interface ARAccountRefType
 */
export interface ARAccountRefType {
    /**
     * The Account Number for the Account.
     * @type {string}
     * @memberof ARAccountRefType
     */
    accountNo?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ARAccountRefType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ARAccountRefType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ARAccountRefType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ARAccountRefType
     */
    instance?: string;
    /**
     * AR account name.
     * @type {string}
     * @memberof ARAccountRefType
     */
    name?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ARAccountRefType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ARAccountRefType
     */
    url?: string;
}
/**
 * Check if a given object implements the ARAccountRefType interface.
 */
export declare function instanceOfARAccountRefType(value: object): boolean;
export declare function ARAccountRefTypeFromJSON(json: any): ARAccountRefType;
export declare function ARAccountRefTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountRefType;
export declare function ARAccountRefTypeToJSON(value?: ARAccountRefType | null): any;
