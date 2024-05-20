# RatePackageGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Package group Code. | [optional] 
**Description** | Pointer to **string** | Package group description. | [optional] 
**Packages** | Pointer to [**[]RatePackageCodeType**](RatePackageCodeType.md) | Rate Package Full Information | [optional] 
**SellSeparate** | Pointer to **bool** | Can Package group be sold separately? | [optional] 
**ShortDescription** | Pointer to **string** | The short description of the package group. | [optional] 
**WebBookable** | Pointer to **bool** | Is Package group web bookable? | [optional] 

## Methods

### NewRatePackageGroupType

`func NewRatePackageGroupType() *RatePackageGroupType`

NewRatePackageGroupType instantiates a new RatePackageGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePackageGroupTypeWithDefaults

`func NewRatePackageGroupTypeWithDefaults() *RatePackageGroupType`

NewRatePackageGroupTypeWithDefaults instantiates a new RatePackageGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RatePackageGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RatePackageGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RatePackageGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RatePackageGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RatePackageGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RatePackageGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RatePackageGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RatePackageGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPackages

`func (o *RatePackageGroupType) GetPackages() []RatePackageCodeType`

GetPackages returns the Packages field if non-nil, zero value otherwise.

### GetPackagesOk

`func (o *RatePackageGroupType) GetPackagesOk() (*[]RatePackageCodeType, bool)`

GetPackagesOk returns a tuple with the Packages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackages

`func (o *RatePackageGroupType) SetPackages(v []RatePackageCodeType)`

SetPackages sets Packages field to given value.

### HasPackages

`func (o *RatePackageGroupType) HasPackages() bool`

HasPackages returns a boolean if a field has been set.

### GetSellSeparate

`func (o *RatePackageGroupType) GetSellSeparate() bool`

GetSellSeparate returns the SellSeparate field if non-nil, zero value otherwise.

### GetSellSeparateOk

`func (o *RatePackageGroupType) GetSellSeparateOk() (*bool, bool)`

GetSellSeparateOk returns a tuple with the SellSeparate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSeparate

`func (o *RatePackageGroupType) SetSellSeparate(v bool)`

SetSellSeparate sets SellSeparate field to given value.

### HasSellSeparate

`func (o *RatePackageGroupType) HasSellSeparate() bool`

HasSellSeparate returns a boolean if a field has been set.

### GetShortDescription

`func (o *RatePackageGroupType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RatePackageGroupType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RatePackageGroupType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RatePackageGroupType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetWebBookable

`func (o *RatePackageGroupType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *RatePackageGroupType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *RatePackageGroupType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *RatePackageGroupType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


