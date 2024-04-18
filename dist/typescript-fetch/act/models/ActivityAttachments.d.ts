/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AttachmentType } from './AttachmentType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface ActivityAttachments
 */
export interface ActivityAttachments {
    /**
     * Attachment List.
     * @type {Array<AttachmentType>}
     * @memberof ActivityAttachments
     */
    activityAttachmentList?: Array<AttachmentType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ActivityAttachments
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ActivityAttachments
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ActivityAttachments interface.
 */
export declare function instanceOfActivityAttachments(value: object): boolean;
export declare function ActivityAttachmentsFromJSON(json: any): ActivityAttachments;
export declare function ActivityAttachmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityAttachments;
export declare function ActivityAttachmentsToJSON(value?: ActivityAttachments | null): any;