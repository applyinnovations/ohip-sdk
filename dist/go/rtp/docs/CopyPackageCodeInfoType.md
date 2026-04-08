# CopyPackageCodeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourcePackageCode** | Pointer to **string** | Source package code to be copied. | [optional] 
**TargetHotelCode** | Pointer to **string** | Target hotel code where the package code will be copied to. | [optional] 
**CopyAs** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewCopyPackageCodeInfoType

`func NewCopyPackageCodeInfoType() *CopyPackageCodeInfoType`

NewCopyPackageCodeInfoType instantiates a new CopyPackageCodeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyPackageCodeInfoTypeWithDefaults

`func NewCopyPackageCodeInfoTypeWithDefaults() *CopyPackageCodeInfoType`

NewCopyPackageCodeInfoTypeWithDefaults instantiates a new CopyPackageCodeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourcePackageCode

`func (o *CopyPackageCodeInfoType) GetSourcePackageCode() string`

GetSourcePackageCode returns the SourcePackageCode field if non-nil, zero value otherwise.

### GetSourcePackageCodeOk

`func (o *CopyPackageCodeInfoType) GetSourcePackageCodeOk() (*string, bool)`

GetSourcePackageCodeOk returns a tuple with the SourcePackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcePackageCode

`func (o *CopyPackageCodeInfoType) SetSourcePackageCode(v string)`

SetSourcePackageCode sets SourcePackageCode field to given value.

### HasSourcePackageCode

`func (o *CopyPackageCodeInfoType) HasSourcePackageCode() bool`

HasSourcePackageCode returns a boolean if a field has been set.

### GetTargetHotelCode

`func (o *CopyPackageCodeInfoType) GetTargetHotelCode() string`

GetTargetHotelCode returns the TargetHotelCode field if non-nil, zero value otherwise.

### GetTargetHotelCodeOk

`func (o *CopyPackageCodeInfoType) GetTargetHotelCodeOk() (*string, bool)`

GetTargetHotelCodeOk returns a tuple with the TargetHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotelCode

`func (o *CopyPackageCodeInfoType) SetTargetHotelCode(v string)`

SetTargetHotelCode sets TargetHotelCode field to given value.

### HasTargetHotelCode

`func (o *CopyPackageCodeInfoType) HasTargetHotelCode() bool`

HasTargetHotelCode returns a boolean if a field has been set.

### GetCopyAs

`func (o *CopyPackageCodeInfoType) GetCopyAs() CodeDescriptionType`

GetCopyAs returns the CopyAs field if non-nil, zero value otherwise.

### GetCopyAsOk

`func (o *CopyPackageCodeInfoType) GetCopyAsOk() (*CodeDescriptionType, bool)`

GetCopyAsOk returns a tuple with the CopyAs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyAs

`func (o *CopyPackageCodeInfoType) SetCopyAs(v CodeDescriptionType)`

SetCopyAs sets CopyAs field to given value.

### HasCopyAs

`func (o *CopyPackageCodeInfoType) HasCopyAs() bool`

HasCopyAs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


