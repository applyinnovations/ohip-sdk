/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuaranteeConfigType } from './GuaranteeConfigType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object that holds the details of template Guarantee Code to be changed.
 * @export
 * @interface TemplateGuaranteeCodeToBeChanged
 */
export interface TemplateGuaranteeCodeToBeChanged {
    /**
     *
     * @type {Links}
     * @memberof TemplateGuaranteeCodeToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {GuaranteeConfigType}
     * @memberof TemplateGuaranteeCodeToBeChanged
     */
    templateGuaranteeCode?: GuaranteeConfigType;
    /**
     *
     * @type {WarningsType}
     * @memberof TemplateGuaranteeCodeToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TemplateGuaranteeCodeToBeChanged interface.
 */
export declare function instanceOfTemplateGuaranteeCodeToBeChanged(value: object): boolean;
export declare function TemplateGuaranteeCodeToBeChangedFromJSON(json: any): TemplateGuaranteeCodeToBeChanged;
export declare function TemplateGuaranteeCodeToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateGuaranteeCodeToBeChanged;
export declare function TemplateGuaranteeCodeToBeChangedToJSON(value?: TemplateGuaranteeCodeToBeChanged | null): any;
