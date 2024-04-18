/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ReservationPackageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationPackageType{}

// ReservationPackageType A ReservationPackageType class.
type ReservationPackageType struct {
	// This is the Award code used to redeem the package if the package is a redemption package.
	AwardCode *string `json:"awardCode,omitempty"`
	ConsumptionDetails *PackageConsumptionType `json:"consumptionDetails,omitempty"`
	// Required value when changing a reservation package. If the original end date was null, then null is required.
	EndDate *string `json:"endDate,omitempty"`
	// Reservation Package Opera Internal Unique Id. This is the unique Id used for this reservation package.
	InternalID *float32 `json:"internalID,omitempty"`
	NewTimeSpan *TimeSpanType `json:"newTimeSpan,omitempty"`
	// Package code. This is the unique code used for the package and is a required element.
	PackageCode *string `json:"packageCode,omitempty"`
	// Package group code. If this package is part of a package group, the group code is indicated here. This is a required element and is part of the key to fetch the correct package record .
	PackageGroup *string `json:"packageGroup,omitempty"`
	PackageHeaderType *PackageCodeHeaderType `json:"packageHeaderType,omitempty"`
	// Indicates the points used to redeem the redemption package.
	Points *int32 `json:"points,omitempty"`
	// The rate code which contains this package. If the package is not part of a rate code, this will be empty. Required element and part of the key to fetch the correct package record on the reservation.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// A HotelPackageSchedule type.
	ScheduleList []ReservationPackageScheduleType `json:"scheduleList,omitempty"`
	Source *ProductSourceType `json:"source,omitempty"`
	// Required value when changing a reservation package. If the original start date was null, then null is required.
	StartDate *string `json:"startDate,omitempty"`
}

// NewReservationPackageType instantiates a new ReservationPackageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationPackageType() *ReservationPackageType {
	this := ReservationPackageType{}
	return &this
}

// NewReservationPackageTypeWithDefaults instantiates a new ReservationPackageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationPackageTypeWithDefaults() *ReservationPackageType {
	this := ReservationPackageType{}
	return &this
}

// GetAwardCode returns the AwardCode field value if set, zero value otherwise.
func (o *ReservationPackageType) GetAwardCode() string {
	if o == nil || IsNil(o.AwardCode) {
		var ret string
		return ret
	}
	return *o.AwardCode
}

// GetAwardCodeOk returns a tuple with the AwardCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetAwardCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AwardCode) {
		return nil, false
	}
	return o.AwardCode, true
}

// HasAwardCode returns a boolean if a field has been set.
func (o *ReservationPackageType) HasAwardCode() bool {
	if o != nil && !IsNil(o.AwardCode) {
		return true
	}

	return false
}

// SetAwardCode gets a reference to the given string and assigns it to the AwardCode field.
func (o *ReservationPackageType) SetAwardCode(v string) {
	o.AwardCode = &v
}

// GetConsumptionDetails returns the ConsumptionDetails field value if set, zero value otherwise.
func (o *ReservationPackageType) GetConsumptionDetails() PackageConsumptionType {
	if o == nil || IsNil(o.ConsumptionDetails) {
		var ret PackageConsumptionType
		return ret
	}
	return *o.ConsumptionDetails
}

// GetConsumptionDetailsOk returns a tuple with the ConsumptionDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetConsumptionDetailsOk() (*PackageConsumptionType, bool) {
	if o == nil || IsNil(o.ConsumptionDetails) {
		return nil, false
	}
	return o.ConsumptionDetails, true
}

// HasConsumptionDetails returns a boolean if a field has been set.
func (o *ReservationPackageType) HasConsumptionDetails() bool {
	if o != nil && !IsNil(o.ConsumptionDetails) {
		return true
	}

	return false
}

// SetConsumptionDetails gets a reference to the given PackageConsumptionType and assigns it to the ConsumptionDetails field.
func (o *ReservationPackageType) SetConsumptionDetails(v PackageConsumptionType) {
	o.ConsumptionDetails = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ReservationPackageType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ReservationPackageType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ReservationPackageType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetInternalID returns the InternalID field value if set, zero value otherwise.
func (o *ReservationPackageType) GetInternalID() float32 {
	if o == nil || IsNil(o.InternalID) {
		var ret float32
		return ret
	}
	return *o.InternalID
}

// GetInternalIDOk returns a tuple with the InternalID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetInternalIDOk() (*float32, bool) {
	if o == nil || IsNil(o.InternalID) {
		return nil, false
	}
	return o.InternalID, true
}

// HasInternalID returns a boolean if a field has been set.
func (o *ReservationPackageType) HasInternalID() bool {
	if o != nil && !IsNil(o.InternalID) {
		return true
	}

	return false
}

// SetInternalID gets a reference to the given float32 and assigns it to the InternalID field.
func (o *ReservationPackageType) SetInternalID(v float32) {
	o.InternalID = &v
}

// GetNewTimeSpan returns the NewTimeSpan field value if set, zero value otherwise.
func (o *ReservationPackageType) GetNewTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.NewTimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.NewTimeSpan
}

// GetNewTimeSpanOk returns a tuple with the NewTimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetNewTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.NewTimeSpan) {
		return nil, false
	}
	return o.NewTimeSpan, true
}

// HasNewTimeSpan returns a boolean if a field has been set.
func (o *ReservationPackageType) HasNewTimeSpan() bool {
	if o != nil && !IsNil(o.NewTimeSpan) {
		return true
	}

	return false
}

// SetNewTimeSpan gets a reference to the given TimeSpanType and assigns it to the NewTimeSpan field.
func (o *ReservationPackageType) SetNewTimeSpan(v TimeSpanType) {
	o.NewTimeSpan = &v
}

// GetPackageCode returns the PackageCode field value if set, zero value otherwise.
func (o *ReservationPackageType) GetPackageCode() string {
	if o == nil || IsNil(o.PackageCode) {
		var ret string
		return ret
	}
	return *o.PackageCode
}

// GetPackageCodeOk returns a tuple with the PackageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetPackageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PackageCode) {
		return nil, false
	}
	return o.PackageCode, true
}

// HasPackageCode returns a boolean if a field has been set.
func (o *ReservationPackageType) HasPackageCode() bool {
	if o != nil && !IsNil(o.PackageCode) {
		return true
	}

	return false
}

// SetPackageCode gets a reference to the given string and assigns it to the PackageCode field.
func (o *ReservationPackageType) SetPackageCode(v string) {
	o.PackageCode = &v
}

// GetPackageGroup returns the PackageGroup field value if set, zero value otherwise.
func (o *ReservationPackageType) GetPackageGroup() string {
	if o == nil || IsNil(o.PackageGroup) {
		var ret string
		return ret
	}
	return *o.PackageGroup
}

// GetPackageGroupOk returns a tuple with the PackageGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetPackageGroupOk() (*string, bool) {
	if o == nil || IsNil(o.PackageGroup) {
		return nil, false
	}
	return o.PackageGroup, true
}

// HasPackageGroup returns a boolean if a field has been set.
func (o *ReservationPackageType) HasPackageGroup() bool {
	if o != nil && !IsNil(o.PackageGroup) {
		return true
	}

	return false
}

// SetPackageGroup gets a reference to the given string and assigns it to the PackageGroup field.
func (o *ReservationPackageType) SetPackageGroup(v string) {
	o.PackageGroup = &v
}

// GetPackageHeaderType returns the PackageHeaderType field value if set, zero value otherwise.
func (o *ReservationPackageType) GetPackageHeaderType() PackageCodeHeaderType {
	if o == nil || IsNil(o.PackageHeaderType) {
		var ret PackageCodeHeaderType
		return ret
	}
	return *o.PackageHeaderType
}

// GetPackageHeaderTypeOk returns a tuple with the PackageHeaderType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetPackageHeaderTypeOk() (*PackageCodeHeaderType, bool) {
	if o == nil || IsNil(o.PackageHeaderType) {
		return nil, false
	}
	return o.PackageHeaderType, true
}

// HasPackageHeaderType returns a boolean if a field has been set.
func (o *ReservationPackageType) HasPackageHeaderType() bool {
	if o != nil && !IsNil(o.PackageHeaderType) {
		return true
	}

	return false
}

// SetPackageHeaderType gets a reference to the given PackageCodeHeaderType and assigns it to the PackageHeaderType field.
func (o *ReservationPackageType) SetPackageHeaderType(v PackageCodeHeaderType) {
	o.PackageHeaderType = &v
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *ReservationPackageType) GetPoints() int32 {
	if o == nil || IsNil(o.Points) {
		var ret int32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *ReservationPackageType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given int32 and assigns it to the Points field.
func (o *ReservationPackageType) SetPoints(v int32) {
	o.Points = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ReservationPackageType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ReservationPackageType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ReservationPackageType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetScheduleList returns the ScheduleList field value if set, zero value otherwise.
func (o *ReservationPackageType) GetScheduleList() []ReservationPackageScheduleType {
	if o == nil || IsNil(o.ScheduleList) {
		var ret []ReservationPackageScheduleType
		return ret
	}
	return o.ScheduleList
}

// GetScheduleListOk returns a tuple with the ScheduleList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetScheduleListOk() ([]ReservationPackageScheduleType, bool) {
	if o == nil || IsNil(o.ScheduleList) {
		return nil, false
	}
	return o.ScheduleList, true
}

// HasScheduleList returns a boolean if a field has been set.
func (o *ReservationPackageType) HasScheduleList() bool {
	if o != nil && !IsNil(o.ScheduleList) {
		return true
	}

	return false
}

// SetScheduleList gets a reference to the given []ReservationPackageScheduleType and assigns it to the ScheduleList field.
func (o *ReservationPackageType) SetScheduleList(v []ReservationPackageScheduleType) {
	o.ScheduleList = v
}

// GetSource returns the Source field value if set, zero value otherwise.
func (o *ReservationPackageType) GetSource() ProductSourceType {
	if o == nil || IsNil(o.Source) {
		var ret ProductSourceType
		return ret
	}
	return *o.Source
}

// GetSourceOk returns a tuple with the Source field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetSourceOk() (*ProductSourceType, bool) {
	if o == nil || IsNil(o.Source) {
		return nil, false
	}
	return o.Source, true
}

// HasSource returns a boolean if a field has been set.
func (o *ReservationPackageType) HasSource() bool {
	if o != nil && !IsNil(o.Source) {
		return true
	}

	return false
}

// SetSource gets a reference to the given ProductSourceType and assigns it to the Source field.
func (o *ReservationPackageType) SetSource(v ProductSourceType) {
	o.Source = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *ReservationPackageType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationPackageType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *ReservationPackageType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *ReservationPackageType) SetStartDate(v string) {
	o.StartDate = &v
}

func (o ReservationPackageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationPackageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardCode) {
		toSerialize["awardCode"] = o.AwardCode
	}
	if !IsNil(o.ConsumptionDetails) {
		toSerialize["consumptionDetails"] = o.ConsumptionDetails
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.InternalID) {
		toSerialize["internalID"] = o.InternalID
	}
	if !IsNil(o.NewTimeSpan) {
		toSerialize["newTimeSpan"] = o.NewTimeSpan
	}
	if !IsNil(o.PackageCode) {
		toSerialize["packageCode"] = o.PackageCode
	}
	if !IsNil(o.PackageGroup) {
		toSerialize["packageGroup"] = o.PackageGroup
	}
	if !IsNil(o.PackageHeaderType) {
		toSerialize["packageHeaderType"] = o.PackageHeaderType
	}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.ScheduleList) {
		toSerialize["scheduleList"] = o.ScheduleList
	}
	if !IsNil(o.Source) {
		toSerialize["source"] = o.Source
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	return toSerialize, nil
}

type NullableReservationPackageType struct {
	value *ReservationPackageType
	isSet bool
}

func (v NullableReservationPackageType) Get() *ReservationPackageType {
	return v.value
}

func (v *NullableReservationPackageType) Set(val *ReservationPackageType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationPackageType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationPackageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationPackageType(val *ReservationPackageType) *NullableReservationPackageType {
	return &NullableReservationPackageType{value: val, isSet: true}
}

func (v NullableReservationPackageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationPackageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

