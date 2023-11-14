/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationECertificateType } from './ReservationECertificateType';
/**
 * Collection of ECertificateType object.
 * @export
 * @interface ReservationECertificatesType
 */
export interface ReservationECertificatesType extends Array<ReservationECertificateType> {
}
/**
 * Check if a given object implements the ReservationECertificatesType interface.
 */
export declare function instanceOfReservationECertificatesType(value: object): boolean;
export declare function ReservationECertificatesTypeFromJSON(json: any): ReservationECertificatesType;
export declare function ReservationECertificatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationECertificatesType;
export declare function ReservationECertificatesTypeToJSON(value?: ReservationECertificatesType | null): any;