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

// checks if the AvailResponseSegmentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AvailResponseSegmentType{}

// AvailResponseSegmentType struct for AvailResponseSegmentType
type AvailResponseSegmentType struct {
	ChannelInformation *ChannelAvailRSInfoType `json:"channelInformation,omitempty"`
	// If the availability response has a house level restriction, this flag will be true.
	Closed *bool `json:"closed,omitempty"`
	// Total number of rows returned
	Count *int32 `json:"count,omitempty"`
	// Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
	HasMore *bool `json:"hasMore,omitempty"`
	// Hotel Alert Message.
	HotelAlert *string `json:"hotelAlert,omitempty"`
	// Hotel Code whose Rate Plans are returned in the response.
	HotelId *string `json:"hotelId,omitempty"`
	HotelInfo *HotelInfoType `json:"hotelInfo,omitempty"`
	MasterInfo *AvailResponseMasterInfoType `json:"masterInfo,omitempty"`
	// Used to indicate the paging key(rate room) when more rate rooms available.
	PagingKey *string `json:"pagingKey,omitempty"`
	RateChange *RateChangeTypeType `json:"rateChange,omitempty"`
	// Rate Plan Set whose Rate Plans are returned in the response.
	RatePlanSet *string `json:"ratePlanSet,omitempty"`
	// Used to indicate if the Room Rates returned are calculated based on points.
	Redemption *bool `json:"redemption,omitempty"`
	Restriction *MasterRestrictionStatusesType `json:"restriction,omitempty"`
	RoomStays []RoomStayType `json:"roomStays,omitempty"`
	// Total number of rows queried
	TotalResults *int32 `json:"totalResults,omitempty"`
}

// NewAvailResponseSegmentType instantiates a new AvailResponseSegmentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAvailResponseSegmentType() *AvailResponseSegmentType {
	this := AvailResponseSegmentType{}
	return &this
}

// NewAvailResponseSegmentTypeWithDefaults instantiates a new AvailResponseSegmentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAvailResponseSegmentTypeWithDefaults() *AvailResponseSegmentType {
	this := AvailResponseSegmentType{}
	return &this
}

// GetChannelInformation returns the ChannelInformation field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetChannelInformation() ChannelAvailRSInfoType {
	if o == nil || IsNil(o.ChannelInformation) {
		var ret ChannelAvailRSInfoType
		return ret
	}
	return *o.ChannelInformation
}

// GetChannelInformationOk returns a tuple with the ChannelInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetChannelInformationOk() (*ChannelAvailRSInfoType, bool) {
	if o == nil || IsNil(o.ChannelInformation) {
		return nil, false
	}
	return o.ChannelInformation, true
}

// HasChannelInformation returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasChannelInformation() bool {
	if o != nil && !IsNil(o.ChannelInformation) {
		return true
	}

	return false
}

// SetChannelInformation gets a reference to the given ChannelAvailRSInfoType and assigns it to the ChannelInformation field.
func (o *AvailResponseSegmentType) SetChannelInformation(v ChannelAvailRSInfoType) {
	o.ChannelInformation = &v
}

// GetClosed returns the Closed field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetClosed() bool {
	if o == nil || IsNil(o.Closed) {
		var ret bool
		return ret
	}
	return *o.Closed
}

// GetClosedOk returns a tuple with the Closed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetClosedOk() (*bool, bool) {
	if o == nil || IsNil(o.Closed) {
		return nil, false
	}
	return o.Closed, true
}

// HasClosed returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasClosed() bool {
	if o != nil && !IsNil(o.Closed) {
		return true
	}

	return false
}

// SetClosed gets a reference to the given bool and assigns it to the Closed field.
func (o *AvailResponseSegmentType) SetClosed(v bool) {
	o.Closed = &v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *AvailResponseSegmentType) SetCount(v int32) {
	o.Count = &v
}

// GetHasMore returns the HasMore field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetHasMore() bool {
	if o == nil || IsNil(o.HasMore) {
		var ret bool
		return ret
	}
	return *o.HasMore
}

// GetHasMoreOk returns a tuple with the HasMore field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetHasMoreOk() (*bool, bool) {
	if o == nil || IsNil(o.HasMore) {
		return nil, false
	}
	return o.HasMore, true
}

// HasHasMore returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasHasMore() bool {
	if o != nil && !IsNil(o.HasMore) {
		return true
	}

	return false
}

// SetHasMore gets a reference to the given bool and assigns it to the HasMore field.
func (o *AvailResponseSegmentType) SetHasMore(v bool) {
	o.HasMore = &v
}

// GetHotelAlert returns the HotelAlert field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetHotelAlert() string {
	if o == nil || IsNil(o.HotelAlert) {
		var ret string
		return ret
	}
	return *o.HotelAlert
}

// GetHotelAlertOk returns a tuple with the HotelAlert field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetHotelAlertOk() (*string, bool) {
	if o == nil || IsNil(o.HotelAlert) {
		return nil, false
	}
	return o.HotelAlert, true
}

// HasHotelAlert returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasHotelAlert() bool {
	if o != nil && !IsNil(o.HotelAlert) {
		return true
	}

	return false
}

// SetHotelAlert gets a reference to the given string and assigns it to the HotelAlert field.
func (o *AvailResponseSegmentType) SetHotelAlert(v string) {
	o.HotelAlert = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *AvailResponseSegmentType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetHotelInfo returns the HotelInfo field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetHotelInfo() HotelInfoType {
	if o == nil || IsNil(o.HotelInfo) {
		var ret HotelInfoType
		return ret
	}
	return *o.HotelInfo
}

// GetHotelInfoOk returns a tuple with the HotelInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetHotelInfoOk() (*HotelInfoType, bool) {
	if o == nil || IsNil(o.HotelInfo) {
		return nil, false
	}
	return o.HotelInfo, true
}

// HasHotelInfo returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasHotelInfo() bool {
	if o != nil && !IsNil(o.HotelInfo) {
		return true
	}

	return false
}

// SetHotelInfo gets a reference to the given HotelInfoType and assigns it to the HotelInfo field.
func (o *AvailResponseSegmentType) SetHotelInfo(v HotelInfoType) {
	o.HotelInfo = &v
}

// GetMasterInfo returns the MasterInfo field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetMasterInfo() AvailResponseMasterInfoType {
	if o == nil || IsNil(o.MasterInfo) {
		var ret AvailResponseMasterInfoType
		return ret
	}
	return *o.MasterInfo
}

// GetMasterInfoOk returns a tuple with the MasterInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetMasterInfoOk() (*AvailResponseMasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfo) {
		return nil, false
	}
	return o.MasterInfo, true
}

// HasMasterInfo returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasMasterInfo() bool {
	if o != nil && !IsNil(o.MasterInfo) {
		return true
	}

	return false
}

// SetMasterInfo gets a reference to the given AvailResponseMasterInfoType and assigns it to the MasterInfo field.
func (o *AvailResponseSegmentType) SetMasterInfo(v AvailResponseMasterInfoType) {
	o.MasterInfo = &v
}

// GetPagingKey returns the PagingKey field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetPagingKey() string {
	if o == nil || IsNil(o.PagingKey) {
		var ret string
		return ret
	}
	return *o.PagingKey
}

// GetPagingKeyOk returns a tuple with the PagingKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetPagingKeyOk() (*string, bool) {
	if o == nil || IsNil(o.PagingKey) {
		return nil, false
	}
	return o.PagingKey, true
}

// HasPagingKey returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasPagingKey() bool {
	if o != nil && !IsNil(o.PagingKey) {
		return true
	}

	return false
}

// SetPagingKey gets a reference to the given string and assigns it to the PagingKey field.
func (o *AvailResponseSegmentType) SetPagingKey(v string) {
	o.PagingKey = &v
}

// GetRateChange returns the RateChange field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetRateChange() RateChangeTypeType {
	if o == nil || IsNil(o.RateChange) {
		var ret RateChangeTypeType
		return ret
	}
	return *o.RateChange
}

// GetRateChangeOk returns a tuple with the RateChange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetRateChangeOk() (*RateChangeTypeType, bool) {
	if o == nil || IsNil(o.RateChange) {
		return nil, false
	}
	return o.RateChange, true
}

// HasRateChange returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasRateChange() bool {
	if o != nil && !IsNil(o.RateChange) {
		return true
	}

	return false
}

// SetRateChange gets a reference to the given RateChangeTypeType and assigns it to the RateChange field.
func (o *AvailResponseSegmentType) SetRateChange(v RateChangeTypeType) {
	o.RateChange = &v
}

// GetRatePlanSet returns the RatePlanSet field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetRatePlanSet() string {
	if o == nil || IsNil(o.RatePlanSet) {
		var ret string
		return ret
	}
	return *o.RatePlanSet
}

// GetRatePlanSetOk returns a tuple with the RatePlanSet field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetRatePlanSetOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanSet) {
		return nil, false
	}
	return o.RatePlanSet, true
}

// HasRatePlanSet returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasRatePlanSet() bool {
	if o != nil && !IsNil(o.RatePlanSet) {
		return true
	}

	return false
}

// SetRatePlanSet gets a reference to the given string and assigns it to the RatePlanSet field.
func (o *AvailResponseSegmentType) SetRatePlanSet(v string) {
	o.RatePlanSet = &v
}

// GetRedemption returns the Redemption field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetRedemption() bool {
	if o == nil || IsNil(o.Redemption) {
		var ret bool
		return ret
	}
	return *o.Redemption
}

// GetRedemptionOk returns a tuple with the Redemption field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetRedemptionOk() (*bool, bool) {
	if o == nil || IsNil(o.Redemption) {
		return nil, false
	}
	return o.Redemption, true
}

// HasRedemption returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasRedemption() bool {
	if o != nil && !IsNil(o.Redemption) {
		return true
	}

	return false
}

// SetRedemption gets a reference to the given bool and assigns it to the Redemption field.
func (o *AvailResponseSegmentType) SetRedemption(v bool) {
	o.Redemption = &v
}

// GetRestriction returns the Restriction field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetRestriction() MasterRestrictionStatusesType {
	if o == nil || IsNil(o.Restriction) {
		var ret MasterRestrictionStatusesType
		return ret
	}
	return *o.Restriction
}

// GetRestrictionOk returns a tuple with the Restriction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetRestrictionOk() (*MasterRestrictionStatusesType, bool) {
	if o == nil || IsNil(o.Restriction) {
		return nil, false
	}
	return o.Restriction, true
}

// HasRestriction returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasRestriction() bool {
	if o != nil && !IsNil(o.Restriction) {
		return true
	}

	return false
}

// SetRestriction gets a reference to the given MasterRestrictionStatusesType and assigns it to the Restriction field.
func (o *AvailResponseSegmentType) SetRestriction(v MasterRestrictionStatusesType) {
	o.Restriction = &v
}

// GetRoomStays returns the RoomStays field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetRoomStays() []RoomStayType {
	if o == nil || IsNil(o.RoomStays) {
		var ret []RoomStayType
		return ret
	}
	return o.RoomStays
}

// GetRoomStaysOk returns a tuple with the RoomStays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetRoomStaysOk() ([]RoomStayType, bool) {
	if o == nil || IsNil(o.RoomStays) {
		return nil, false
	}
	return o.RoomStays, true
}

// HasRoomStays returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasRoomStays() bool {
	if o != nil && !IsNil(o.RoomStays) {
		return true
	}

	return false
}

// SetRoomStays gets a reference to the given []RoomStayType and assigns it to the RoomStays field.
func (o *AvailResponseSegmentType) SetRoomStays(v []RoomStayType) {
	o.RoomStays = v
}

// GetTotalResults returns the TotalResults field value if set, zero value otherwise.
func (o *AvailResponseSegmentType) GetTotalResults() int32 {
	if o == nil || IsNil(o.TotalResults) {
		var ret int32
		return ret
	}
	return *o.TotalResults
}

// GetTotalResultsOk returns a tuple with the TotalResults field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AvailResponseSegmentType) GetTotalResultsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalResults) {
		return nil, false
	}
	return o.TotalResults, true
}

// HasTotalResults returns a boolean if a field has been set.
func (o *AvailResponseSegmentType) HasTotalResults() bool {
	if o != nil && !IsNil(o.TotalResults) {
		return true
	}

	return false
}

// SetTotalResults gets a reference to the given int32 and assigns it to the TotalResults field.
func (o *AvailResponseSegmentType) SetTotalResults(v int32) {
	o.TotalResults = &v
}

func (o AvailResponseSegmentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AvailResponseSegmentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelInformation) {
		toSerialize["channelInformation"] = o.ChannelInformation
	}
	if !IsNil(o.Closed) {
		toSerialize["closed"] = o.Closed
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.HasMore) {
		toSerialize["hasMore"] = o.HasMore
	}
	if !IsNil(o.HotelAlert) {
		toSerialize["hotelAlert"] = o.HotelAlert
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.HotelInfo) {
		toSerialize["hotelInfo"] = o.HotelInfo
	}
	if !IsNil(o.MasterInfo) {
		toSerialize["masterInfo"] = o.MasterInfo
	}
	if !IsNil(o.PagingKey) {
		toSerialize["pagingKey"] = o.PagingKey
	}
	if !IsNil(o.RateChange) {
		toSerialize["rateChange"] = o.RateChange
	}
	if !IsNil(o.RatePlanSet) {
		toSerialize["ratePlanSet"] = o.RatePlanSet
	}
	if !IsNil(o.Redemption) {
		toSerialize["redemption"] = o.Redemption
	}
	if !IsNil(o.Restriction) {
		toSerialize["restriction"] = o.Restriction
	}
	if !IsNil(o.RoomStays) {
		toSerialize["roomStays"] = o.RoomStays
	}
	if !IsNil(o.TotalResults) {
		toSerialize["totalResults"] = o.TotalResults
	}
	return toSerialize, nil
}

type NullableAvailResponseSegmentType struct {
	value *AvailResponseSegmentType
	isSet bool
}

func (v NullableAvailResponseSegmentType) Get() *AvailResponseSegmentType {
	return v.value
}

func (v *NullableAvailResponseSegmentType) Set(val *AvailResponseSegmentType) {
	v.value = val
	v.isSet = true
}

func (v NullableAvailResponseSegmentType) IsSet() bool {
	return v.isSet
}

func (v *NullableAvailResponseSegmentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAvailResponseSegmentType(val *AvailResponseSegmentType) *NullableAvailResponseSegmentType {
	return &NullableAvailResponseSegmentType{value: val, isSet: true}
}

func (v NullableAvailResponseSegmentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAvailResponseSegmentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


