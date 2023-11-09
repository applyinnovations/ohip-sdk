# CopyYieldCategoriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 
**YieldCategories** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Yield Category to be copied. | [optional] 

## Methods

### NewCopyYieldCategoriesRequest

`func NewCopyYieldCategoriesRequest() *CopyYieldCategoriesRequest`

NewCopyYieldCategoriesRequest instantiates a new CopyYieldCategoriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyYieldCategoriesRequestWithDefaults

`func NewCopyYieldCategoriesRequestWithDefaults() *CopyYieldCategoriesRequest`

NewCopyYieldCategoriesRequestWithDefaults instantiates a new CopyYieldCategoriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyYieldCategoriesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyYieldCategoriesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyYieldCategoriesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyYieldCategoriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyYieldCategoriesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyYieldCategoriesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyYieldCategoriesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyYieldCategoriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetYieldCategories

`func (o *CopyYieldCategoriesRequest) GetYieldCategories() []CopyConfigurationCodeType`

GetYieldCategories returns the YieldCategories field if non-nil, zero value otherwise.

### GetYieldCategoriesOk

`func (o *CopyYieldCategoriesRequest) GetYieldCategoriesOk() (*[]CopyConfigurationCodeType, bool)`

GetYieldCategoriesOk returns a tuple with the YieldCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldCategories

`func (o *CopyYieldCategoriesRequest) SetYieldCategories(v []CopyConfigurationCodeType)`

SetYieldCategories sets YieldCategories field to given value.

### HasYieldCategories

`func (o *CopyYieldCategoriesRequest) HasYieldCategories() bool`

HasYieldCategories returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


