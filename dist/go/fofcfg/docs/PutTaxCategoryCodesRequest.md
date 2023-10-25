# PutTaxCategoryCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TaxCategoryCodes** | Pointer to [**[]TaxCategoryCodeType**](TaxCategoryCodeType.md) | List of Tax Category Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTaxCategoryCodesRequest

`func NewPutTaxCategoryCodesRequest() *PutTaxCategoryCodesRequest`

NewPutTaxCategoryCodesRequest instantiates a new PutTaxCategoryCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTaxCategoryCodesRequestWithDefaults

`func NewPutTaxCategoryCodesRequestWithDefaults() *PutTaxCategoryCodesRequest`

NewPutTaxCategoryCodesRequestWithDefaults instantiates a new PutTaxCategoryCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTaxCategoryCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTaxCategoryCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTaxCategoryCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTaxCategoryCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTaxCategoryCodes

`func (o *PutTaxCategoryCodesRequest) GetTaxCategoryCodes() []TaxCategoryCodeType`

GetTaxCategoryCodes returns the TaxCategoryCodes field if non-nil, zero value otherwise.

### GetTaxCategoryCodesOk

`func (o *PutTaxCategoryCodesRequest) GetTaxCategoryCodesOk() (*[]TaxCategoryCodeType, bool)`

GetTaxCategoryCodesOk returns a tuple with the TaxCategoryCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxCategoryCodes

`func (o *PutTaxCategoryCodesRequest) SetTaxCategoryCodes(v []TaxCategoryCodeType)`

SetTaxCategoryCodes sets TaxCategoryCodes field to given value.

### HasTaxCategoryCodes

`func (o *PutTaxCategoryCodesRequest) HasTaxCategoryCodes() bool`

HasTaxCategoryCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTaxCategoryCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTaxCategoryCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTaxCategoryCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTaxCategoryCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


