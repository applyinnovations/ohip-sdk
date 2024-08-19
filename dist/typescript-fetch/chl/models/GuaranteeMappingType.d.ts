/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { SystemInfoType } from './SystemInfoType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Base external system mapping info.
 * @export
 * @interface GuaranteeMappingType
 */
export interface GuaranteeMappingType {
    /**
     *
     * @type {TimeSpanType}
     * @memberof GuaranteeMappingType
     */
    dateRange?: TimeSpanType;
    /**
     * Detailed Description of the given entity.
     * @type {string}
     * @memberof GuaranteeMappingType
     */
    description?: string;
    /**
     * Code used in the External System
     * @type {string}
     * @memberof GuaranteeMappingType
     */
    externalSystemCode?: string;
    /**
     * Code used inside the OPERA System
     * @type {string}
     * @memberof GuaranteeMappingType
     */
    localSystemCode?: string;
    /**
     * Requirement code of guarantee.
     * @type {string}
     * @memberof GuaranteeMappingType
     */
    requirementCode?: string;
    /**
     *
     * @type {SystemInfoType}
     * @memberof GuaranteeMappingType
     */
    systemInfo?: SystemInfoType;
}
/**
 * Check if a given object implements the GuaranteeMappingType interface.
 */
export declare function instanceOfGuaranteeMappingType(value: object): boolean;
export declare function GuaranteeMappingTypeFromJSON(json: any): GuaranteeMappingType;
export declare function GuaranteeMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeMappingType;
export declare function GuaranteeMappingTypeToJSON(value?: GuaranteeMappingType | null): any;
