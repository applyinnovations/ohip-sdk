# CopyPackageCodesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyPackageCodeInfo** | Pointer to [**[]CopyPackageCodeInfoType**](CopyPackageCodeInfoType.md) | Provides information about the target hotel code where the source package code will be copied to, what the package code will be named under the target hotel code and the description of the package code under the target hotel code. | [optional] 
**CopyPackagePricing** | Pointer to **bool** | Indicator that tells whether the package pricing records should be copied or not. | [optional] 
**SourceHotelCode** | Pointer to **string** | Source hotel code from where package code(s) have to be copied. | [optional] 

## Methods

### NewCopyPackageCodesType

`func NewCopyPackageCodesType() *CopyPackageCodesType`

NewCopyPackageCodesType instantiates a new CopyPackageCodesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyPackageCodesTypeWithDefaults

`func NewCopyPackageCodesTypeWithDefaults() *CopyPackageCodesType`

NewCopyPackageCodesTypeWithDefaults instantiates a new CopyPackageCodesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyPackageCodeInfo

`func (o *CopyPackageCodesType) GetCopyPackageCodeInfo() []CopyPackageCodeInfoType`

GetCopyPackageCodeInfo returns the CopyPackageCodeInfo field if non-nil, zero value otherwise.

### GetCopyPackageCodeInfoOk

`func (o *CopyPackageCodesType) GetCopyPackageCodeInfoOk() (*[]CopyPackageCodeInfoType, bool)`

GetCopyPackageCodeInfoOk returns a tuple with the CopyPackageCodeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyPackageCodeInfo

`func (o *CopyPackageCodesType) SetCopyPackageCodeInfo(v []CopyPackageCodeInfoType)`

SetCopyPackageCodeInfo sets CopyPackageCodeInfo field to given value.

### HasCopyPackageCodeInfo

`func (o *CopyPackageCodesType) HasCopyPackageCodeInfo() bool`

HasCopyPackageCodeInfo returns a boolean if a field has been set.

### GetCopyPackagePricing

`func (o *CopyPackageCodesType) GetCopyPackagePricing() bool`

GetCopyPackagePricing returns the CopyPackagePricing field if non-nil, zero value otherwise.

### GetCopyPackagePricingOk

`func (o *CopyPackageCodesType) GetCopyPackagePricingOk() (*bool, bool)`

GetCopyPackagePricingOk returns a tuple with the CopyPackagePricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyPackagePricing

`func (o *CopyPackageCodesType) SetCopyPackagePricing(v bool)`

SetCopyPackagePricing sets CopyPackagePricing field to given value.

### HasCopyPackagePricing

`func (o *CopyPackageCodesType) HasCopyPackagePricing() bool`

HasCopyPackagePricing returns a boolean if a field has been set.

### GetSourceHotelCode

`func (o *CopyPackageCodesType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *CopyPackageCodesType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *CopyPackageCodesType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *CopyPackageCodesType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


