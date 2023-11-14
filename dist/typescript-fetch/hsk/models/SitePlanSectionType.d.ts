/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Represents the site plan section record.
 * @export
 * @interface SitePlanSectionType
 */
export interface SitePlanSectionType {
    /**
     * The coordinates for this section.
     * @type {string}
     * @memberof SitePlanSectionType
     */
    coordinates?: string;
    /**
     * The description of this section.
     * @type {string}
     * @memberof SitePlanSectionType
     */
    description?: string;
    /**
     * The link code for the section.
     * @type {string}
     * @memberof SitePlanSectionType
     */
    linkCode?: string;
    /**
     * The site plan section code.
     * @type {string}
     * @memberof SitePlanSectionType
     */
    sectionCode?: string;
    /**
     * The section type.
     * @type {string}
     * @memberof SitePlanSectionType
     */
    sectionType?: string;
}
/**
 * Check if a given object implements the SitePlanSectionType interface.
 */
export declare function instanceOfSitePlanSectionType(value: object): boolean;
export declare function SitePlanSectionTypeFromJSON(json: any): SitePlanSectionType;
export declare function SitePlanSectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SitePlanSectionType;
export declare function SitePlanSectionTypeToJSON(value?: SitePlanSectionType | null): any;