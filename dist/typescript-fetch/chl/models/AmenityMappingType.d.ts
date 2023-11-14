/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AmenityGroupType } from './AmenityGroupType';
import type { SystemInfoType } from './SystemInfoType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Base external system mapping info.
 * @export
 * @interface AmenityMappingType
 */
export interface AmenityMappingType {
    /**
     *
     * @type {AmenityGroupType}
     * @memberof AmenityMappingType
     */
    amenityGroup?: AmenityGroupType;
    /**
     *
     * @type {TimeSpanType}
     * @memberof AmenityMappingType
     */
    dateRange?: TimeSpanType;
    /**
     * Detailed Description of the given entity.
     * @type {string}
     * @memberof AmenityMappingType
     */
    description?: string;
    /**
     * Code used in the External System
     * @type {string}
     * @memberof AmenityMappingType
     */
    externalSystemCode?: string;
    /**
     * Code used inside the OPERA System
     * @type {string}
     * @memberof AmenityMappingType
     */
    localSystemCode?: string;
    /**
     *
     * @type {SystemInfoType}
     * @memberof AmenityMappingType
     */
    systemInfo?: SystemInfoType;
}
/**
 * Check if a given object implements the AmenityMappingType interface.
 */
export declare function instanceOfAmenityMappingType(value: object): boolean;
export declare function AmenityMappingTypeFromJSON(json: any): AmenityMappingType;
export declare function AmenityMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmenityMappingType;
export declare function AmenityMappingTypeToJSON(value?: AmenityMappingType | null): any;