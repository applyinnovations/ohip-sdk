# CopyYieldCategories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**YieldCategories** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Yield Category to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyYieldCategories

`func NewCopyYieldCategories() *CopyYieldCategories`

NewCopyYieldCategories instantiates a new CopyYieldCategories object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyYieldCategoriesWithDefaults

`func NewCopyYieldCategoriesWithDefaults() *CopyYieldCategories`

NewCopyYieldCategoriesWithDefaults instantiates a new CopyYieldCategories object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetYieldCategories

`func (o *CopyYieldCategories) GetYieldCategories() []CopyConfigurationCodeType`

GetYieldCategories returns the YieldCategories field if non-nil, zero value otherwise.

### GetYieldCategoriesOk

`func (o *CopyYieldCategories) GetYieldCategoriesOk() (*[]CopyConfigurationCodeType, bool)`

GetYieldCategoriesOk returns a tuple with the YieldCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldCategories

`func (o *CopyYieldCategories) SetYieldCategories(v []CopyConfigurationCodeType)`

SetYieldCategories sets YieldCategories field to given value.

### HasYieldCategories

`func (o *CopyYieldCategories) HasYieldCategories() bool`

HasYieldCategories returns a boolean if a field has been set.

### GetLinks

`func (o *CopyYieldCategories) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyYieldCategories) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyYieldCategories) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyYieldCategories) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyYieldCategories) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyYieldCategories) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyYieldCategories) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyYieldCategories) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

