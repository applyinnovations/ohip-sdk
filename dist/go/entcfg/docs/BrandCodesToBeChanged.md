# BrandCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BrandCodes** | Pointer to [**[]BrandCodeType**](BrandCodeType.md) | List of Brand Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBrandCodesToBeChanged

`func NewBrandCodesToBeChanged() *BrandCodesToBeChanged`

NewBrandCodesToBeChanged instantiates a new BrandCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBrandCodesToBeChangedWithDefaults

`func NewBrandCodesToBeChangedWithDefaults() *BrandCodesToBeChanged`

NewBrandCodesToBeChangedWithDefaults instantiates a new BrandCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBrandCodes

`func (o *BrandCodesToBeChanged) GetBrandCodes() []BrandCodeType`

GetBrandCodes returns the BrandCodes field if non-nil, zero value otherwise.

### GetBrandCodesOk

`func (o *BrandCodesToBeChanged) GetBrandCodesOk() (*[]BrandCodeType, bool)`

GetBrandCodesOk returns a tuple with the BrandCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBrandCodes

`func (o *BrandCodesToBeChanged) SetBrandCodes(v []BrandCodeType)`

SetBrandCodes sets BrandCodes field to given value.

### HasBrandCodes

`func (o *BrandCodesToBeChanged) HasBrandCodes() bool`

HasBrandCodes returns a boolean if a field has been set.

### GetLinks

`func (o *BrandCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BrandCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BrandCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BrandCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BrandCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BrandCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BrandCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BrandCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


