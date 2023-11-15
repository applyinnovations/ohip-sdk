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
import type { ECertificateConsumeSourceType } from './ECertificateConsumeSourceType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * E-Certificates details.
 * @export
 * @interface ECertificateConsumptionType
 */
export interface ECertificateConsumptionType {
    /**
     * Property where certificate was consumed for.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    hotelId?: string;
    /**
     *
     * @type {ECertificateConsumeSourceType}
     * @memberof ECertificateConsumptionType
     */
    source?: ECertificateConsumeSourceType;
    /**
     * Last name of the person who consumed the certificate..
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    surname?: string;
    /**
     * First name of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    firstName?: string;
    /**
     * Middle name of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    middleName?: string;
    /**
     * Email of the person who consumed the certificate.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    email?: string;
    /**
     * Date the certificate was consumed.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    date?: string;
    /**
     * Application user who created the consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    userName?: string;
    /**
     * Any notes on the certificate entered at time of consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    userNotes?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ECertificateConsumptionType
     */
    referenceId?: UniqueIDType;
    /**
     * Consumption location type.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    locationType?: string;
    /**
     * Authorization code for consumption.
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    authCode?: string;
    /**
     * Date on which the service is due (arrival date in case of reservation).
     * @type {string}
     * @memberof ECertificateConsumptionType
     */
    serviceDate?: string;
}
/**
 * Check if a given object implements the ECertificateConsumptionType interface.
 */
export declare function instanceOfECertificateConsumptionType(value: object): boolean;
export declare function ECertificateConsumptionTypeFromJSON(json: any): ECertificateConsumptionType;
export declare function ECertificateConsumptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateConsumptionType;
export declare function ECertificateConsumptionTypeToJSON(value?: ECertificateConsumptionType | null): any;
