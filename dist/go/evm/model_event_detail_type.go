/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventDetailType{}

// EventDetailType Pertain Information about the Event Details
type EventDetailType struct {
	// Flag to indicate if the event is booked as a backup for another event.
	AlternateEvent *bool `json:"alternateEvent,omitempty"`
	Attendees *CateringEventsAttendeesType `json:"attendees,omitempty"`
	// Indicates if catering event's spaces are deducted from inventory
	CateringDeductInventory *bool `json:"cateringDeductInventory,omitempty"`
	CateringStatusType *CateringStatusTypeType `json:"cateringStatusType,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Indicates whether display the doorcard information on the Event Overview report.
	DisplayDoorcard *bool `json:"displayDoorcard,omitempty"`
	// It is the group details to display on the outside of a meeting functionSpaceDetails.
	Doorcard *string `json:"doorcard,omitempty"`
	// Flag that indicates if actual revenue can be manually edited.
	EventLevelRevenueActualization *bool `json:"eventLevelRevenueActualization,omitempty"`
	EventLink *CateringEventLinkType `json:"eventLink,omitempty"`
	EventName *TranslationTextType60 `json:"eventName,omitempty"`
	// Flag to indicate if the event is shareable with other events.
	EventShared *bool `json:"eventShared,omitempty"`
	EventStatus *BookingStatusType `json:"eventStatus,omitempty"`
	EventTimeSpan *DateTimeSpanType `json:"eventTimeSpan,omitempty"`
	// Type of event.
	EventType *string `json:"eventType,omitempty"`
	// Field to save the external URL Enterted by the user in the event Overview Section.
	ExternalURL *string `json:"externalURL,omitempty"`
	// Indicates whether the events has postings.
	HasPostings *bool `json:"hasPostings,omitempty"`
	// Inactivation date of the event.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// Flag to indicate if the event space is associated from the Package
	IncludeSpaceInPackage *bool `json:"includeSpaceInPackage,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Indicates whether the event is expected to be noisy and might possibly disturb other events.
	LoudEvent *bool `json:"loudEvent,omitempty"`
	// Indicates whether event is master event.
	MasterEvent *bool `json:"masterEvent,omitempty"`
	MasterEventId *UniqueIDType `json:"masterEventId,omitempty"`
	// Indicates whether event dates and functionSpaceDetails are move able.
	NotMoveable *bool `json:"notMoveable,omitempty"`
	// Package Code of the Event if it has a Package Enabled in it.
	PackageCode *string `json:"packageCode,omitempty"`
	// Flag to indicate if the event is part of a package.
	PackageEvent *bool `json:"packageEvent,omitempty"`
	// Package Id of the Event.
	PackageId *int32 `json:"packageId,omitempty"`
	// Package Name of the Event.
	PackageName *string `json:"packageName,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	// Flag to indicate if the event is a sub event.
	SubEvent *bool `json:"subEvent,omitempty"`
	WaitlistReturnStatus *BookingStatusType `json:"waitlistReturnStatus,omitempty"`
	// Indicates whether event is wait listed.
	Waitlisted *bool `json:"waitlisted,omitempty"`
}

// NewEventDetailType instantiates a new EventDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventDetailType() *EventDetailType {
	this := EventDetailType{}
	return &this
}

// NewEventDetailTypeWithDefaults instantiates a new EventDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventDetailTypeWithDefaults() *EventDetailType {
	this := EventDetailType{}
	return &this
}

// GetAlternateEvent returns the AlternateEvent field value if set, zero value otherwise.
func (o *EventDetailType) GetAlternateEvent() bool {
	if o == nil || IsNil(o.AlternateEvent) {
		var ret bool
		return ret
	}
	return *o.AlternateEvent
}

// GetAlternateEventOk returns a tuple with the AlternateEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetAlternateEventOk() (*bool, bool) {
	if o == nil || IsNil(o.AlternateEvent) {
		return nil, false
	}
	return o.AlternateEvent, true
}

// HasAlternateEvent returns a boolean if a field has been set.
func (o *EventDetailType) HasAlternateEvent() bool {
	if o != nil && !IsNil(o.AlternateEvent) {
		return true
	}

	return false
}

// SetAlternateEvent gets a reference to the given bool and assigns it to the AlternateEvent field.
func (o *EventDetailType) SetAlternateEvent(v bool) {
	o.AlternateEvent = &v
}

// GetAttendees returns the Attendees field value if set, zero value otherwise.
func (o *EventDetailType) GetAttendees() CateringEventsAttendeesType {
	if o == nil || IsNil(o.Attendees) {
		var ret CateringEventsAttendeesType
		return ret
	}
	return *o.Attendees
}

// GetAttendeesOk returns a tuple with the Attendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetAttendeesOk() (*CateringEventsAttendeesType, bool) {
	if o == nil || IsNil(o.Attendees) {
		return nil, false
	}
	return o.Attendees, true
}

// HasAttendees returns a boolean if a field has been set.
func (o *EventDetailType) HasAttendees() bool {
	if o != nil && !IsNil(o.Attendees) {
		return true
	}

	return false
}

// SetAttendees gets a reference to the given CateringEventsAttendeesType and assigns it to the Attendees field.
func (o *EventDetailType) SetAttendees(v CateringEventsAttendeesType) {
	o.Attendees = &v
}

// GetCateringDeductInventory returns the CateringDeductInventory field value if set, zero value otherwise.
func (o *EventDetailType) GetCateringDeductInventory() bool {
	if o == nil || IsNil(o.CateringDeductInventory) {
		var ret bool
		return ret
	}
	return *o.CateringDeductInventory
}

// GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetCateringDeductInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.CateringDeductInventory) {
		return nil, false
	}
	return o.CateringDeductInventory, true
}

// HasCateringDeductInventory returns a boolean if a field has been set.
func (o *EventDetailType) HasCateringDeductInventory() bool {
	if o != nil && !IsNil(o.CateringDeductInventory) {
		return true
	}

	return false
}

// SetCateringDeductInventory gets a reference to the given bool and assigns it to the CateringDeductInventory field.
func (o *EventDetailType) SetCateringDeductInventory(v bool) {
	o.CateringDeductInventory = &v
}

// GetCateringStatusType returns the CateringStatusType field value if set, zero value otherwise.
func (o *EventDetailType) GetCateringStatusType() CateringStatusTypeType {
	if o == nil || IsNil(o.CateringStatusType) {
		var ret CateringStatusTypeType
		return ret
	}
	return *o.CateringStatusType
}

// GetCateringStatusTypeOk returns a tuple with the CateringStatusType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetCateringStatusTypeOk() (*CateringStatusTypeType, bool) {
	if o == nil || IsNil(o.CateringStatusType) {
		return nil, false
	}
	return o.CateringStatusType, true
}

// HasCateringStatusType returns a boolean if a field has been set.
func (o *EventDetailType) HasCateringStatusType() bool {
	if o != nil && !IsNil(o.CateringStatusType) {
		return true
	}

	return false
}

// SetCateringStatusType gets a reference to the given CateringStatusTypeType and assigns it to the CateringStatusType field.
func (o *EventDetailType) SetCateringStatusType(v CateringStatusTypeType) {
	o.CateringStatusType = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *EventDetailType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *EventDetailType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *EventDetailType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *EventDetailType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *EventDetailType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *EventDetailType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetDisplayDoorcard returns the DisplayDoorcard field value if set, zero value otherwise.
func (o *EventDetailType) GetDisplayDoorcard() bool {
	if o == nil || IsNil(o.DisplayDoorcard) {
		var ret bool
		return ret
	}
	return *o.DisplayDoorcard
}

// GetDisplayDoorcardOk returns a tuple with the DisplayDoorcard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetDisplayDoorcardOk() (*bool, bool) {
	if o == nil || IsNil(o.DisplayDoorcard) {
		return nil, false
	}
	return o.DisplayDoorcard, true
}

// HasDisplayDoorcard returns a boolean if a field has been set.
func (o *EventDetailType) HasDisplayDoorcard() bool {
	if o != nil && !IsNil(o.DisplayDoorcard) {
		return true
	}

	return false
}

// SetDisplayDoorcard gets a reference to the given bool and assigns it to the DisplayDoorcard field.
func (o *EventDetailType) SetDisplayDoorcard(v bool) {
	o.DisplayDoorcard = &v
}

// GetDoorcard returns the Doorcard field value if set, zero value otherwise.
func (o *EventDetailType) GetDoorcard() string {
	if o == nil || IsNil(o.Doorcard) {
		var ret string
		return ret
	}
	return *o.Doorcard
}

// GetDoorcardOk returns a tuple with the Doorcard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetDoorcardOk() (*string, bool) {
	if o == nil || IsNil(o.Doorcard) {
		return nil, false
	}
	return o.Doorcard, true
}

// HasDoorcard returns a boolean if a field has been set.
func (o *EventDetailType) HasDoorcard() bool {
	if o != nil && !IsNil(o.Doorcard) {
		return true
	}

	return false
}

// SetDoorcard gets a reference to the given string and assigns it to the Doorcard field.
func (o *EventDetailType) SetDoorcard(v string) {
	o.Doorcard = &v
}

// GetEventLevelRevenueActualization returns the EventLevelRevenueActualization field value if set, zero value otherwise.
func (o *EventDetailType) GetEventLevelRevenueActualization() bool {
	if o == nil || IsNil(o.EventLevelRevenueActualization) {
		var ret bool
		return ret
	}
	return *o.EventLevelRevenueActualization
}

// GetEventLevelRevenueActualizationOk returns a tuple with the EventLevelRevenueActualization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventLevelRevenueActualizationOk() (*bool, bool) {
	if o == nil || IsNil(o.EventLevelRevenueActualization) {
		return nil, false
	}
	return o.EventLevelRevenueActualization, true
}

// HasEventLevelRevenueActualization returns a boolean if a field has been set.
func (o *EventDetailType) HasEventLevelRevenueActualization() bool {
	if o != nil && !IsNil(o.EventLevelRevenueActualization) {
		return true
	}

	return false
}

// SetEventLevelRevenueActualization gets a reference to the given bool and assigns it to the EventLevelRevenueActualization field.
func (o *EventDetailType) SetEventLevelRevenueActualization(v bool) {
	o.EventLevelRevenueActualization = &v
}

// GetEventLink returns the EventLink field value if set, zero value otherwise.
func (o *EventDetailType) GetEventLink() CateringEventLinkType {
	if o == nil || IsNil(o.EventLink) {
		var ret CateringEventLinkType
		return ret
	}
	return *o.EventLink
}

// GetEventLinkOk returns a tuple with the EventLink field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventLinkOk() (*CateringEventLinkType, bool) {
	if o == nil || IsNil(o.EventLink) {
		return nil, false
	}
	return o.EventLink, true
}

// HasEventLink returns a boolean if a field has been set.
func (o *EventDetailType) HasEventLink() bool {
	if o != nil && !IsNil(o.EventLink) {
		return true
	}

	return false
}

// SetEventLink gets a reference to the given CateringEventLinkType and assigns it to the EventLink field.
func (o *EventDetailType) SetEventLink(v CateringEventLinkType) {
	o.EventLink = &v
}

// GetEventName returns the EventName field value if set, zero value otherwise.
func (o *EventDetailType) GetEventName() TranslationTextType60 {
	if o == nil || IsNil(o.EventName) {
		var ret TranslationTextType60
		return ret
	}
	return *o.EventName
}

// GetEventNameOk returns a tuple with the EventName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventNameOk() (*TranslationTextType60, bool) {
	if o == nil || IsNil(o.EventName) {
		return nil, false
	}
	return o.EventName, true
}

// HasEventName returns a boolean if a field has been set.
func (o *EventDetailType) HasEventName() bool {
	if o != nil && !IsNil(o.EventName) {
		return true
	}

	return false
}

// SetEventName gets a reference to the given TranslationTextType60 and assigns it to the EventName field.
func (o *EventDetailType) SetEventName(v TranslationTextType60) {
	o.EventName = &v
}

// GetEventShared returns the EventShared field value if set, zero value otherwise.
func (o *EventDetailType) GetEventShared() bool {
	if o == nil || IsNil(o.EventShared) {
		var ret bool
		return ret
	}
	return *o.EventShared
}

// GetEventSharedOk returns a tuple with the EventShared field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventSharedOk() (*bool, bool) {
	if o == nil || IsNil(o.EventShared) {
		return nil, false
	}
	return o.EventShared, true
}

// HasEventShared returns a boolean if a field has been set.
func (o *EventDetailType) HasEventShared() bool {
	if o != nil && !IsNil(o.EventShared) {
		return true
	}

	return false
}

// SetEventShared gets a reference to the given bool and assigns it to the EventShared field.
func (o *EventDetailType) SetEventShared(v bool) {
	o.EventShared = &v
}

// GetEventStatus returns the EventStatus field value if set, zero value otherwise.
func (o *EventDetailType) GetEventStatus() BookingStatusType {
	if o == nil || IsNil(o.EventStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.EventStatus
}

// GetEventStatusOk returns a tuple with the EventStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.EventStatus) {
		return nil, false
	}
	return o.EventStatus, true
}

// HasEventStatus returns a boolean if a field has been set.
func (o *EventDetailType) HasEventStatus() bool {
	if o != nil && !IsNil(o.EventStatus) {
		return true
	}

	return false
}

// SetEventStatus gets a reference to the given BookingStatusType and assigns it to the EventStatus field.
func (o *EventDetailType) SetEventStatus(v BookingStatusType) {
	o.EventStatus = &v
}

// GetEventTimeSpan returns the EventTimeSpan field value if set, zero value otherwise.
func (o *EventDetailType) GetEventTimeSpan() DateTimeSpanType {
	if o == nil || IsNil(o.EventTimeSpan) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.EventTimeSpan
}

// GetEventTimeSpanOk returns a tuple with the EventTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventTimeSpanOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.EventTimeSpan) {
		return nil, false
	}
	return o.EventTimeSpan, true
}

// HasEventTimeSpan returns a boolean if a field has been set.
func (o *EventDetailType) HasEventTimeSpan() bool {
	if o != nil && !IsNil(o.EventTimeSpan) {
		return true
	}

	return false
}

// SetEventTimeSpan gets a reference to the given DateTimeSpanType and assigns it to the EventTimeSpan field.
func (o *EventDetailType) SetEventTimeSpan(v DateTimeSpanType) {
	o.EventTimeSpan = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *EventDetailType) GetEventType() string {
	if o == nil || IsNil(o.EventType) {
		var ret string
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetEventTypeOk() (*string, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *EventDetailType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given string and assigns it to the EventType field.
func (o *EventDetailType) SetEventType(v string) {
	o.EventType = &v
}

// GetExternalURL returns the ExternalURL field value if set, zero value otherwise.
func (o *EventDetailType) GetExternalURL() string {
	if o == nil || IsNil(o.ExternalURL) {
		var ret string
		return ret
	}
	return *o.ExternalURL
}

// GetExternalURLOk returns a tuple with the ExternalURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetExternalURLOk() (*string, bool) {
	if o == nil || IsNil(o.ExternalURL) {
		return nil, false
	}
	return o.ExternalURL, true
}

// HasExternalURL returns a boolean if a field has been set.
func (o *EventDetailType) HasExternalURL() bool {
	if o != nil && !IsNil(o.ExternalURL) {
		return true
	}

	return false
}

// SetExternalURL gets a reference to the given string and assigns it to the ExternalURL field.
func (o *EventDetailType) SetExternalURL(v string) {
	o.ExternalURL = &v
}

// GetHasPostings returns the HasPostings field value if set, zero value otherwise.
func (o *EventDetailType) GetHasPostings() bool {
	if o == nil || IsNil(o.HasPostings) {
		var ret bool
		return ret
	}
	return *o.HasPostings
}

// GetHasPostingsOk returns a tuple with the HasPostings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetHasPostingsOk() (*bool, bool) {
	if o == nil || IsNil(o.HasPostings) {
		return nil, false
	}
	return o.HasPostings, true
}

// HasHasPostings returns a boolean if a field has been set.
func (o *EventDetailType) HasHasPostings() bool {
	if o != nil && !IsNil(o.HasPostings) {
		return true
	}

	return false
}

// SetHasPostings gets a reference to the given bool and assigns it to the HasPostings field.
func (o *EventDetailType) SetHasPostings(v bool) {
	o.HasPostings = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *EventDetailType) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *EventDetailType) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *EventDetailType) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetIncludeSpaceInPackage returns the IncludeSpaceInPackage field value if set, zero value otherwise.
func (o *EventDetailType) GetIncludeSpaceInPackage() bool {
	if o == nil || IsNil(o.IncludeSpaceInPackage) {
		var ret bool
		return ret
	}
	return *o.IncludeSpaceInPackage
}

// GetIncludeSpaceInPackageOk returns a tuple with the IncludeSpaceInPackage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetIncludeSpaceInPackageOk() (*bool, bool) {
	if o == nil || IsNil(o.IncludeSpaceInPackage) {
		return nil, false
	}
	return o.IncludeSpaceInPackage, true
}

// HasIncludeSpaceInPackage returns a boolean if a field has been set.
func (o *EventDetailType) HasIncludeSpaceInPackage() bool {
	if o != nil && !IsNil(o.IncludeSpaceInPackage) {
		return true
	}

	return false
}

// SetIncludeSpaceInPackage gets a reference to the given bool and assigns it to the IncludeSpaceInPackage field.
func (o *EventDetailType) SetIncludeSpaceInPackage(v bool) {
	o.IncludeSpaceInPackage = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *EventDetailType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *EventDetailType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *EventDetailType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *EventDetailType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *EventDetailType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *EventDetailType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetLoudEvent returns the LoudEvent field value if set, zero value otherwise.
func (o *EventDetailType) GetLoudEvent() bool {
	if o == nil || IsNil(o.LoudEvent) {
		var ret bool
		return ret
	}
	return *o.LoudEvent
}

// GetLoudEventOk returns a tuple with the LoudEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetLoudEventOk() (*bool, bool) {
	if o == nil || IsNil(o.LoudEvent) {
		return nil, false
	}
	return o.LoudEvent, true
}

// HasLoudEvent returns a boolean if a field has been set.
func (o *EventDetailType) HasLoudEvent() bool {
	if o != nil && !IsNil(o.LoudEvent) {
		return true
	}

	return false
}

// SetLoudEvent gets a reference to the given bool and assigns it to the LoudEvent field.
func (o *EventDetailType) SetLoudEvent(v bool) {
	o.LoudEvent = &v
}

// GetMasterEvent returns the MasterEvent field value if set, zero value otherwise.
func (o *EventDetailType) GetMasterEvent() bool {
	if o == nil || IsNil(o.MasterEvent) {
		var ret bool
		return ret
	}
	return *o.MasterEvent
}

// GetMasterEventOk returns a tuple with the MasterEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetMasterEventOk() (*bool, bool) {
	if o == nil || IsNil(o.MasterEvent) {
		return nil, false
	}
	return o.MasterEvent, true
}

// HasMasterEvent returns a boolean if a field has been set.
func (o *EventDetailType) HasMasterEvent() bool {
	if o != nil && !IsNil(o.MasterEvent) {
		return true
	}

	return false
}

// SetMasterEvent gets a reference to the given bool and assigns it to the MasterEvent field.
func (o *EventDetailType) SetMasterEvent(v bool) {
	o.MasterEvent = &v
}

// GetMasterEventId returns the MasterEventId field value if set, zero value otherwise.
func (o *EventDetailType) GetMasterEventId() UniqueIDType {
	if o == nil || IsNil(o.MasterEventId) {
		var ret UniqueIDType
		return ret
	}
	return *o.MasterEventId
}

// GetMasterEventIdOk returns a tuple with the MasterEventId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetMasterEventIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.MasterEventId) {
		return nil, false
	}
	return o.MasterEventId, true
}

// HasMasterEventId returns a boolean if a field has been set.
func (o *EventDetailType) HasMasterEventId() bool {
	if o != nil && !IsNil(o.MasterEventId) {
		return true
	}

	return false
}

// SetMasterEventId gets a reference to the given UniqueIDType and assigns it to the MasterEventId field.
func (o *EventDetailType) SetMasterEventId(v UniqueIDType) {
	o.MasterEventId = &v
}

// GetNotMoveable returns the NotMoveable field value if set, zero value otherwise.
func (o *EventDetailType) GetNotMoveable() bool {
	if o == nil || IsNil(o.NotMoveable) {
		var ret bool
		return ret
	}
	return *o.NotMoveable
}

// GetNotMoveableOk returns a tuple with the NotMoveable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetNotMoveableOk() (*bool, bool) {
	if o == nil || IsNil(o.NotMoveable) {
		return nil, false
	}
	return o.NotMoveable, true
}

// HasNotMoveable returns a boolean if a field has been set.
func (o *EventDetailType) HasNotMoveable() bool {
	if o != nil && !IsNil(o.NotMoveable) {
		return true
	}

	return false
}

// SetNotMoveable gets a reference to the given bool and assigns it to the NotMoveable field.
func (o *EventDetailType) SetNotMoveable(v bool) {
	o.NotMoveable = &v
}

// GetPackageCode returns the PackageCode field value if set, zero value otherwise.
func (o *EventDetailType) GetPackageCode() string {
	if o == nil || IsNil(o.PackageCode) {
		var ret string
		return ret
	}
	return *o.PackageCode
}

// GetPackageCodeOk returns a tuple with the PackageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetPackageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageCode) {
		return nil, false
	}
	return o.PackageCode, true
}

// HasPackageCode returns a boolean if a field has been set.
func (o *EventDetailType) HasPackageCode() bool {
	if o != nil && !IsNil(o.PackageCode) {
		return true
	}

	return false
}

// SetPackageCode gets a reference to the given string and assigns it to the PackageCode field.
func (o *EventDetailType) SetPackageCode(v string) {
	o.PackageCode = &v
}

// GetPackageEvent returns the PackageEvent field value if set, zero value otherwise.
func (o *EventDetailType) GetPackageEvent() bool {
	if o == nil || IsNil(o.PackageEvent) {
		var ret bool
		return ret
	}
	return *o.PackageEvent
}

// GetPackageEventOk returns a tuple with the PackageEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetPackageEventOk() (*bool, bool) {
	if o == nil || IsNil(o.PackageEvent) {
		return nil, false
	}
	return o.PackageEvent, true
}

// HasPackageEvent returns a boolean if a field has been set.
func (o *EventDetailType) HasPackageEvent() bool {
	if o != nil && !IsNil(o.PackageEvent) {
		return true
	}

	return false
}

// SetPackageEvent gets a reference to the given bool and assigns it to the PackageEvent field.
func (o *EventDetailType) SetPackageEvent(v bool) {
	o.PackageEvent = &v
}

// GetPackageId returns the PackageId field value if set, zero value otherwise.
func (o *EventDetailType) GetPackageId() int32 {
	if o == nil || IsNil(o.PackageId) {
		var ret int32
		return ret
	}
	return *o.PackageId
}

// GetPackageIdOk returns a tuple with the PackageId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetPackageIdOk() (*int32, bool) {
	if o == nil || IsNil(o.PackageId) {
		return nil, false
	}
	return o.PackageId, true
}

// HasPackageId returns a boolean if a field has been set.
func (o *EventDetailType) HasPackageId() bool {
	if o != nil && !IsNil(o.PackageId) {
		return true
	}

	return false
}

// SetPackageId gets a reference to the given int32 and assigns it to the PackageId field.
func (o *EventDetailType) SetPackageId(v int32) {
	o.PackageId = &v
}

// GetPackageName returns the PackageName field value if set, zero value otherwise.
func (o *EventDetailType) GetPackageName() string {
	if o == nil || IsNil(o.PackageName) {
		var ret string
		return ret
	}
	return *o.PackageName
}

// GetPackageNameOk returns a tuple with the PackageName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetPackageNameOk() (*string, bool) {
	if o == nil || IsNil(o.PackageName) {
		return nil, false
	}
	return o.PackageName, true
}

// HasPackageName returns a boolean if a field has been set.
func (o *EventDetailType) HasPackageName() bool {
	if o != nil && !IsNil(o.PackageName) {
		return true
	}

	return false
}

// SetPackageName gets a reference to the given string and assigns it to the PackageName field.
func (o *EventDetailType) SetPackageName(v string) {
	o.PackageName = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *EventDetailType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *EventDetailType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *EventDetailType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetSubEvent returns the SubEvent field value if set, zero value otherwise.
func (o *EventDetailType) GetSubEvent() bool {
	if o == nil || IsNil(o.SubEvent) {
		var ret bool
		return ret
	}
	return *o.SubEvent
}

// GetSubEventOk returns a tuple with the SubEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetSubEventOk() (*bool, bool) {
	if o == nil || IsNil(o.SubEvent) {
		return nil, false
	}
	return o.SubEvent, true
}

// HasSubEvent returns a boolean if a field has been set.
func (o *EventDetailType) HasSubEvent() bool {
	if o != nil && !IsNil(o.SubEvent) {
		return true
	}

	return false
}

// SetSubEvent gets a reference to the given bool and assigns it to the SubEvent field.
func (o *EventDetailType) SetSubEvent(v bool) {
	o.SubEvent = &v
}

// GetWaitlistReturnStatus returns the WaitlistReturnStatus field value if set, zero value otherwise.
func (o *EventDetailType) GetWaitlistReturnStatus() BookingStatusType {
	if o == nil || IsNil(o.WaitlistReturnStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.WaitlistReturnStatus
}

// GetWaitlistReturnStatusOk returns a tuple with the WaitlistReturnStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetWaitlistReturnStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.WaitlistReturnStatus) {
		return nil, false
	}
	return o.WaitlistReturnStatus, true
}

// HasWaitlistReturnStatus returns a boolean if a field has been set.
func (o *EventDetailType) HasWaitlistReturnStatus() bool {
	if o != nil && !IsNil(o.WaitlistReturnStatus) {
		return true
	}

	return false
}

// SetWaitlistReturnStatus gets a reference to the given BookingStatusType and assigns it to the WaitlistReturnStatus field.
func (o *EventDetailType) SetWaitlistReturnStatus(v BookingStatusType) {
	o.WaitlistReturnStatus = &v
}

// GetWaitlisted returns the Waitlisted field value if set, zero value otherwise.
func (o *EventDetailType) GetWaitlisted() bool {
	if o == nil || IsNil(o.Waitlisted) {
		var ret bool
		return ret
	}
	return *o.Waitlisted
}

// GetWaitlistedOk returns a tuple with the Waitlisted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventDetailType) GetWaitlistedOk() (*bool, bool) {
	if o == nil || IsNil(o.Waitlisted) {
		return nil, false
	}
	return o.Waitlisted, true
}

// HasWaitlisted returns a boolean if a field has been set.
func (o *EventDetailType) HasWaitlisted() bool {
	if o != nil && !IsNil(o.Waitlisted) {
		return true
	}

	return false
}

// SetWaitlisted gets a reference to the given bool and assigns it to the Waitlisted field.
func (o *EventDetailType) SetWaitlisted(v bool) {
	o.Waitlisted = &v
}

func (o EventDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AlternateEvent) {
		toSerialize["alternateEvent"] = o.AlternateEvent
	}
	if !IsNil(o.Attendees) {
		toSerialize["attendees"] = o.Attendees
	}
	if !IsNil(o.CateringDeductInventory) {
		toSerialize["cateringDeductInventory"] = o.CateringDeductInventory
	}
	if !IsNil(o.CateringStatusType) {
		toSerialize["cateringStatusType"] = o.CateringStatusType
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.DisplayDoorcard) {
		toSerialize["displayDoorcard"] = o.DisplayDoorcard
	}
	if !IsNil(o.Doorcard) {
		toSerialize["doorcard"] = o.Doorcard
	}
	if !IsNil(o.EventLevelRevenueActualization) {
		toSerialize["eventLevelRevenueActualization"] = o.EventLevelRevenueActualization
	}
	if !IsNil(o.EventLink) {
		toSerialize["eventLink"] = o.EventLink
	}
	if !IsNil(o.EventName) {
		toSerialize["eventName"] = o.EventName
	}
	if !IsNil(o.EventShared) {
		toSerialize["eventShared"] = o.EventShared
	}
	if !IsNil(o.EventStatus) {
		toSerialize["eventStatus"] = o.EventStatus
	}
	if !IsNil(o.EventTimeSpan) {
		toSerialize["eventTimeSpan"] = o.EventTimeSpan
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.ExternalURL) {
		toSerialize["externalURL"] = o.ExternalURL
	}
	if !IsNil(o.HasPostings) {
		toSerialize["hasPostings"] = o.HasPostings
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.IncludeSpaceInPackage) {
		toSerialize["includeSpaceInPackage"] = o.IncludeSpaceInPackage
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.LoudEvent) {
		toSerialize["loudEvent"] = o.LoudEvent
	}
	if !IsNil(o.MasterEvent) {
		toSerialize["masterEvent"] = o.MasterEvent
	}
	if !IsNil(o.MasterEventId) {
		toSerialize["masterEventId"] = o.MasterEventId
	}
	if !IsNil(o.NotMoveable) {
		toSerialize["notMoveable"] = o.NotMoveable
	}
	if !IsNil(o.PackageCode) {
		toSerialize["packageCode"] = o.PackageCode
	}
	if !IsNil(o.PackageEvent) {
		toSerialize["packageEvent"] = o.PackageEvent
	}
	if !IsNil(o.PackageId) {
		toSerialize["packageId"] = o.PackageId
	}
	if !IsNil(o.PackageName) {
		toSerialize["packageName"] = o.PackageName
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.SubEvent) {
		toSerialize["subEvent"] = o.SubEvent
	}
	if !IsNil(o.WaitlistReturnStatus) {
		toSerialize["waitlistReturnStatus"] = o.WaitlistReturnStatus
	}
	if !IsNil(o.Waitlisted) {
		toSerialize["waitlisted"] = o.Waitlisted
	}
	return toSerialize, nil
}

type NullableEventDetailType struct {
	value *EventDetailType
	isSet bool
}

func (v NullableEventDetailType) Get() *EventDetailType {
	return v.value
}

func (v *NullableEventDetailType) Set(val *EventDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventDetailType(val *EventDetailType) *NullableEventDetailType {
	return &NullableEventDetailType{value: val, isSet: true}
}

func (v NullableEventDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


