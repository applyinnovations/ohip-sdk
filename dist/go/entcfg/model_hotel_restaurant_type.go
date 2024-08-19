/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the HotelRestaurantType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelRestaurantType{}

// HotelRestaurantType Information about the Restaurants in the hotel.
type HotelRestaurantType struct {
	// The name of the Restaurant.
	RestaurantName *string `json:"restaurantName,omitempty"`
	// The Type of Restaurant.
	RestaurantType *string `json:"restaurantType,omitempty"`
	// The Hours of Operation of the Restaurant.
	Hours *string `json:"hours,omitempty"`
	// The price range of the Restaurant.
	PriceRange *string `json:"priceRange,omitempty"`
	// Comments about the Restaurant.
	Comments *string `json:"comments,omitempty"`
	Category *RestaurantCategoryType `json:"category,omitempty"`
	TimeSpan *TimeSpanType `json:"timeSpan,omitempty"`
	// The new Restaurant Code which is used in the change method.
	NewRestaurantCode *string `json:"newRestaurantCode,omitempty"`
	RestaurantCode *string `json:"restaurantCode,omitempty"`
	OrderBy *int32 `json:"orderBy,omitempty"`
	HotelId *string `json:"hotelId,omitempty"`
}

// NewHotelRestaurantType instantiates a new HotelRestaurantType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelRestaurantType() *HotelRestaurantType {
	this := HotelRestaurantType{}
	return &this
}

// NewHotelRestaurantTypeWithDefaults instantiates a new HotelRestaurantType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelRestaurantTypeWithDefaults() *HotelRestaurantType {
	this := HotelRestaurantType{}
	return &this
}

// GetRestaurantName returns the RestaurantName field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetRestaurantName() string {
	if o == nil || IsNil(o.RestaurantName) {
		var ret string
		return ret
	}
	return *o.RestaurantName
}

// GetRestaurantNameOk returns a tuple with the RestaurantName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetRestaurantNameOk() (*string, bool) {
	if o == nil || IsNil(o.RestaurantName) {
		return nil, false
	}
	return o.RestaurantName, true
}

// HasRestaurantName returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasRestaurantName() bool {
	if o != nil && !IsNil(o.RestaurantName) {
		return true
	}

	return false
}

// SetRestaurantName gets a reference to the given string and assigns it to the RestaurantName field.
func (o *HotelRestaurantType) SetRestaurantName(v string) {
	o.RestaurantName = &v
}

// GetRestaurantType returns the RestaurantType field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetRestaurantType() string {
	if o == nil || IsNil(o.RestaurantType) {
		var ret string
		return ret
	}
	return *o.RestaurantType
}

// GetRestaurantTypeOk returns a tuple with the RestaurantType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetRestaurantTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RestaurantType) {
		return nil, false
	}
	return o.RestaurantType, true
}

// HasRestaurantType returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasRestaurantType() bool {
	if o != nil && !IsNil(o.RestaurantType) {
		return true
	}

	return false
}

// SetRestaurantType gets a reference to the given string and assigns it to the RestaurantType field.
func (o *HotelRestaurantType) SetRestaurantType(v string) {
	o.RestaurantType = &v
}

// GetHours returns the Hours field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetHours() string {
	if o == nil || IsNil(o.Hours) {
		var ret string
		return ret
	}
	return *o.Hours
}

// GetHoursOk returns a tuple with the Hours field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetHoursOk() (*string, bool) {
	if o == nil || IsNil(o.Hours) {
		return nil, false
	}
	return o.Hours, true
}

// HasHours returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasHours() bool {
	if o != nil && !IsNil(o.Hours) {
		return true
	}

	return false
}

// SetHours gets a reference to the given string and assigns it to the Hours field.
func (o *HotelRestaurantType) SetHours(v string) {
	o.Hours = &v
}

// GetPriceRange returns the PriceRange field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetPriceRange() string {
	if o == nil || IsNil(o.PriceRange) {
		var ret string
		return ret
	}
	return *o.PriceRange
}

// GetPriceRangeOk returns a tuple with the PriceRange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetPriceRangeOk() (*string, bool) {
	if o == nil || IsNil(o.PriceRange) {
		return nil, false
	}
	return o.PriceRange, true
}

// HasPriceRange returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasPriceRange() bool {
	if o != nil && !IsNil(o.PriceRange) {
		return true
	}

	return false
}

// SetPriceRange gets a reference to the given string and assigns it to the PriceRange field.
func (o *HotelRestaurantType) SetPriceRange(v string) {
	o.PriceRange = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *HotelRestaurantType) SetComments(v string) {
	o.Comments = &v
}

// GetCategory returns the Category field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetCategory() RestaurantCategoryType {
	if o == nil || IsNil(o.Category) {
		var ret RestaurantCategoryType
		return ret
	}
	return *o.Category
}

// GetCategoryOk returns a tuple with the Category field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetCategoryOk() (*RestaurantCategoryType, bool) {
	if o == nil || IsNil(o.Category) {
		return nil, false
	}
	return o.Category, true
}

// HasCategory returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasCategory() bool {
	if o != nil && !IsNil(o.Category) {
		return true
	}

	return false
}

// SetCategory gets a reference to the given RestaurantCategoryType and assigns it to the Category field.
func (o *HotelRestaurantType) SetCategory(v RestaurantCategoryType) {
	o.Category = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetTimeSpan() TimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret TimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetTimeSpanOk() (*TimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given TimeSpanType and assigns it to the TimeSpan field.
func (o *HotelRestaurantType) SetTimeSpan(v TimeSpanType) {
	o.TimeSpan = &v
}

// GetNewRestaurantCode returns the NewRestaurantCode field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetNewRestaurantCode() string {
	if o == nil || IsNil(o.NewRestaurantCode) {
		var ret string
		return ret
	}
	return *o.NewRestaurantCode
}

// GetNewRestaurantCodeOk returns a tuple with the NewRestaurantCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetNewRestaurantCodeOk() (*string, bool) {
	if o == nil || IsNil(o.NewRestaurantCode) {
		return nil, false
	}
	return o.NewRestaurantCode, true
}

// HasNewRestaurantCode returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasNewRestaurantCode() bool {
	if o != nil && !IsNil(o.NewRestaurantCode) {
		return true
	}

	return false
}

// SetNewRestaurantCode gets a reference to the given string and assigns it to the NewRestaurantCode field.
func (o *HotelRestaurantType) SetNewRestaurantCode(v string) {
	o.NewRestaurantCode = &v
}

// GetRestaurantCode returns the RestaurantCode field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetRestaurantCode() string {
	if o == nil || IsNil(o.RestaurantCode) {
		var ret string
		return ret
	}
	return *o.RestaurantCode
}

// GetRestaurantCodeOk returns a tuple with the RestaurantCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetRestaurantCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RestaurantCode) {
		return nil, false
	}
	return o.RestaurantCode, true
}

// HasRestaurantCode returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasRestaurantCode() bool {
	if o != nil && !IsNil(o.RestaurantCode) {
		return true
	}

	return false
}

// SetRestaurantCode gets a reference to the given string and assigns it to the RestaurantCode field.
func (o *HotelRestaurantType) SetRestaurantCode(v string) {
	o.RestaurantCode = &v
}

// GetOrderBy returns the OrderBy field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetOrderBy() int32 {
	if o == nil || IsNil(o.OrderBy) {
		var ret int32
		return ret
	}
	return *o.OrderBy
}

// GetOrderByOk returns a tuple with the OrderBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetOrderByOk() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy) {
		return nil, false
	}
	return o.OrderBy, true
}

// HasOrderBy returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasOrderBy() bool {
	if o != nil && !IsNil(o.OrderBy) {
		return true
	}

	return false
}

// SetOrderBy gets a reference to the given int32 and assigns it to the OrderBy field.
func (o *HotelRestaurantType) SetOrderBy(v int32) {
	o.OrderBy = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HotelRestaurantType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelRestaurantType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HotelRestaurantType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HotelRestaurantType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o HotelRestaurantType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelRestaurantType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RestaurantName) {
		toSerialize["restaurantName"] = o.RestaurantName
	}
	if !IsNil(o.RestaurantType) {
		toSerialize["restaurantType"] = o.RestaurantType
	}
	if !IsNil(o.Hours) {
		toSerialize["hours"] = o.Hours
	}
	if !IsNil(o.PriceRange) {
		toSerialize["priceRange"] = o.PriceRange
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.Category) {
		toSerialize["category"] = o.Category
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.NewRestaurantCode) {
		toSerialize["newRestaurantCode"] = o.NewRestaurantCode
	}
	if !IsNil(o.RestaurantCode) {
		toSerialize["restaurantCode"] = o.RestaurantCode
	}
	if !IsNil(o.OrderBy) {
		toSerialize["orderBy"] = o.OrderBy
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableHotelRestaurantType struct {
	value *HotelRestaurantType
	isSet bool
}

func (v NullableHotelRestaurantType) Get() *HotelRestaurantType {
	return v.value
}

func (v *NullableHotelRestaurantType) Set(val *HotelRestaurantType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelRestaurantType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelRestaurantType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelRestaurantType(val *HotelRestaurantType) *NullableHotelRestaurantType {
	return &NullableHotelRestaurantType{value: val, isSet: true}
}

func (v NullableHotelRestaurantType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelRestaurantType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


