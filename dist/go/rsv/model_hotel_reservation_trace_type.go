/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the HotelReservationTraceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelReservationTraceType{}

// HotelReservationTraceType Extended Trace object to hold information for a reservation.
type HotelReservationTraceType struct {
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Indicates the Department code.
	DepartmentId *string `json:"departmentId,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// Additional identifying value assigned by the creating system.
	IdExtension *int32 `json:"idExtension,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	ResolveInfo *TraceResolveType `json:"resolveInfo,omitempty"`
	TimeInfo *TraceTimeInfoType `json:"timeInfo,omitempty"`
	// The information this trace contains.
	TraceText *string `json:"traceText,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewHotelReservationTraceType instantiates a new HotelReservationTraceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelReservationTraceType() *HotelReservationTraceType {
	this := HotelReservationTraceType{}
	return &this
}

// NewHotelReservationTraceTypeWithDefaults instantiates a new HotelReservationTraceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelReservationTraceTypeWithDefaults() *HotelReservationTraceType {
	this := HotelReservationTraceType{}
	return &this
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *HotelReservationTraceType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *HotelReservationTraceType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetDepartmentId returns the DepartmentId field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetDepartmentId() string {
	if o == nil || IsNil(o.DepartmentId) {
		var ret string
		return ret
	}
	return *o.DepartmentId
}

// GetDepartmentIdOk returns a tuple with the DepartmentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetDepartmentIdOk() (*string, bool) {
	if o == nil || IsNil(o.DepartmentId) {
		return nil, false
	}
	return o.DepartmentId, true
}

// HasDepartmentId returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasDepartmentId() bool {
	if o != nil && !IsNil(o.DepartmentId) {
		return true
	}

	return false
}

// SetDepartmentId gets a reference to the given string and assigns it to the DepartmentId field.
func (o *HotelReservationTraceType) SetDepartmentId(v string) {
	o.DepartmentId = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *HotelReservationTraceType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *HotelReservationTraceType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *HotelReservationTraceType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *HotelReservationTraceType) SetInstance(v string) {
	o.Instance = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *HotelReservationTraceType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *HotelReservationTraceType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *HotelReservationTraceType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *HotelReservationTraceType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetResolveInfo returns the ResolveInfo field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetResolveInfo() TraceResolveType {
	if o == nil || IsNil(o.ResolveInfo) {
		var ret TraceResolveType
		return ret
	}
	return *o.ResolveInfo
}

// GetResolveInfoOk returns a tuple with the ResolveInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetResolveInfoOk() (*TraceResolveType, bool) {
	if o == nil || IsNil(o.ResolveInfo) {
		return nil, false
	}
	return o.ResolveInfo, true
}

// HasResolveInfo returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasResolveInfo() bool {
	if o != nil && !IsNil(o.ResolveInfo) {
		return true
	}

	return false
}

// SetResolveInfo gets a reference to the given TraceResolveType and assigns it to the ResolveInfo field.
func (o *HotelReservationTraceType) SetResolveInfo(v TraceResolveType) {
	o.ResolveInfo = &v
}

// GetTimeInfo returns the TimeInfo field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetTimeInfo() TraceTimeInfoType {
	if o == nil || IsNil(o.TimeInfo) {
		var ret TraceTimeInfoType
		return ret
	}
	return *o.TimeInfo
}

// GetTimeInfoOk returns a tuple with the TimeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetTimeInfoOk() (*TraceTimeInfoType, bool) {
	if o == nil || IsNil(o.TimeInfo) {
		return nil, false
	}
	return o.TimeInfo, true
}

// HasTimeInfo returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasTimeInfo() bool {
	if o != nil && !IsNil(o.TimeInfo) {
		return true
	}

	return false
}

// SetTimeInfo gets a reference to the given TraceTimeInfoType and assigns it to the TimeInfo field.
func (o *HotelReservationTraceType) SetTimeInfo(v TraceTimeInfoType) {
	o.TimeInfo = &v
}

// GetTraceText returns the TraceText field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetTraceText() string {
	if o == nil || IsNil(o.TraceText) {
		var ret string
		return ret
	}
	return *o.TraceText
}

// GetTraceTextOk returns a tuple with the TraceText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetTraceTextOk() (*string, bool) {
	if o == nil || IsNil(o.TraceText) {
		return nil, false
	}
	return o.TraceText, true
}

// HasTraceText returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasTraceText() bool {
	if o != nil && !IsNil(o.TraceText) {
		return true
	}

	return false
}

// SetTraceText gets a reference to the given string and assigns it to the TraceText field.
func (o *HotelReservationTraceType) SetTraceText(v string) {
	o.TraceText = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *HotelReservationTraceType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *HotelReservationTraceType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelReservationTraceType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *HotelReservationTraceType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *HotelReservationTraceType) SetUrl(v string) {
	o.Url = &v
}

func (o HotelReservationTraceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelReservationTraceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.DepartmentId) {
		toSerialize["departmentId"] = o.DepartmentId
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ResolveInfo) {
		toSerialize["resolveInfo"] = o.ResolveInfo
	}
	if !IsNil(o.TimeInfo) {
		toSerialize["timeInfo"] = o.TimeInfo
	}
	if !IsNil(o.TraceText) {
		toSerialize["traceText"] = o.TraceText
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableHotelReservationTraceType struct {
	value *HotelReservationTraceType
	isSet bool
}

func (v NullableHotelReservationTraceType) Get() *HotelReservationTraceType {
	return v.value
}

func (v *NullableHotelReservationTraceType) Set(val *HotelReservationTraceType) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelReservationTraceType) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelReservationTraceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelReservationTraceType(val *HotelReservationTraceType) *NullableHotelReservationTraceType {
	return &NullableHotelReservationTraceType{value: val, isSet: true}
}

func (v NullableHotelReservationTraceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelReservationTraceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


