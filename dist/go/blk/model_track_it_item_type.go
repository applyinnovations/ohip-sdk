/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the TrackItItemType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TrackItItemType{}

// TrackItItemType Detailed information of a Track It item.
type TrackItItemType struct {
	Action *TrackItActionType `json:"action,omitempty"`
	AssignedTo *ApplicationUserType `json:"assignedTo,omitempty"`
	Description *string `json:"description,omitempty"`
	FollowUpDate *string `json:"followUpDate,omitempty"`
	Group *TrackItGroup `json:"group,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
	Location *CodeDescriptionType `json:"location,omitempty"`
	Quantity *int32 `json:"quantity,omitempty"`
	ReferenceNumber *string `json:"referenceNumber,omitempty"`
	ReservationInfo *TrackItReservationInfoType `json:"reservationInfo,omitempty"`
	TicketNumber *string `json:"ticketNumber,omitempty"`
	TrackItId *TrackItId `json:"trackItId,omitempty"`
	TrackItLogList []TrackItLogType `json:"trackItLogList,omitempty"`
	Type *TrackItType `json:"type,omitempty"`
}

// NewTrackItItemType instantiates a new TrackItItemType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTrackItItemType() *TrackItItemType {
	this := TrackItItemType{}
	return &this
}

// NewTrackItItemTypeWithDefaults instantiates a new TrackItItemType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTrackItItemTypeWithDefaults() *TrackItItemType {
	this := TrackItItemType{}
	return &this
}

// GetAction returns the Action field value if set, zero value otherwise.
func (o *TrackItItemType) GetAction() TrackItActionType {
	if o == nil || IsNil(o.Action) {
		var ret TrackItActionType
		return ret
	}
	return *o.Action
}

// GetActionOk returns a tuple with the Action field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetActionOk() (*TrackItActionType, bool) {
	if o == nil || IsNil(o.Action) {
		return nil, false
	}
	return o.Action, true
}

// HasAction returns a boolean if a field has been set.
func (o *TrackItItemType) HasAction() bool {
	if o != nil && !IsNil(o.Action) {
		return true
	}

	return false
}

// SetAction gets a reference to the given TrackItActionType and assigns it to the Action field.
func (o *TrackItItemType) SetAction(v TrackItActionType) {
	o.Action = &v
}

// GetAssignedTo returns the AssignedTo field value if set, zero value otherwise.
func (o *TrackItItemType) GetAssignedTo() ApplicationUserType {
	if o == nil || IsNil(o.AssignedTo) {
		var ret ApplicationUserType
		return ret
	}
	return *o.AssignedTo
}

// GetAssignedToOk returns a tuple with the AssignedTo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetAssignedToOk() (*ApplicationUserType, bool) {
	if o == nil || IsNil(o.AssignedTo) {
		return nil, false
	}
	return o.AssignedTo, true
}

// HasAssignedTo returns a boolean if a field has been set.
func (o *TrackItItemType) HasAssignedTo() bool {
	if o != nil && !IsNil(o.AssignedTo) {
		return true
	}

	return false
}

// SetAssignedTo gets a reference to the given ApplicationUserType and assigns it to the AssignedTo field.
func (o *TrackItItemType) SetAssignedTo(v ApplicationUserType) {
	o.AssignedTo = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *TrackItItemType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *TrackItItemType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *TrackItItemType) SetDescription(v string) {
	o.Description = &v
}

// GetFollowUpDate returns the FollowUpDate field value if set, zero value otherwise.
func (o *TrackItItemType) GetFollowUpDate() string {
	if o == nil || IsNil(o.FollowUpDate) {
		var ret string
		return ret
	}
	return *o.FollowUpDate
}

// GetFollowUpDateOk returns a tuple with the FollowUpDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetFollowUpDateOk() (*string, bool) {
	if o == nil || IsNil(o.FollowUpDate) {
		return nil, false
	}
	return o.FollowUpDate, true
}

// HasFollowUpDate returns a boolean if a field has been set.
func (o *TrackItItemType) HasFollowUpDate() bool {
	if o != nil && !IsNil(o.FollowUpDate) {
		return true
	}

	return false
}

// SetFollowUpDate gets a reference to the given string and assigns it to the FollowUpDate field.
func (o *TrackItItemType) SetFollowUpDate(v string) {
	o.FollowUpDate = &v
}

// GetGroup returns the Group field value if set, zero value otherwise.
func (o *TrackItItemType) GetGroup() TrackItGroup {
	if o == nil || IsNil(o.Group) {
		var ret TrackItGroup
		return ret
	}
	return *o.Group
}

// GetGroupOk returns a tuple with the Group field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetGroupOk() (*TrackItGroup, bool) {
	if o == nil || IsNil(o.Group) {
		return nil, false
	}
	return o.Group, true
}

// HasGroup returns a boolean if a field has been set.
func (o *TrackItItemType) HasGroup() bool {
	if o != nil && !IsNil(o.Group) {
		return true
	}

	return false
}

// SetGroup gets a reference to the given TrackItGroup and assigns it to the Group field.
func (o *TrackItItemType) SetGroup(v TrackItGroup) {
	o.Group = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *TrackItItemType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *TrackItItemType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *TrackItItemType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLocation returns the Location field value if set, zero value otherwise.
func (o *TrackItItemType) GetLocation() CodeDescriptionType {
	if o == nil || IsNil(o.Location) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Location
}

// GetLocationOk returns a tuple with the Location field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetLocationOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Location) {
		return nil, false
	}
	return o.Location, true
}

// HasLocation returns a boolean if a field has been set.
func (o *TrackItItemType) HasLocation() bool {
	if o != nil && !IsNil(o.Location) {
		return true
	}

	return false
}

// SetLocation gets a reference to the given CodeDescriptionType and assigns it to the Location field.
func (o *TrackItItemType) SetLocation(v CodeDescriptionType) {
	o.Location = &v
}

// GetQuantity returns the Quantity field value if set, zero value otherwise.
func (o *TrackItItemType) GetQuantity() int32 {
	if o == nil || IsNil(o.Quantity) {
		var ret int32
		return ret
	}
	return *o.Quantity
}

// GetQuantityOk returns a tuple with the Quantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.Quantity) {
		return nil, false
	}
	return o.Quantity, true
}

// HasQuantity returns a boolean if a field has been set.
func (o *TrackItItemType) HasQuantity() bool {
	if o != nil && !IsNil(o.Quantity) {
		return true
	}

	return false
}

// SetQuantity gets a reference to the given int32 and assigns it to the Quantity field.
func (o *TrackItItemType) SetQuantity(v int32) {
	o.Quantity = &v
}

// GetReferenceNumber returns the ReferenceNumber field value if set, zero value otherwise.
func (o *TrackItItemType) GetReferenceNumber() string {
	if o == nil || IsNil(o.ReferenceNumber) {
		var ret string
		return ret
	}
	return *o.ReferenceNumber
}

// GetReferenceNumberOk returns a tuple with the ReferenceNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetReferenceNumberOk() (*string, bool) {
	if o == nil || IsNil(o.ReferenceNumber) {
		return nil, false
	}
	return o.ReferenceNumber, true
}

// HasReferenceNumber returns a boolean if a field has been set.
func (o *TrackItItemType) HasReferenceNumber() bool {
	if o != nil && !IsNil(o.ReferenceNumber) {
		return true
	}

	return false
}

// SetReferenceNumber gets a reference to the given string and assigns it to the ReferenceNumber field.
func (o *TrackItItemType) SetReferenceNumber(v string) {
	o.ReferenceNumber = &v
}

// GetReservationInfo returns the ReservationInfo field value if set, zero value otherwise.
func (o *TrackItItemType) GetReservationInfo() TrackItReservationInfoType {
	if o == nil || IsNil(o.ReservationInfo) {
		var ret TrackItReservationInfoType
		return ret
	}
	return *o.ReservationInfo
}

// GetReservationInfoOk returns a tuple with the ReservationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetReservationInfoOk() (*TrackItReservationInfoType, bool) {
	if o == nil || IsNil(o.ReservationInfo) {
		return nil, false
	}
	return o.ReservationInfo, true
}

// HasReservationInfo returns a boolean if a field has been set.
func (o *TrackItItemType) HasReservationInfo() bool {
	if o != nil && !IsNil(o.ReservationInfo) {
		return true
	}

	return false
}

// SetReservationInfo gets a reference to the given TrackItReservationInfoType and assigns it to the ReservationInfo field.
func (o *TrackItItemType) SetReservationInfo(v TrackItReservationInfoType) {
	o.ReservationInfo = &v
}

// GetTicketNumber returns the TicketNumber field value if set, zero value otherwise.
func (o *TrackItItemType) GetTicketNumber() string {
	if o == nil || IsNil(o.TicketNumber) {
		var ret string
		return ret
	}
	return *o.TicketNumber
}

// GetTicketNumberOk returns a tuple with the TicketNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetTicketNumberOk() (*string, bool) {
	if o == nil || IsNil(o.TicketNumber) {
		return nil, false
	}
	return o.TicketNumber, true
}

// HasTicketNumber returns a boolean if a field has been set.
func (o *TrackItItemType) HasTicketNumber() bool {
	if o != nil && !IsNil(o.TicketNumber) {
		return true
	}

	return false
}

// SetTicketNumber gets a reference to the given string and assigns it to the TicketNumber field.
func (o *TrackItItemType) SetTicketNumber(v string) {
	o.TicketNumber = &v
}

// GetTrackItId returns the TrackItId field value if set, zero value otherwise.
func (o *TrackItItemType) GetTrackItId() TrackItId {
	if o == nil || IsNil(o.TrackItId) {
		var ret TrackItId
		return ret
	}
	return *o.TrackItId
}

// GetTrackItIdOk returns a tuple with the TrackItId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetTrackItIdOk() (*TrackItId, bool) {
	if o == nil || IsNil(o.TrackItId) {
		return nil, false
	}
	return o.TrackItId, true
}

// HasTrackItId returns a boolean if a field has been set.
func (o *TrackItItemType) HasTrackItId() bool {
	if o != nil && !IsNil(o.TrackItId) {
		return true
	}

	return false
}

// SetTrackItId gets a reference to the given TrackItId and assigns it to the TrackItId field.
func (o *TrackItItemType) SetTrackItId(v TrackItId) {
	o.TrackItId = &v
}

// GetTrackItLogList returns the TrackItLogList field value if set, zero value otherwise.
func (o *TrackItItemType) GetTrackItLogList() []TrackItLogType {
	if o == nil || IsNil(o.TrackItLogList) {
		var ret []TrackItLogType
		return ret
	}
	return o.TrackItLogList
}

// GetTrackItLogListOk returns a tuple with the TrackItLogList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetTrackItLogListOk() ([]TrackItLogType, bool) {
	if o == nil || IsNil(o.TrackItLogList) {
		return nil, false
	}
	return o.TrackItLogList, true
}

// HasTrackItLogList returns a boolean if a field has been set.
func (o *TrackItItemType) HasTrackItLogList() bool {
	if o != nil && !IsNil(o.TrackItLogList) {
		return true
	}

	return false
}

// SetTrackItLogList gets a reference to the given []TrackItLogType and assigns it to the TrackItLogList field.
func (o *TrackItItemType) SetTrackItLogList(v []TrackItLogType) {
	o.TrackItLogList = v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *TrackItItemType) GetType() TrackItType {
	if o == nil || IsNil(o.Type) {
		var ret TrackItType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TrackItItemType) GetTypeOk() (*TrackItType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *TrackItItemType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given TrackItType and assigns it to the Type field.
func (o *TrackItItemType) SetType(v TrackItType) {
	o.Type = &v
}

func (o TrackItItemType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TrackItItemType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Action) {
		toSerialize["action"] = o.Action
	}
	if !IsNil(o.AssignedTo) {
		toSerialize["assignedTo"] = o.AssignedTo
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FollowUpDate) {
		toSerialize["followUpDate"] = o.FollowUpDate
	}
	if !IsNil(o.Group) {
		toSerialize["group"] = o.Group
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Location) {
		toSerialize["location"] = o.Location
	}
	if !IsNil(o.Quantity) {
		toSerialize["quantity"] = o.Quantity
	}
	if !IsNil(o.ReferenceNumber) {
		toSerialize["referenceNumber"] = o.ReferenceNumber
	}
	if !IsNil(o.ReservationInfo) {
		toSerialize["reservationInfo"] = o.ReservationInfo
	}
	if !IsNil(o.TicketNumber) {
		toSerialize["ticketNumber"] = o.TicketNumber
	}
	if !IsNil(o.TrackItId) {
		toSerialize["trackItId"] = o.TrackItId
	}
	if !IsNil(o.TrackItLogList) {
		toSerialize["trackItLogList"] = o.TrackItLogList
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableTrackItItemType struct {
	value *TrackItItemType
	isSet bool
}

func (v NullableTrackItItemType) Get() *TrackItItemType {
	return v.value
}

func (v *NullableTrackItItemType) Set(val *TrackItItemType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrackItItemType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrackItItemType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrackItItemType(val *TrackItItemType) *NullableTrackItItemType {
	return &NullableTrackItItemType{value: val, isSet: true}
}

func (v NullableTrackItItemType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrackItItemType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


