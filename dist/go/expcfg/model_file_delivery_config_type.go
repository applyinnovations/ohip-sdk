/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the FileDeliveryConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FileDeliveryConfigType{}

// FileDeliveryConfigType struct for FileDeliveryConfigType
type FileDeliveryConfigType struct {
	CommunicationType *FileDeliveryCommunicationType `json:"communicationType,omitempty"`
	// Whether to compress the file before delivery.
	CompressFile *bool `json:"compressFile,omitempty"`
	// Status of the last delivery.
	DeliveryStatus *string `json:"deliveryStatus,omitempty"`
	// Time of day at which the file will be attempted to deliver, if desired.
	DeliveryTime *string `json:"deliveryTime,omitempty"`
	// Directory to which the file is delivered while using FTP or FILE_SYSTEM.
	Directory *string `json:"directory,omitempty"`
	// Whether to create a temporary file and move it to actual file once entire data is written to the file (to prevent consumers from reading incomplete files).
	EnableSafeCreate *bool `json:"enableSafeCreate,omitempty"`
	// Host address for FTP or URL for HTTP.
	HostURL *string `json:"hostURL,omitempty"`
	// Password to authenticate while connecting through FTP or HTTP.
	Password *string `json:"password,omitempty"`
	// Number of delivery attempts to be made each day, in case of failures.
	RetryCount *float32 `json:"retryCount,omitempty"`
	// Number of seconds to wait between delivery attempts in case of failures.
	RetryInterval *float32 `json:"retryInterval,omitempty"`
	// For SOAP version 1.1, value of SOAPAction to be passed.
	SOAPAction *string `json:"sOAPAction,omitempty"`
	// Version of SOAP protocol to use.
	SOAPVersion *string `json:"sOAPVersion,omitempty"`
	// In safe create mode, original directory where the file should be created.
	TempDirectory *string `json:"tempDirectory,omitempty"`
	// Whether to transfer the file in ASCII or binary mode.
	UseAsciiTransfer *bool `json:"useAsciiTransfer,omitempty"`
	// Whether to deliver the file using SOAP protocol.
	UseSOAPProtocol *bool `json:"useSOAPProtocol,omitempty"`
	// User id to authenticate while connecting through FTP or HTTP.
	UserId *string `json:"userId,omitempty"`
	// Indicates if the authentication information in this configuration is valid.
	ValidAuthentication *bool `json:"validAuthentication,omitempty"`
	// Date and time when the last validation of connection information was performed.
	ValidUpdateDate *string `json:"validUpdateDate,omitempty"`
}

// NewFileDeliveryConfigType instantiates a new FileDeliveryConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFileDeliveryConfigType() *FileDeliveryConfigType {
	this := FileDeliveryConfigType{}
	return &this
}

// NewFileDeliveryConfigTypeWithDefaults instantiates a new FileDeliveryConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFileDeliveryConfigTypeWithDefaults() *FileDeliveryConfigType {
	this := FileDeliveryConfigType{}
	return &this
}

// GetCommunicationType returns the CommunicationType field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetCommunicationType() FileDeliveryCommunicationType {
	if o == nil || IsNil(o.CommunicationType) {
		var ret FileDeliveryCommunicationType
		return ret
	}
	return *o.CommunicationType
}

// GetCommunicationTypeOk returns a tuple with the CommunicationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetCommunicationTypeOk() (*FileDeliveryCommunicationType, bool) {
	if o == nil || IsNil(o.CommunicationType) {
		return nil, false
	}
	return o.CommunicationType, true
}

// HasCommunicationType returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasCommunicationType() bool {
	if o != nil && !IsNil(o.CommunicationType) {
		return true
	}

	return false
}

// SetCommunicationType gets a reference to the given FileDeliveryCommunicationType and assigns it to the CommunicationType field.
func (o *FileDeliveryConfigType) SetCommunicationType(v FileDeliveryCommunicationType) {
	o.CommunicationType = &v
}

// GetCompressFile returns the CompressFile field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetCompressFile() bool {
	if o == nil || IsNil(o.CompressFile) {
		var ret bool
		return ret
	}
	return *o.CompressFile
}

// GetCompressFileOk returns a tuple with the CompressFile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetCompressFileOk() (*bool, bool) {
	if o == nil || IsNil(o.CompressFile) {
		return nil, false
	}
	return o.CompressFile, true
}

// HasCompressFile returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasCompressFile() bool {
	if o != nil && !IsNil(o.CompressFile) {
		return true
	}

	return false
}

// SetCompressFile gets a reference to the given bool and assigns it to the CompressFile field.
func (o *FileDeliveryConfigType) SetCompressFile(v bool) {
	o.CompressFile = &v
}

// GetDeliveryStatus returns the DeliveryStatus field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetDeliveryStatus() string {
	if o == nil || IsNil(o.DeliveryStatus) {
		var ret string
		return ret
	}
	return *o.DeliveryStatus
}

// GetDeliveryStatusOk returns a tuple with the DeliveryStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetDeliveryStatusOk() (*string, bool) {
	if o == nil || IsNil(o.DeliveryStatus) {
		return nil, false
	}
	return o.DeliveryStatus, true
}

// HasDeliveryStatus returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasDeliveryStatus() bool {
	if o != nil && !IsNil(o.DeliveryStatus) {
		return true
	}

	return false
}

// SetDeliveryStatus gets a reference to the given string and assigns it to the DeliveryStatus field.
func (o *FileDeliveryConfigType) SetDeliveryStatus(v string) {
	o.DeliveryStatus = &v
}

// GetDeliveryTime returns the DeliveryTime field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetDeliveryTime() string {
	if o == nil || IsNil(o.DeliveryTime) {
		var ret string
		return ret
	}
	return *o.DeliveryTime
}

// GetDeliveryTimeOk returns a tuple with the DeliveryTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetDeliveryTimeOk() (*string, bool) {
	if o == nil || IsNil(o.DeliveryTime) {
		return nil, false
	}
	return o.DeliveryTime, true
}

// HasDeliveryTime returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasDeliveryTime() bool {
	if o != nil && !IsNil(o.DeliveryTime) {
		return true
	}

	return false
}

// SetDeliveryTime gets a reference to the given string and assigns it to the DeliveryTime field.
func (o *FileDeliveryConfigType) SetDeliveryTime(v string) {
	o.DeliveryTime = &v
}

// GetDirectory returns the Directory field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetDirectory() string {
	if o == nil || IsNil(o.Directory) {
		var ret string
		return ret
	}
	return *o.Directory
}

// GetDirectoryOk returns a tuple with the Directory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetDirectoryOk() (*string, bool) {
	if o == nil || IsNil(o.Directory) {
		return nil, false
	}
	return o.Directory, true
}

// HasDirectory returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasDirectory() bool {
	if o != nil && !IsNil(o.Directory) {
		return true
	}

	return false
}

// SetDirectory gets a reference to the given string and assigns it to the Directory field.
func (o *FileDeliveryConfigType) SetDirectory(v string) {
	o.Directory = &v
}

// GetEnableSafeCreate returns the EnableSafeCreate field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetEnableSafeCreate() bool {
	if o == nil || IsNil(o.EnableSafeCreate) {
		var ret bool
		return ret
	}
	return *o.EnableSafeCreate
}

// GetEnableSafeCreateOk returns a tuple with the EnableSafeCreate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetEnableSafeCreateOk() (*bool, bool) {
	if o == nil || IsNil(o.EnableSafeCreate) {
		return nil, false
	}
	return o.EnableSafeCreate, true
}

// HasEnableSafeCreate returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasEnableSafeCreate() bool {
	if o != nil && !IsNil(o.EnableSafeCreate) {
		return true
	}

	return false
}

// SetEnableSafeCreate gets a reference to the given bool and assigns it to the EnableSafeCreate field.
func (o *FileDeliveryConfigType) SetEnableSafeCreate(v bool) {
	o.EnableSafeCreate = &v
}

// GetHostURL returns the HostURL field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetHostURL() string {
	if o == nil || IsNil(o.HostURL) {
		var ret string
		return ret
	}
	return *o.HostURL
}

// GetHostURLOk returns a tuple with the HostURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetHostURLOk() (*string, bool) {
	if o == nil || IsNil(o.HostURL) {
		return nil, false
	}
	return o.HostURL, true
}

// HasHostURL returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasHostURL() bool {
	if o != nil && !IsNil(o.HostURL) {
		return true
	}

	return false
}

// SetHostURL gets a reference to the given string and assigns it to the HostURL field.
func (o *FileDeliveryConfigType) SetHostURL(v string) {
	o.HostURL = &v
}

// GetPassword returns the Password field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetPassword() string {
	if o == nil || IsNil(o.Password) {
		var ret string
		return ret
	}
	return *o.Password
}

// GetPasswordOk returns a tuple with the Password field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetPasswordOk() (*string, bool) {
	if o == nil || IsNil(o.Password) {
		return nil, false
	}
	return o.Password, true
}

// HasPassword returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasPassword() bool {
	if o != nil && !IsNil(o.Password) {
		return true
	}

	return false
}

// SetPassword gets a reference to the given string and assigns it to the Password field.
func (o *FileDeliveryConfigType) SetPassword(v string) {
	o.Password = &v
}

// GetRetryCount returns the RetryCount field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetRetryCount() float32 {
	if o == nil || IsNil(o.RetryCount) {
		var ret float32
		return ret
	}
	return *o.RetryCount
}

// GetRetryCountOk returns a tuple with the RetryCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetRetryCountOk() (*float32, bool) {
	if o == nil || IsNil(o.RetryCount) {
		return nil, false
	}
	return o.RetryCount, true
}

// HasRetryCount returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasRetryCount() bool {
	if o != nil && !IsNil(o.RetryCount) {
		return true
	}

	return false
}

// SetRetryCount gets a reference to the given float32 and assigns it to the RetryCount field.
func (o *FileDeliveryConfigType) SetRetryCount(v float32) {
	o.RetryCount = &v
}

// GetRetryInterval returns the RetryInterval field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetRetryInterval() float32 {
	if o == nil || IsNil(o.RetryInterval) {
		var ret float32
		return ret
	}
	return *o.RetryInterval
}

// GetRetryIntervalOk returns a tuple with the RetryInterval field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetRetryIntervalOk() (*float32, bool) {
	if o == nil || IsNil(o.RetryInterval) {
		return nil, false
	}
	return o.RetryInterval, true
}

// HasRetryInterval returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasRetryInterval() bool {
	if o != nil && !IsNil(o.RetryInterval) {
		return true
	}

	return false
}

// SetRetryInterval gets a reference to the given float32 and assigns it to the RetryInterval field.
func (o *FileDeliveryConfigType) SetRetryInterval(v float32) {
	o.RetryInterval = &v
}

// GetSOAPAction returns the SOAPAction field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetSOAPAction() string {
	if o == nil || IsNil(o.SOAPAction) {
		var ret string
		return ret
	}
	return *o.SOAPAction
}

// GetSOAPActionOk returns a tuple with the SOAPAction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetSOAPActionOk() (*string, bool) {
	if o == nil || IsNil(o.SOAPAction) {
		return nil, false
	}
	return o.SOAPAction, true
}

// HasSOAPAction returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasSOAPAction() bool {
	if o != nil && !IsNil(o.SOAPAction) {
		return true
	}

	return false
}

// SetSOAPAction gets a reference to the given string and assigns it to the SOAPAction field.
func (o *FileDeliveryConfigType) SetSOAPAction(v string) {
	o.SOAPAction = &v
}

// GetSOAPVersion returns the SOAPVersion field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetSOAPVersion() string {
	if o == nil || IsNil(o.SOAPVersion) {
		var ret string
		return ret
	}
	return *o.SOAPVersion
}

// GetSOAPVersionOk returns a tuple with the SOAPVersion field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetSOAPVersionOk() (*string, bool) {
	if o == nil || IsNil(o.SOAPVersion) {
		return nil, false
	}
	return o.SOAPVersion, true
}

// HasSOAPVersion returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasSOAPVersion() bool {
	if o != nil && !IsNil(o.SOAPVersion) {
		return true
	}

	return false
}

// SetSOAPVersion gets a reference to the given string and assigns it to the SOAPVersion field.
func (o *FileDeliveryConfigType) SetSOAPVersion(v string) {
	o.SOAPVersion = &v
}

// GetTempDirectory returns the TempDirectory field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetTempDirectory() string {
	if o == nil || IsNil(o.TempDirectory) {
		var ret string
		return ret
	}
	return *o.TempDirectory
}

// GetTempDirectoryOk returns a tuple with the TempDirectory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetTempDirectoryOk() (*string, bool) {
	if o == nil || IsNil(o.TempDirectory) {
		return nil, false
	}
	return o.TempDirectory, true
}

// HasTempDirectory returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasTempDirectory() bool {
	if o != nil && !IsNil(o.TempDirectory) {
		return true
	}

	return false
}

// SetTempDirectory gets a reference to the given string and assigns it to the TempDirectory field.
func (o *FileDeliveryConfigType) SetTempDirectory(v string) {
	o.TempDirectory = &v
}

// GetUseAsciiTransfer returns the UseAsciiTransfer field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetUseAsciiTransfer() bool {
	if o == nil || IsNil(o.UseAsciiTransfer) {
		var ret bool
		return ret
	}
	return *o.UseAsciiTransfer
}

// GetUseAsciiTransferOk returns a tuple with the UseAsciiTransfer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetUseAsciiTransferOk() (*bool, bool) {
	if o == nil || IsNil(o.UseAsciiTransfer) {
		return nil, false
	}
	return o.UseAsciiTransfer, true
}

// HasUseAsciiTransfer returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasUseAsciiTransfer() bool {
	if o != nil && !IsNil(o.UseAsciiTransfer) {
		return true
	}

	return false
}

// SetUseAsciiTransfer gets a reference to the given bool and assigns it to the UseAsciiTransfer field.
func (o *FileDeliveryConfigType) SetUseAsciiTransfer(v bool) {
	o.UseAsciiTransfer = &v
}

// GetUseSOAPProtocol returns the UseSOAPProtocol field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetUseSOAPProtocol() bool {
	if o == nil || IsNil(o.UseSOAPProtocol) {
		var ret bool
		return ret
	}
	return *o.UseSOAPProtocol
}

// GetUseSOAPProtocolOk returns a tuple with the UseSOAPProtocol field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetUseSOAPProtocolOk() (*bool, bool) {
	if o == nil || IsNil(o.UseSOAPProtocol) {
		return nil, false
	}
	return o.UseSOAPProtocol, true
}

// HasUseSOAPProtocol returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasUseSOAPProtocol() bool {
	if o != nil && !IsNil(o.UseSOAPProtocol) {
		return true
	}

	return false
}

// SetUseSOAPProtocol gets a reference to the given bool and assigns it to the UseSOAPProtocol field.
func (o *FileDeliveryConfigType) SetUseSOAPProtocol(v bool) {
	o.UseSOAPProtocol = &v
}

// GetUserId returns the UserId field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetUserId() string {
	if o == nil || IsNil(o.UserId) {
		var ret string
		return ret
	}
	return *o.UserId
}

// GetUserIdOk returns a tuple with the UserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetUserIdOk() (*string, bool) {
	if o == nil || IsNil(o.UserId) {
		return nil, false
	}
	return o.UserId, true
}

// HasUserId returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasUserId() bool {
	if o != nil && !IsNil(o.UserId) {
		return true
	}

	return false
}

// SetUserId gets a reference to the given string and assigns it to the UserId field.
func (o *FileDeliveryConfigType) SetUserId(v string) {
	o.UserId = &v
}

// GetValidAuthentication returns the ValidAuthentication field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetValidAuthentication() bool {
	if o == nil || IsNil(o.ValidAuthentication) {
		var ret bool
		return ret
	}
	return *o.ValidAuthentication
}

// GetValidAuthenticationOk returns a tuple with the ValidAuthentication field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetValidAuthenticationOk() (*bool, bool) {
	if o == nil || IsNil(o.ValidAuthentication) {
		return nil, false
	}
	return o.ValidAuthentication, true
}

// HasValidAuthentication returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasValidAuthentication() bool {
	if o != nil && !IsNil(o.ValidAuthentication) {
		return true
	}

	return false
}

// SetValidAuthentication gets a reference to the given bool and assigns it to the ValidAuthentication field.
func (o *FileDeliveryConfigType) SetValidAuthentication(v bool) {
	o.ValidAuthentication = &v
}

// GetValidUpdateDate returns the ValidUpdateDate field value if set, zero value otherwise.
func (o *FileDeliveryConfigType) GetValidUpdateDate() string {
	if o == nil || IsNil(o.ValidUpdateDate) {
		var ret string
		return ret
	}
	return *o.ValidUpdateDate
}

// GetValidUpdateDateOk returns a tuple with the ValidUpdateDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FileDeliveryConfigType) GetValidUpdateDateOk() (*string, bool) {
	if o == nil || IsNil(o.ValidUpdateDate) {
		return nil, false
	}
	return o.ValidUpdateDate, true
}

// HasValidUpdateDate returns a boolean if a field has been set.
func (o *FileDeliveryConfigType) HasValidUpdateDate() bool {
	if o != nil && !IsNil(o.ValidUpdateDate) {
		return true
	}

	return false
}

// SetValidUpdateDate gets a reference to the given string and assigns it to the ValidUpdateDate field.
func (o *FileDeliveryConfigType) SetValidUpdateDate(v string) {
	o.ValidUpdateDate = &v
}

func (o FileDeliveryConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FileDeliveryConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommunicationType) {
		toSerialize["communicationType"] = o.CommunicationType
	}
	if !IsNil(o.CompressFile) {
		toSerialize["compressFile"] = o.CompressFile
	}
	if !IsNil(o.DeliveryStatus) {
		toSerialize["deliveryStatus"] = o.DeliveryStatus
	}
	if !IsNil(o.DeliveryTime) {
		toSerialize["deliveryTime"] = o.DeliveryTime
	}
	if !IsNil(o.Directory) {
		toSerialize["directory"] = o.Directory
	}
	if !IsNil(o.EnableSafeCreate) {
		toSerialize["enableSafeCreate"] = o.EnableSafeCreate
	}
	if !IsNil(o.HostURL) {
		toSerialize["hostURL"] = o.HostURL
	}
	if !IsNil(o.Password) {
		toSerialize["password"] = o.Password
	}
	if !IsNil(o.RetryCount) {
		toSerialize["retryCount"] = o.RetryCount
	}
	if !IsNil(o.RetryInterval) {
		toSerialize["retryInterval"] = o.RetryInterval
	}
	if !IsNil(o.SOAPAction) {
		toSerialize["sOAPAction"] = o.SOAPAction
	}
	if !IsNil(o.SOAPVersion) {
		toSerialize["sOAPVersion"] = o.SOAPVersion
	}
	if !IsNil(o.TempDirectory) {
		toSerialize["tempDirectory"] = o.TempDirectory
	}
	if !IsNil(o.UseAsciiTransfer) {
		toSerialize["useAsciiTransfer"] = o.UseAsciiTransfer
	}
	if !IsNil(o.UseSOAPProtocol) {
		toSerialize["useSOAPProtocol"] = o.UseSOAPProtocol
	}
	if !IsNil(o.UserId) {
		toSerialize["userId"] = o.UserId
	}
	if !IsNil(o.ValidAuthentication) {
		toSerialize["validAuthentication"] = o.ValidAuthentication
	}
	if !IsNil(o.ValidUpdateDate) {
		toSerialize["validUpdateDate"] = o.ValidUpdateDate
	}
	return toSerialize, nil
}

type NullableFileDeliveryConfigType struct {
	value *FileDeliveryConfigType
	isSet bool
}

func (v NullableFileDeliveryConfigType) Get() *FileDeliveryConfigType {
	return v.value
}

func (v *NullableFileDeliveryConfigType) Set(val *FileDeliveryConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableFileDeliveryConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableFileDeliveryConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFileDeliveryConfigType(val *FileDeliveryConfigType) *NullableFileDeliveryConfigType {
	return &NullableFileDeliveryConfigType{value: val, isSet: true}
}

func (v NullableFileDeliveryConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFileDeliveryConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


