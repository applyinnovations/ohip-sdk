# StagedProfileAddressType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error in address information in a staged profile with an invalid status | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the record. | [optional] 
**PostalCodeExtension** | Pointer to **string** | Postal code extension. | [optional] 
**BarCode** | Pointer to **string** | The postal barcode for the address. | [optional] 
**CleansStatus** | Pointer to [**StagedAddressCleansStatus**](StagedAddressCleansStatus.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileAddressType

`func NewStagedProfileAddressType() *StagedProfileAddressType`

NewStagedProfileAddressType instantiates a new StagedProfileAddressType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileAddressTypeWithDefaults

`func NewStagedProfileAddressTypeWithDefaults() *StagedProfileAddressType`

NewStagedProfileAddressTypeWithDefaults instantiates a new StagedProfileAddressType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *StagedProfileAddressType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *StagedProfileAddressType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *StagedProfileAddressType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *StagedProfileAddressType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileAddressType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileAddressType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileAddressType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileAddressType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfileAddressType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfileAddressType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfileAddressType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfileAddressType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetPostalCodeExtension

`func (o *StagedProfileAddressType) GetPostalCodeExtension() string`

GetPostalCodeExtension returns the PostalCodeExtension field if non-nil, zero value otherwise.

### GetPostalCodeExtensionOk

`func (o *StagedProfileAddressType) GetPostalCodeExtensionOk() (*string, bool)`

GetPostalCodeExtensionOk returns a tuple with the PostalCodeExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostalCodeExtension

`func (o *StagedProfileAddressType) SetPostalCodeExtension(v string)`

SetPostalCodeExtension sets PostalCodeExtension field to given value.

### HasPostalCodeExtension

`func (o *StagedProfileAddressType) HasPostalCodeExtension() bool`

HasPostalCodeExtension returns a boolean if a field has been set.

### GetBarCode

`func (o *StagedProfileAddressType) GetBarCode() string`

GetBarCode returns the BarCode field if non-nil, zero value otherwise.

### GetBarCodeOk

`func (o *StagedProfileAddressType) GetBarCodeOk() (*string, bool)`

GetBarCodeOk returns a tuple with the BarCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarCode

`func (o *StagedProfileAddressType) SetBarCode(v string)`

SetBarCode sets BarCode field to given value.

### HasBarCode

`func (o *StagedProfileAddressType) HasBarCode() bool`

HasBarCode returns a boolean if a field has been set.

### GetCleansStatus

`func (o *StagedProfileAddressType) GetCleansStatus() StagedAddressCleansStatus`

GetCleansStatus returns the CleansStatus field if non-nil, zero value otherwise.

### GetCleansStatusOk

`func (o *StagedProfileAddressType) GetCleansStatusOk() (*StagedAddressCleansStatus, bool)`

GetCleansStatusOk returns a tuple with the CleansStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleansStatus

`func (o *StagedProfileAddressType) SetCleansStatus(v StagedAddressCleansStatus)`

SetCleansStatus sets CleansStatus field to given value.

### HasCleansStatus

`func (o *StagedProfileAddressType) HasCleansStatus() bool`

HasCleansStatus returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileAddressType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileAddressType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileAddressType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileAddressType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileAddressType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileAddressType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileAddressType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileAddressType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


