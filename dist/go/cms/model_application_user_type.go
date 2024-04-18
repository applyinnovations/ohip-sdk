/*
OPERA Cloud API for Customer Management Service

This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cms

import (
	"encoding/json"
)

// checks if the ApplicationUserType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApplicationUserType{}

// ApplicationUserType struct for ApplicationUserType
type ApplicationUserType struct {
	ActAs *string `json:"actAs,omitempty"`
	ActAt *string `json:"actAt,omitempty"`
	AppUser *string `json:"appUser,omitempty"`
	AppUserId *UniqueIDType `json:"appUserId,omitempty"`
	AttendantInfo *AttendantType `json:"attendantInfo,omitempty"`
	CashierId *int32 `json:"cashierId,omitempty"`
	// Cashier title.
	CashierTitle *string `json:"cashierTitle,omitempty"`
	Department *string `json:"department,omitempty"`
	DepartmentLocation *string `json:"departmentLocation,omitempty"`
	DisabledUntil *string `json:"disabledUntil,omitempty"`
	ExpiryDate *string `json:"expiryDate,omitempty"`
	Hotel *CodeDescriptionType `json:"hotel,omitempty"`
	LDAPUser *string `json:"lDAPUser,omitempty"`
	PasswordChangeDate *string `json:"passwordChangeDate,omitempty"`
	SalesRepCode *string `json:"salesRepCode,omitempty"`
	UserDefaultLanguage *string `json:"userDefaultLanguage,omitempty"`
	UserInfo *EmployeeInfoType `json:"userInfo,omitempty"`
	UserSessionInfo *UserSessionInfoType `json:"userSessionInfo,omitempty"`
}

// NewApplicationUserType instantiates a new ApplicationUserType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApplicationUserType() *ApplicationUserType {
	this := ApplicationUserType{}
	return &this
}

// NewApplicationUserTypeWithDefaults instantiates a new ApplicationUserType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApplicationUserTypeWithDefaults() *ApplicationUserType {
	this := ApplicationUserType{}
	return &this
}

// GetActAs returns the ActAs field value if set, zero value otherwise.
func (o *ApplicationUserType) GetActAs() string {
	if o == nil || IsNil(o.ActAs) {
		var ret string
		return ret
	}
	return *o.ActAs
}

// GetActAsOk returns a tuple with the ActAs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetActAsOk() (*string, bool) {
	if o == nil || IsNil(o.ActAs) {
		return nil, false
	}
	return o.ActAs, true
}

// HasActAs returns a boolean if a field has been set.
func (o *ApplicationUserType) HasActAs() bool {
	if o != nil && !IsNil(o.ActAs) {
		return true
	}

	return false
}

// SetActAs gets a reference to the given string and assigns it to the ActAs field.
func (o *ApplicationUserType) SetActAs(v string) {
	o.ActAs = &v
}

// GetActAt returns the ActAt field value if set, zero value otherwise.
func (o *ApplicationUserType) GetActAt() string {
	if o == nil || IsNil(o.ActAt) {
		var ret string
		return ret
	}
	return *o.ActAt
}

// GetActAtOk returns a tuple with the ActAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetActAtOk() (*string, bool) {
	if o == nil || IsNil(o.ActAt) {
		return nil, false
	}
	return o.ActAt, true
}

// HasActAt returns a boolean if a field has been set.
func (o *ApplicationUserType) HasActAt() bool {
	if o != nil && !IsNil(o.ActAt) {
		return true
	}

	return false
}

// SetActAt gets a reference to the given string and assigns it to the ActAt field.
func (o *ApplicationUserType) SetActAt(v string) {
	o.ActAt = &v
}

// GetAppUser returns the AppUser field value if set, zero value otherwise.
func (o *ApplicationUserType) GetAppUser() string {
	if o == nil || IsNil(o.AppUser) {
		var ret string
		return ret
	}
	return *o.AppUser
}

// GetAppUserOk returns a tuple with the AppUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetAppUserOk() (*string, bool) {
	if o == nil || IsNil(o.AppUser) {
		return nil, false
	}
	return o.AppUser, true
}

// HasAppUser returns a boolean if a field has been set.
func (o *ApplicationUserType) HasAppUser() bool {
	if o != nil && !IsNil(o.AppUser) {
		return true
	}

	return false
}

// SetAppUser gets a reference to the given string and assigns it to the AppUser field.
func (o *ApplicationUserType) SetAppUser(v string) {
	o.AppUser = &v
}

// GetAppUserId returns the AppUserId field value if set, zero value otherwise.
func (o *ApplicationUserType) GetAppUserId() UniqueIDType {
	if o == nil || IsNil(o.AppUserId) {
		var ret UniqueIDType
		return ret
	}
	return *o.AppUserId
}

// GetAppUserIdOk returns a tuple with the AppUserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetAppUserIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AppUserId) {
		return nil, false
	}
	return o.AppUserId, true
}

// HasAppUserId returns a boolean if a field has been set.
func (o *ApplicationUserType) HasAppUserId() bool {
	if o != nil && !IsNil(o.AppUserId) {
		return true
	}

	return false
}

// SetAppUserId gets a reference to the given UniqueIDType and assigns it to the AppUserId field.
func (o *ApplicationUserType) SetAppUserId(v UniqueIDType) {
	o.AppUserId = &v
}

// GetAttendantInfo returns the AttendantInfo field value if set, zero value otherwise.
func (o *ApplicationUserType) GetAttendantInfo() AttendantType {
	if o == nil || IsNil(o.AttendantInfo) {
		var ret AttendantType
		return ret
	}
	return *o.AttendantInfo
}

// GetAttendantInfoOk returns a tuple with the AttendantInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetAttendantInfoOk() (*AttendantType, bool) {
	if o == nil || IsNil(o.AttendantInfo) {
		return nil, false
	}
	return o.AttendantInfo, true
}

// HasAttendantInfo returns a boolean if a field has been set.
func (o *ApplicationUserType) HasAttendantInfo() bool {
	if o != nil && !IsNil(o.AttendantInfo) {
		return true
	}

	return false
}

// SetAttendantInfo gets a reference to the given AttendantType and assigns it to the AttendantInfo field.
func (o *ApplicationUserType) SetAttendantInfo(v AttendantType) {
	o.AttendantInfo = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ApplicationUserType) GetCashierId() int32 {
	if o == nil || IsNil(o.CashierId) {
		var ret int32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetCashierIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ApplicationUserType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given int32 and assigns it to the CashierId field.
func (o *ApplicationUserType) SetCashierId(v int32) {
	o.CashierId = &v
}

// GetCashierTitle returns the CashierTitle field value if set, zero value otherwise.
func (o *ApplicationUserType) GetCashierTitle() string {
	if o == nil || IsNil(o.CashierTitle) {
		var ret string
		return ret
	}
	return *o.CashierTitle
}

// GetCashierTitleOk returns a tuple with the CashierTitle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetCashierTitleOk() (*string, bool) {
	if o == nil || IsNil(o.CashierTitle) {
		return nil, false
	}
	return o.CashierTitle, true
}

// HasCashierTitle returns a boolean if a field has been set.
func (o *ApplicationUserType) HasCashierTitle() bool {
	if o != nil && !IsNil(o.CashierTitle) {
		return true
	}

	return false
}

// SetCashierTitle gets a reference to the given string and assigns it to the CashierTitle field.
func (o *ApplicationUserType) SetCashierTitle(v string) {
	o.CashierTitle = &v
}

// GetDepartment returns the Department field value if set, zero value otherwise.
func (o *ApplicationUserType) GetDepartment() string {
	if o == nil || IsNil(o.Department) {
		var ret string
		return ret
	}
	return *o.Department
}

// GetDepartmentOk returns a tuple with the Department field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetDepartmentOk() (*string, bool) {
	if o == nil || IsNil(o.Department) {
		return nil, false
	}
	return o.Department, true
}

// HasDepartment returns a boolean if a field has been set.
func (o *ApplicationUserType) HasDepartment() bool {
	if o != nil && !IsNil(o.Department) {
		return true
	}

	return false
}

// SetDepartment gets a reference to the given string and assigns it to the Department field.
func (o *ApplicationUserType) SetDepartment(v string) {
	o.Department = &v
}

// GetDepartmentLocation returns the DepartmentLocation field value if set, zero value otherwise.
func (o *ApplicationUserType) GetDepartmentLocation() string {
	if o == nil || IsNil(o.DepartmentLocation) {
		var ret string
		return ret
	}
	return *o.DepartmentLocation
}

// GetDepartmentLocationOk returns a tuple with the DepartmentLocation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetDepartmentLocationOk() (*string, bool) {
	if o == nil || IsNil(o.DepartmentLocation) {
		return nil, false
	}
	return o.DepartmentLocation, true
}

// HasDepartmentLocation returns a boolean if a field has been set.
func (o *ApplicationUserType) HasDepartmentLocation() bool {
	if o != nil && !IsNil(o.DepartmentLocation) {
		return true
	}

	return false
}

// SetDepartmentLocation gets a reference to the given string and assigns it to the DepartmentLocation field.
func (o *ApplicationUserType) SetDepartmentLocation(v string) {
	o.DepartmentLocation = &v
}

// GetDisabledUntil returns the DisabledUntil field value if set, zero value otherwise.
func (o *ApplicationUserType) GetDisabledUntil() string {
	if o == nil || IsNil(o.DisabledUntil) {
		var ret string
		return ret
	}
	return *o.DisabledUntil
}

// GetDisabledUntilOk returns a tuple with the DisabledUntil field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetDisabledUntilOk() (*string, bool) {
	if o == nil || IsNil(o.DisabledUntil) {
		return nil, false
	}
	return o.DisabledUntil, true
}

// HasDisabledUntil returns a boolean if a field has been set.
func (o *ApplicationUserType) HasDisabledUntil() bool {
	if o != nil && !IsNil(o.DisabledUntil) {
		return true
	}

	return false
}

// SetDisabledUntil gets a reference to the given string and assigns it to the DisabledUntil field.
func (o *ApplicationUserType) SetDisabledUntil(v string) {
	o.DisabledUntil = &v
}

// GetExpiryDate returns the ExpiryDate field value if set, zero value otherwise.
func (o *ApplicationUserType) GetExpiryDate() string {
	if o == nil || IsNil(o.ExpiryDate) {
		var ret string
		return ret
	}
	return *o.ExpiryDate
}

// GetExpiryDateOk returns a tuple with the ExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetExpiryDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpiryDate) {
		return nil, false
	}
	return o.ExpiryDate, true
}

// HasExpiryDate returns a boolean if a field has been set.
func (o *ApplicationUserType) HasExpiryDate() bool {
	if o != nil && !IsNil(o.ExpiryDate) {
		return true
	}

	return false
}

// SetExpiryDate gets a reference to the given string and assigns it to the ExpiryDate field.
func (o *ApplicationUserType) SetExpiryDate(v string) {
	o.ExpiryDate = &v
}

// GetHotel returns the Hotel field value if set, zero value otherwise.
func (o *ApplicationUserType) GetHotel() CodeDescriptionType {
	if o == nil || IsNil(o.Hotel) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.Hotel
}

// GetHotelOk returns a tuple with the Hotel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetHotelOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.Hotel) {
		return nil, false
	}
	return o.Hotel, true
}

// HasHotel returns a boolean if a field has been set.
func (o *ApplicationUserType) HasHotel() bool {
	if o != nil && !IsNil(o.Hotel) {
		return true
	}

	return false
}

// SetHotel gets a reference to the given CodeDescriptionType and assigns it to the Hotel field.
func (o *ApplicationUserType) SetHotel(v CodeDescriptionType) {
	o.Hotel = &v
}

// GetLDAPUser returns the LDAPUser field value if set, zero value otherwise.
func (o *ApplicationUserType) GetLDAPUser() string {
	if o == nil || IsNil(o.LDAPUser) {
		var ret string
		return ret
	}
	return *o.LDAPUser
}

// GetLDAPUserOk returns a tuple with the LDAPUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetLDAPUserOk() (*string, bool) {
	if o == nil || IsNil(o.LDAPUser) {
		return nil, false
	}
	return o.LDAPUser, true
}

// HasLDAPUser returns a boolean if a field has been set.
func (o *ApplicationUserType) HasLDAPUser() bool {
	if o != nil && !IsNil(o.LDAPUser) {
		return true
	}

	return false
}

// SetLDAPUser gets a reference to the given string and assigns it to the LDAPUser field.
func (o *ApplicationUserType) SetLDAPUser(v string) {
	o.LDAPUser = &v
}

// GetPasswordChangeDate returns the PasswordChangeDate field value if set, zero value otherwise.
func (o *ApplicationUserType) GetPasswordChangeDate() string {
	if o == nil || IsNil(o.PasswordChangeDate) {
		var ret string
		return ret
	}
	return *o.PasswordChangeDate
}

// GetPasswordChangeDateOk returns a tuple with the PasswordChangeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetPasswordChangeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PasswordChangeDate) {
		return nil, false
	}
	return o.PasswordChangeDate, true
}

// HasPasswordChangeDate returns a boolean if a field has been set.
func (o *ApplicationUserType) HasPasswordChangeDate() bool {
	if o != nil && !IsNil(o.PasswordChangeDate) {
		return true
	}

	return false
}

// SetPasswordChangeDate gets a reference to the given string and assigns it to the PasswordChangeDate field.
func (o *ApplicationUserType) SetPasswordChangeDate(v string) {
	o.PasswordChangeDate = &v
}

// GetSalesRepCode returns the SalesRepCode field value if set, zero value otherwise.
func (o *ApplicationUserType) GetSalesRepCode() string {
	if o == nil || IsNil(o.SalesRepCode) {
		var ret string
		return ret
	}
	return *o.SalesRepCode
}

// GetSalesRepCodeOk returns a tuple with the SalesRepCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetSalesRepCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SalesRepCode) {
		return nil, false
	}
	return o.SalesRepCode, true
}

// HasSalesRepCode returns a boolean if a field has been set.
func (o *ApplicationUserType) HasSalesRepCode() bool {
	if o != nil && !IsNil(o.SalesRepCode) {
		return true
	}

	return false
}

// SetSalesRepCode gets a reference to the given string and assigns it to the SalesRepCode field.
func (o *ApplicationUserType) SetSalesRepCode(v string) {
	o.SalesRepCode = &v
}

// GetUserDefaultLanguage returns the UserDefaultLanguage field value if set, zero value otherwise.
func (o *ApplicationUserType) GetUserDefaultLanguage() string {
	if o == nil || IsNil(o.UserDefaultLanguage) {
		var ret string
		return ret
	}
	return *o.UserDefaultLanguage
}

// GetUserDefaultLanguageOk returns a tuple with the UserDefaultLanguage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetUserDefaultLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.UserDefaultLanguage) {
		return nil, false
	}
	return o.UserDefaultLanguage, true
}

// HasUserDefaultLanguage returns a boolean if a field has been set.
func (o *ApplicationUserType) HasUserDefaultLanguage() bool {
	if o != nil && !IsNil(o.UserDefaultLanguage) {
		return true
	}

	return false
}

// SetUserDefaultLanguage gets a reference to the given string and assigns it to the UserDefaultLanguage field.
func (o *ApplicationUserType) SetUserDefaultLanguage(v string) {
	o.UserDefaultLanguage = &v
}

// GetUserInfo returns the UserInfo field value if set, zero value otherwise.
func (o *ApplicationUserType) GetUserInfo() EmployeeInfoType {
	if o == nil || IsNil(o.UserInfo) {
		var ret EmployeeInfoType
		return ret
	}
	return *o.UserInfo
}

// GetUserInfoOk returns a tuple with the UserInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetUserInfoOk() (*EmployeeInfoType, bool) {
	if o == nil || IsNil(o.UserInfo) {
		return nil, false
	}
	return o.UserInfo, true
}

// HasUserInfo returns a boolean if a field has been set.
func (o *ApplicationUserType) HasUserInfo() bool {
	if o != nil && !IsNil(o.UserInfo) {
		return true
	}

	return false
}

// SetUserInfo gets a reference to the given EmployeeInfoType and assigns it to the UserInfo field.
func (o *ApplicationUserType) SetUserInfo(v EmployeeInfoType) {
	o.UserInfo = &v
}

// GetUserSessionInfo returns the UserSessionInfo field value if set, zero value otherwise.
func (o *ApplicationUserType) GetUserSessionInfo() UserSessionInfoType {
	if o == nil || IsNil(o.UserSessionInfo) {
		var ret UserSessionInfoType
		return ret
	}
	return *o.UserSessionInfo
}

// GetUserSessionInfoOk returns a tuple with the UserSessionInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApplicationUserType) GetUserSessionInfoOk() (*UserSessionInfoType, bool) {
	if o == nil || IsNil(o.UserSessionInfo) {
		return nil, false
	}
	return o.UserSessionInfo, true
}

// HasUserSessionInfo returns a boolean if a field has been set.
func (o *ApplicationUserType) HasUserSessionInfo() bool {
	if o != nil && !IsNil(o.UserSessionInfo) {
		return true
	}

	return false
}

// SetUserSessionInfo gets a reference to the given UserSessionInfoType and assigns it to the UserSessionInfo field.
func (o *ApplicationUserType) SetUserSessionInfo(v UserSessionInfoType) {
	o.UserSessionInfo = &v
}

func (o ApplicationUserType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApplicationUserType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActAs) {
		toSerialize["actAs"] = o.ActAs
	}
	if !IsNil(o.ActAt) {
		toSerialize["actAt"] = o.ActAt
	}
	if !IsNil(o.AppUser) {
		toSerialize["appUser"] = o.AppUser
	}
	if !IsNil(o.AppUserId) {
		toSerialize["appUserId"] = o.AppUserId
	}
	if !IsNil(o.AttendantInfo) {
		toSerialize["attendantInfo"] = o.AttendantInfo
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.CashierTitle) {
		toSerialize["cashierTitle"] = o.CashierTitle
	}
	if !IsNil(o.Department) {
		toSerialize["department"] = o.Department
	}
	if !IsNil(o.DepartmentLocation) {
		toSerialize["departmentLocation"] = o.DepartmentLocation
	}
	if !IsNil(o.DisabledUntil) {
		toSerialize["disabledUntil"] = o.DisabledUntil
	}
	if !IsNil(o.ExpiryDate) {
		toSerialize["expiryDate"] = o.ExpiryDate
	}
	if !IsNil(o.Hotel) {
		toSerialize["hotel"] = o.Hotel
	}
	if !IsNil(o.LDAPUser) {
		toSerialize["lDAPUser"] = o.LDAPUser
	}
	if !IsNil(o.PasswordChangeDate) {
		toSerialize["passwordChangeDate"] = o.PasswordChangeDate
	}
	if !IsNil(o.SalesRepCode) {
		toSerialize["salesRepCode"] = o.SalesRepCode
	}
	if !IsNil(o.UserDefaultLanguage) {
		toSerialize["userDefaultLanguage"] = o.UserDefaultLanguage
	}
	if !IsNil(o.UserInfo) {
		toSerialize["userInfo"] = o.UserInfo
	}
	if !IsNil(o.UserSessionInfo) {
		toSerialize["userSessionInfo"] = o.UserSessionInfo
	}
	return toSerialize, nil
}

type NullableApplicationUserType struct {
	value *ApplicationUserType
	isSet bool
}

func (v NullableApplicationUserType) Get() *ApplicationUserType {
	return v.value
}

func (v *NullableApplicationUserType) Set(val *ApplicationUserType) {
	v.value = val
	v.isSet = true
}

func (v NullableApplicationUserType) IsSet() bool {
	return v.isSet
}

func (v *NullableApplicationUserType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApplicationUserType(val *ApplicationUserType) *NullableApplicationUserType {
	return &NullableApplicationUserType{value: val, isSet: true}
}

func (v NullableApplicationUserType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApplicationUserType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

