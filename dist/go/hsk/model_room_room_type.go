/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the RoomRoomType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoomRoomType{}

// RoomRoomType This type represents the primary room attributes.
type RoomRoomType struct {
	// Building associated with the room.
	Building *string `json:"building,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	// Floor of the Room.
	Floor *string `json:"floor,omitempty"`
	// Description for the Floor of the Room.
	FloorDescription *string `json:"floorDescription,omitempty"`
	// Indicates whether the room is accessibility compliant.
	IsAccessible *bool `json:"isAccessible,omitempty"`
	// Indicates whether the room is a Meeting Room
	MeetingRoom *bool `json:"meetingRoom,omitempty"`
	RoomAssignmentRating *RatePlanRatingType `json:"roomAssignmentRating,omitempty"`
	RoomCondition *CodeDescriptionType `json:"roomCondition,omitempty"`
	// Detail Long Description Of The Room.
	RoomDescription *string `json:"roomDescription,omitempty"`
	// A recurring element that identifies the room features.
	RoomFeatures []RoomFeatureType `json:"roomFeatures,omitempty"`
	// Code of the room.
	RoomId *string `json:"roomId,omitempty"`
	RoomType *RoomTypeShortInfoType `json:"roomType,omitempty"`
	// This indicates room smoking preference.
	SmokingPreference *string `json:"smokingPreference,omitempty"`
	// This indicates the description of the room smoking preference.
	SmokingPreferenceDescription *string `json:"smokingPreferenceDescription,omitempty"`
}

// NewRoomRoomType instantiates a new RoomRoomType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoomRoomType() *RoomRoomType {
	this := RoomRoomType{}
	return &this
}

// NewRoomRoomTypeWithDefaults instantiates a new RoomRoomType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoomRoomTypeWithDefaults() *RoomRoomType {
	this := RoomRoomType{}
	return &this
}

// GetBuilding returns the Building field value if set, zero value otherwise.
func (o *RoomRoomType) GetBuilding() string {
	if o == nil || IsNil(o.Building) {
		var ret string
		return ret
	}
	return *o.Building
}

// GetBuildingOk returns a tuple with the Building field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetBuildingOk() (*string, bool) {
	if o == nil || IsNil(o.Building) {
		return nil, false
	}
	return o.Building, true
}

// HasBuilding returns a boolean if a field has been set.
func (o *RoomRoomType) HasBuilding() bool {
	if o != nil && !IsNil(o.Building) {
		return true
	}

	return false
}

// SetBuilding gets a reference to the given string and assigns it to the Building field.
func (o *RoomRoomType) SetBuilding(v string) {
	o.Building = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoomRoomType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoomRoomType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *RoomRoomType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *RoomRoomType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *RoomRoomType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *RoomRoomType) SetFloor(v string) {
	o.Floor = &v
}

// GetFloorDescription returns the FloorDescription field value if set, zero value otherwise.
func (o *RoomRoomType) GetFloorDescription() string {
	if o == nil || IsNil(o.FloorDescription) {
		var ret string
		return ret
	}
	return *o.FloorDescription
}

// GetFloorDescriptionOk returns a tuple with the FloorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetFloorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.FloorDescription) {
		return nil, false
	}
	return o.FloorDescription, true
}

// HasFloorDescription returns a boolean if a field has been set.
func (o *RoomRoomType) HasFloorDescription() bool {
	if o != nil && !IsNil(o.FloorDescription) {
		return true
	}

	return false
}

// SetFloorDescription gets a reference to the given string and assigns it to the FloorDescription field.
func (o *RoomRoomType) SetFloorDescription(v string) {
	o.FloorDescription = &v
}

// GetIsAccessible returns the IsAccessible field value if set, zero value otherwise.
func (o *RoomRoomType) GetIsAccessible() bool {
	if o == nil || IsNil(o.IsAccessible) {
		var ret bool
		return ret
	}
	return *o.IsAccessible
}

// GetIsAccessibleOk returns a tuple with the IsAccessible field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetIsAccessibleOk() (*bool, bool) {
	if o == nil || IsNil(o.IsAccessible) {
		return nil, false
	}
	return o.IsAccessible, true
}

// HasIsAccessible returns a boolean if a field has been set.
func (o *RoomRoomType) HasIsAccessible() bool {
	if o != nil && !IsNil(o.IsAccessible) {
		return true
	}

	return false
}

// SetIsAccessible gets a reference to the given bool and assigns it to the IsAccessible field.
func (o *RoomRoomType) SetIsAccessible(v bool) {
	o.IsAccessible = &v
}

// GetMeetingRoom returns the MeetingRoom field value if set, zero value otherwise.
func (o *RoomRoomType) GetMeetingRoom() bool {
	if o == nil || IsNil(o.MeetingRoom) {
		var ret bool
		return ret
	}
	return *o.MeetingRoom
}

// GetMeetingRoomOk returns a tuple with the MeetingRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetMeetingRoomOk() (*bool, bool) {
	if o == nil || IsNil(o.MeetingRoom) {
		return nil, false
	}
	return o.MeetingRoom, true
}

// HasMeetingRoom returns a boolean if a field has been set.
func (o *RoomRoomType) HasMeetingRoom() bool {
	if o != nil && !IsNil(o.MeetingRoom) {
		return true
	}

	return false
}

// SetMeetingRoom gets a reference to the given bool and assigns it to the MeetingRoom field.
func (o *RoomRoomType) SetMeetingRoom(v bool) {
	o.MeetingRoom = &v
}

// GetRoomAssignmentRating returns the RoomAssignmentRating field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomAssignmentRating() RatePlanRatingType {
	if o == nil || IsNil(o.RoomAssignmentRating) {
		var ret RatePlanRatingType
		return ret
	}
	return *o.RoomAssignmentRating
}

// GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool) {
	if o == nil || IsNil(o.RoomAssignmentRating) {
		return nil, false
	}
	return o.RoomAssignmentRating, true
}

// HasRoomAssignmentRating returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomAssignmentRating() bool {
	if o != nil && !IsNil(o.RoomAssignmentRating) {
		return true
	}

	return false
}

// SetRoomAssignmentRating gets a reference to the given RatePlanRatingType and assigns it to the RoomAssignmentRating field.
func (o *RoomRoomType) SetRoomAssignmentRating(v RatePlanRatingType) {
	o.RoomAssignmentRating = &v
}

// GetRoomCondition returns the RoomCondition field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomCondition() CodeDescriptionType {
	if o == nil || IsNil(o.RoomCondition) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.RoomCondition
}

// GetRoomConditionOk returns a tuple with the RoomCondition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomConditionOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.RoomCondition) {
		return nil, false
	}
	return o.RoomCondition, true
}

// HasRoomCondition returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomCondition() bool {
	if o != nil && !IsNil(o.RoomCondition) {
		return true
	}

	return false
}

// SetRoomCondition gets a reference to the given CodeDescriptionType and assigns it to the RoomCondition field.
func (o *RoomRoomType) SetRoomCondition(v CodeDescriptionType) {
	o.RoomCondition = &v
}

// GetRoomDescription returns the RoomDescription field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomDescription() string {
	if o == nil || IsNil(o.RoomDescription) {
		var ret string
		return ret
	}
	return *o.RoomDescription
}

// GetRoomDescriptionOk returns a tuple with the RoomDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RoomDescription) {
		return nil, false
	}
	return o.RoomDescription, true
}

// HasRoomDescription returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomDescription() bool {
	if o != nil && !IsNil(o.RoomDescription) {
		return true
	}

	return false
}

// SetRoomDescription gets a reference to the given string and assigns it to the RoomDescription field.
func (o *RoomRoomType) SetRoomDescription(v string) {
	o.RoomDescription = &v
}

// GetRoomFeatures returns the RoomFeatures field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomFeatures() []RoomFeatureType {
	if o == nil || IsNil(o.RoomFeatures) {
		var ret []RoomFeatureType
		return ret
	}
	return o.RoomFeatures
}

// GetRoomFeaturesOk returns a tuple with the RoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomFeaturesOk() ([]RoomFeatureType, bool) {
	if o == nil || IsNil(o.RoomFeatures) {
		return nil, false
	}
	return o.RoomFeatures, true
}

// HasRoomFeatures returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomFeatures() bool {
	if o != nil && !IsNil(o.RoomFeatures) {
		return true
	}

	return false
}

// SetRoomFeatures gets a reference to the given []RoomFeatureType and assigns it to the RoomFeatures field.
func (o *RoomRoomType) SetRoomFeatures(v []RoomFeatureType) {
	o.RoomFeatures = v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *RoomRoomType) SetRoomId(v string) {
	o.RoomId = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *RoomRoomType) GetRoomType() RoomTypeShortInfoType {
	if o == nil || IsNil(o.RoomType) {
		var ret RoomTypeShortInfoType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *RoomRoomType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given RoomTypeShortInfoType and assigns it to the RoomType field.
func (o *RoomRoomType) SetRoomType(v RoomTypeShortInfoType) {
	o.RoomType = &v
}

// GetSmokingPreference returns the SmokingPreference field value if set, zero value otherwise.
func (o *RoomRoomType) GetSmokingPreference() string {
	if o == nil || IsNil(o.SmokingPreference) {
		var ret string
		return ret
	}
	return *o.SmokingPreference
}

// GetSmokingPreferenceOk returns a tuple with the SmokingPreference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetSmokingPreferenceOk() (*string, bool) {
	if o == nil || IsNil(o.SmokingPreference) {
		return nil, false
	}
	return o.SmokingPreference, true
}

// HasSmokingPreference returns a boolean if a field has been set.
func (o *RoomRoomType) HasSmokingPreference() bool {
	if o != nil && !IsNil(o.SmokingPreference) {
		return true
	}

	return false
}

// SetSmokingPreference gets a reference to the given string and assigns it to the SmokingPreference field.
func (o *RoomRoomType) SetSmokingPreference(v string) {
	o.SmokingPreference = &v
}

// GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field value if set, zero value otherwise.
func (o *RoomRoomType) GetSmokingPreferenceDescription() string {
	if o == nil || IsNil(o.SmokingPreferenceDescription) {
		var ret string
		return ret
	}
	return *o.SmokingPreferenceDescription
}

// GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoomRoomType) GetSmokingPreferenceDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.SmokingPreferenceDescription) {
		return nil, false
	}
	return o.SmokingPreferenceDescription, true
}

// HasSmokingPreferenceDescription returns a boolean if a field has been set.
func (o *RoomRoomType) HasSmokingPreferenceDescription() bool {
	if o != nil && !IsNil(o.SmokingPreferenceDescription) {
		return true
	}

	return false
}

// SetSmokingPreferenceDescription gets a reference to the given string and assigns it to the SmokingPreferenceDescription field.
func (o *RoomRoomType) SetSmokingPreferenceDescription(v string) {
	o.SmokingPreferenceDescription = &v
}

func (o RoomRoomType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoomRoomType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Building) {
		toSerialize["building"] = o.Building
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.FloorDescription) {
		toSerialize["floorDescription"] = o.FloorDescription
	}
	if !IsNil(o.IsAccessible) {
		toSerialize["isAccessible"] = o.IsAccessible
	}
	if !IsNil(o.MeetingRoom) {
		toSerialize["meetingRoom"] = o.MeetingRoom
	}
	if !IsNil(o.RoomAssignmentRating) {
		toSerialize["roomAssignmentRating"] = o.RoomAssignmentRating
	}
	if !IsNil(o.RoomCondition) {
		toSerialize["roomCondition"] = o.RoomCondition
	}
	if !IsNil(o.RoomDescription) {
		toSerialize["roomDescription"] = o.RoomDescription
	}
	if !IsNil(o.RoomFeatures) {
		toSerialize["roomFeatures"] = o.RoomFeatures
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SmokingPreference) {
		toSerialize["smokingPreference"] = o.SmokingPreference
	}
	if !IsNil(o.SmokingPreferenceDescription) {
		toSerialize["smokingPreferenceDescription"] = o.SmokingPreferenceDescription
	}
	return toSerialize, nil
}

type NullableRoomRoomType struct {
	value *RoomRoomType
	isSet bool
}

func (v NullableRoomRoomType) Get() *RoomRoomType {
	return v.value
}

func (v *NullableRoomRoomType) Set(val *RoomRoomType) {
	v.value = val
	v.isSet = true
}

func (v NullableRoomRoomType) IsSet() bool {
	return v.isSet
}

func (v *NullableRoomRoomType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoomRoomType(val *RoomRoomType) *NullableRoomRoomType {
	return &NullableRoomRoomType{value: val, isSet: true}
}

func (v NullableRoomRoomType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoomRoomType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


