# SystemCarrierType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CarrierCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Merchant** | Pointer to **bool** | Indicates whether external system carrier is merchant or not. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether external system carrier is active or not. | [optional] 

## Methods

### NewSystemCarrierType

`func NewSystemCarrierType() *SystemCarrierType`

NewSystemCarrierType instantiates a new SystemCarrierType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemCarrierTypeWithDefaults

`func NewSystemCarrierTypeWithDefaults() *SystemCarrierType`

NewSystemCarrierTypeWithDefaults instantiates a new SystemCarrierType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCarrierCode

`func (o *SystemCarrierType) GetCarrierCode() CodeDescriptionType`

GetCarrierCode returns the CarrierCode field if non-nil, zero value otherwise.

### GetCarrierCodeOk

`func (o *SystemCarrierType) GetCarrierCodeOk() (*CodeDescriptionType, bool)`

GetCarrierCodeOk returns a tuple with the CarrierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrierCode

`func (o *SystemCarrierType) SetCarrierCode(v CodeDescriptionType)`

SetCarrierCode sets CarrierCode field to given value.

### HasCarrierCode

`func (o *SystemCarrierType) HasCarrierCode() bool`

HasCarrierCode returns a boolean if a field has been set.

### GetMerchant

`func (o *SystemCarrierType) GetMerchant() bool`

GetMerchant returns the Merchant field if non-nil, zero value otherwise.

### GetMerchantOk

`func (o *SystemCarrierType) GetMerchantOk() (*bool, bool)`

GetMerchantOk returns a tuple with the Merchant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchant

`func (o *SystemCarrierType) SetMerchant(v bool)`

SetMerchant sets Merchant field to given value.

### HasMerchant

`func (o *SystemCarrierType) HasMerchant() bool`

HasMerchant returns a boolean if a field has been set.

### GetInactive

`func (o *SystemCarrierType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *SystemCarrierType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *SystemCarrierType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *SystemCarrierType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


