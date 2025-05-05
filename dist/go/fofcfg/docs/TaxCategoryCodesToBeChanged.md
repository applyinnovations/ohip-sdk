# TaxCategoryCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxCategoryCodes** | Pointer to [**[]TaxCategoryCodeType**](TaxCategoryCodeType.md) | List of Tax Category Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTaxCategoryCodesToBeChanged

`func NewTaxCategoryCodesToBeChanged() *TaxCategoryCodesToBeChanged`

NewTaxCategoryCodesToBeChanged instantiates a new TaxCategoryCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxCategoryCodesToBeChangedWithDefaults

`func NewTaxCategoryCodesToBeChangedWithDefaults() *TaxCategoryCodesToBeChanged`

NewTaxCategoryCodesToBeChangedWithDefaults instantiates a new TaxCategoryCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaxCategoryCodes

`func (o *TaxCategoryCodesToBeChanged) GetTaxCategoryCodes() []TaxCategoryCodeType`

GetTaxCategoryCodes returns the TaxCategoryCodes field if non-nil, zero value otherwise.

### GetTaxCategoryCodesOk

`func (o *TaxCategoryCodesToBeChanged) GetTaxCategoryCodesOk() (*[]TaxCategoryCodeType, bool)`

GetTaxCategoryCodesOk returns a tuple with the TaxCategoryCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxCategoryCodes

`func (o *TaxCategoryCodesToBeChanged) SetTaxCategoryCodes(v []TaxCategoryCodeType)`

SetTaxCategoryCodes sets TaxCategoryCodes field to given value.

### HasTaxCategoryCodes

`func (o *TaxCategoryCodesToBeChanged) HasTaxCategoryCodes() bool`

HasTaxCategoryCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TaxCategoryCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TaxCategoryCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TaxCategoryCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TaxCategoryCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TaxCategoryCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TaxCategoryCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TaxCategoryCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TaxCategoryCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


