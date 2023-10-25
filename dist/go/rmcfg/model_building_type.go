/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the BuildingType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BuildingType{}

// BuildingType Building or Building Group details associated with the Hotel.
type BuildingType struct {
	// Building Group to which building belongs to.
	BuildingGroupCode *string `json:"buildingGroupCode,omitempty"`
	// Building Group or Building Code Identifier of the Hotel.
	Code *string `json:"code,omitempty"`
	// Total Credits for all the rooms that belong to this building group.
	Credits *int32 `json:"credits,omitempty"`
	// The description of the Building or Building Group.
	Description *string `json:"description,omitempty"`
	// Hotel Identifier of the Building or Building Group.
	HotelId *string `json:"hotelId,omitempty"`
	Rooms []string `json:"rooms,omitempty"`
	// Building Sequence when task assignment is automatically generated by building.
	Sequence *int32 `json:"sequence,omitempty"`
	// Target Credit for each task sheet created for this building when auto task assignment is broken out by building.
	TargetCredits *int32 `json:"targetCredits,omitempty"`
}

// NewBuildingType instantiates a new BuildingType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBuildingType() *BuildingType {
	this := BuildingType{}
	return &this
}

// NewBuildingTypeWithDefaults instantiates a new BuildingType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBuildingTypeWithDefaults() *BuildingType {
	this := BuildingType{}
	return &this
}

// GetBuildingGroupCode returns the BuildingGroupCode field value if set, zero value otherwise.
func (o *BuildingType) GetBuildingGroupCode() string {
	if o == nil || IsNil(o.BuildingGroupCode) {
		var ret string
		return ret
	}
	return *o.BuildingGroupCode
}

// GetBuildingGroupCodeOk returns a tuple with the BuildingGroupCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetBuildingGroupCodeOk() (*string, bool) {
	if o == nil || IsNil(o.BuildingGroupCode) {
		return nil, false
	}
	return o.BuildingGroupCode, true
}

// HasBuildingGroupCode returns a boolean if a field has been set.
func (o *BuildingType) HasBuildingGroupCode() bool {
	if o != nil && !IsNil(o.BuildingGroupCode) {
		return true
	}

	return false
}

// SetBuildingGroupCode gets a reference to the given string and assigns it to the BuildingGroupCode field.
func (o *BuildingType) SetBuildingGroupCode(v string) {
	o.BuildingGroupCode = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *BuildingType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *BuildingType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *BuildingType) SetCode(v string) {
	o.Code = &v
}

// GetCredits returns the Credits field value if set, zero value otherwise.
func (o *BuildingType) GetCredits() int32 {
	if o == nil || IsNil(o.Credits) {
		var ret int32
		return ret
	}
	return *o.Credits
}

// GetCreditsOk returns a tuple with the Credits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetCreditsOk() (*int32, bool) {
	if o == nil || IsNil(o.Credits) {
		return nil, false
	}
	return o.Credits, true
}

// HasCredits returns a boolean if a field has been set.
func (o *BuildingType) HasCredits() bool {
	if o != nil && !IsNil(o.Credits) {
		return true
	}

	return false
}

// SetCredits gets a reference to the given int32 and assigns it to the Credits field.
func (o *BuildingType) SetCredits(v int32) {
	o.Credits = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *BuildingType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *BuildingType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *BuildingType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *BuildingType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *BuildingType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *BuildingType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRooms returns the Rooms field value if set, zero value otherwise.
func (o *BuildingType) GetRooms() []string {
	if o == nil || IsNil(o.Rooms) {
		var ret []string
		return ret
	}
	return o.Rooms
}

// GetRoomsOk returns a tuple with the Rooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetRoomsOk() ([]string, bool) {
	if o == nil || IsNil(o.Rooms) {
		return nil, false
	}
	return o.Rooms, true
}

// HasRooms returns a boolean if a field has been set.
func (o *BuildingType) HasRooms() bool {
	if o != nil && !IsNil(o.Rooms) {
		return true
	}

	return false
}

// SetRooms gets a reference to the given []string and assigns it to the Rooms field.
func (o *BuildingType) SetRooms(v []string) {
	o.Rooms = v
}

// GetSequence returns the Sequence field value if set, zero value otherwise.
func (o *BuildingType) GetSequence() int32 {
	if o == nil || IsNil(o.Sequence) {
		var ret int32
		return ret
	}
	return *o.Sequence
}

// GetSequenceOk returns a tuple with the Sequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.Sequence) {
		return nil, false
	}
	return o.Sequence, true
}

// HasSequence returns a boolean if a field has been set.
func (o *BuildingType) HasSequence() bool {
	if o != nil && !IsNil(o.Sequence) {
		return true
	}

	return false
}

// SetSequence gets a reference to the given int32 and assigns it to the Sequence field.
func (o *BuildingType) SetSequence(v int32) {
	o.Sequence = &v
}

// GetTargetCredits returns the TargetCredits field value if set, zero value otherwise.
func (o *BuildingType) GetTargetCredits() int32 {
	if o == nil || IsNil(o.TargetCredits) {
		var ret int32
		return ret
	}
	return *o.TargetCredits
}

// GetTargetCreditsOk returns a tuple with the TargetCredits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BuildingType) GetTargetCreditsOk() (*int32, bool) {
	if o == nil || IsNil(o.TargetCredits) {
		return nil, false
	}
	return o.TargetCredits, true
}

// HasTargetCredits returns a boolean if a field has been set.
func (o *BuildingType) HasTargetCredits() bool {
	if o != nil && !IsNil(o.TargetCredits) {
		return true
	}

	return false
}

// SetTargetCredits gets a reference to the given int32 and assigns it to the TargetCredits field.
func (o *BuildingType) SetTargetCredits(v int32) {
	o.TargetCredits = &v
}

func (o BuildingType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BuildingType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BuildingGroupCode) {
		toSerialize["buildingGroupCode"] = o.BuildingGroupCode
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Credits) {
		toSerialize["credits"] = o.Credits
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Rooms) {
		toSerialize["rooms"] = o.Rooms
	}
	if !IsNil(o.Sequence) {
		toSerialize["sequence"] = o.Sequence
	}
	if !IsNil(o.TargetCredits) {
		toSerialize["targetCredits"] = o.TargetCredits
	}
	return toSerialize, nil
}

type NullableBuildingType struct {
	value *BuildingType
	isSet bool
}

func (v NullableBuildingType) Get() *BuildingType {
	return v.value
}

func (v *NullableBuildingType) Set(val *BuildingType) {
	v.value = val
	v.isSet = true
}

func (v NullableBuildingType) IsSet() bool {
	return v.isSet
}

func (v *NullableBuildingType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBuildingType(val *BuildingType) *NullableBuildingType {
	return &NullableBuildingType{value: val, isSet: true}
}

func (v NullableBuildingType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBuildingType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


