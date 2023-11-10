/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EmailRecipientsType } from './EmailRecipientsType';
import type { FolioReportCriteriaType } from './FolioReportCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to generate and email a folio report.
 * @export
 * @interface FolioReportToEmail
 */
export interface FolioReportToEmail {
    /**
     *
     * @type {EmailRecipientsType}
     * @memberof FolioReportToEmail
     */
    emailRecipients?: EmailRecipientsType;
    /**
     *
     * @type {FolioReportCriteriaType}
     * @memberof FolioReportToEmail
     */
    folioInfo?: FolioReportCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof FolioReportToEmail
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof FolioReportToEmail
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the FolioReportToEmail interface.
 */
export declare function instanceOfFolioReportToEmail(value: object): boolean;
export declare function FolioReportToEmailFromJSON(json: any): FolioReportToEmail;
export declare function FolioReportToEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioReportToEmail;
export declare function FolioReportToEmailToJSON(value?: FolioReportToEmail | null): any;
