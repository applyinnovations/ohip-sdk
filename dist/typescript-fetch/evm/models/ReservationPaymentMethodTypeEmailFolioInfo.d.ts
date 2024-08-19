/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EmailType } from './EmailType';
/**
 * Information on an email for the customer.
 * @export
 * @interface ReservationPaymentMethodTypeEmailFolioInfo
 */
export interface ReservationPaymentMethodTypeEmailFolioInfo {
    /**
     *
     * @type {EmailType}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    email?: EmailType;
    /**
     *
     * @type {boolean}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    emailFolio?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID elementSpace.
     * @type {string}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    type?: string;
}
/**
 * Check if a given object implements the ReservationPaymentMethodTypeEmailFolioInfo interface.
 */
export declare function instanceOfReservationPaymentMethodTypeEmailFolioInfo(value: object): boolean;
export declare function ReservationPaymentMethodTypeEmailFolioInfoFromJSON(json: any): ReservationPaymentMethodTypeEmailFolioInfo;
export declare function ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPaymentMethodTypeEmailFolioInfo;
export declare function ReservationPaymentMethodTypeEmailFolioInfoToJSON(value?: ReservationPaymentMethodTypeEmailFolioInfo | null): any;
