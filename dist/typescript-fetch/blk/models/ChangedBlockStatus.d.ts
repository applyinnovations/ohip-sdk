/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockType } from './BlockType';
import type { BookingStatusDetailType } from './BookingStatusDetailType';
import type { BookingStatusHistoryType } from './BookingStatusHistoryType';
import type { CancellationDetailsType } from './CancellationDetailsType';
import type { CateringEventsProcessedInfoType } from './CateringEventsProcessedInfoType';
import type { InstanceLink } from './InstanceLink';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningType } from './WarningType';
/**
 * Response object for the request to change block status. Response contains information on the block whose status was successfully changed.
 * @export
 * @interface ChangedBlockStatus
 */
export interface ChangedBlockStatus {
    /**
     * Indicates whether block has any active PM reservations.
     * @type {boolean}
     * @memberof ChangedBlockStatus
     */
    anyActivePMReservations?: boolean;
    /**
     *
     * @type {BlockType}
     * @memberof ChangedBlockStatus
     */
    block?: BlockType;
    /**
     * Next booking status of the business block.
     * @type {Array<BookingStatusDetailType>}
     * @memberof ChangedBlockStatus
     */
    blockNextStatusList?: Array<BookingStatusDetailType>;
    /**
     * Collection of block status history.
     * @type {Array<BookingStatusHistoryType>}
     * @memberof ChangedBlockStatus
     */
    blockStatusChangeHistory?: Array<BookingStatusHistoryType>;
    /**
     *
     * @type {CancellationDetailsType}
     * @memberof ChangedBlockStatus
     */
    cancellationDetails?: CancellationDetailsType;
    /**
     * Status/Info of the processed events.
     * @type {Array<CateringEventsProcessedInfoType>}
     * @memberof ChangedBlockStatus
     */
    cateringEventsProcessedInfo?: Array<CateringEventsProcessedInfoType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChangedBlockStatus
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChangedBlockStatus
     */
    processId?: UniqueIDType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangedBlockStatus
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChangedBlockStatus interface.
 */
export declare function instanceOfChangedBlockStatus(value: object): boolean;
export declare function ChangedBlockStatusFromJSON(json: any): ChangedBlockStatus;
export declare function ChangedBlockStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangedBlockStatus;
export declare function ChangedBlockStatusToJSON(value?: ChangedBlockStatus | null): any;