/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ResCommunicationTypeEmails } from './ResCommunicationTypeEmails';
import type { ResCommunicationTypeTelephones } from './ResCommunicationTypeTelephones';
/**
 * Communication details for a reservation.
 * @export
 * @interface ResCommunicationType
 */
export interface ResCommunicationType {
    /**
     *
     * @type {ResCommunicationTypeEmails}
     * @memberof ResCommunicationType
     */
    emails?: ResCommunicationTypeEmails;
    /**
     *
     * @type {ResCommunicationTypeTelephones}
     * @memberof ResCommunicationType
     */
    telephones?: ResCommunicationTypeTelephones;
}
/**
 * Check if a given object implements the ResCommunicationType interface.
 */
export declare function instanceOfResCommunicationType(value: object): boolean;
export declare function ResCommunicationTypeFromJSON(json: any): ResCommunicationType;
export declare function ResCommunicationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCommunicationType;
export declare function ResCommunicationTypeToJSON(value?: ResCommunicationType | null): any;
