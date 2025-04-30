# TemplateRateCategoryDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateRateCategories** | Pointer to [**[][]RateCategoryType**]([]RateCategoryType.md) | Collection of template rate categories. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateRateCategoryDetails

`func NewTemplateRateCategoryDetails() *TemplateRateCategoryDetails`

NewTemplateRateCategoryDetails instantiates a new TemplateRateCategoryDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRateCategoryDetailsWithDefaults

`func NewTemplateRateCategoryDetailsWithDefaults() *TemplateRateCategoryDetails`

NewTemplateRateCategoryDetailsWithDefaults instantiates a new TemplateRateCategoryDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateRateCategories

`func (o *TemplateRateCategoryDetails) GetTemplateRateCategories() [][]RateCategoryType`

GetTemplateRateCategories returns the TemplateRateCategories field if non-nil, zero value otherwise.

### GetTemplateRateCategoriesOk

`func (o *TemplateRateCategoryDetails) GetTemplateRateCategoriesOk() (*[][]RateCategoryType, bool)`

GetTemplateRateCategoriesOk returns a tuple with the TemplateRateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateCategories

`func (o *TemplateRateCategoryDetails) SetTemplateRateCategories(v [][]RateCategoryType)`

SetTemplateRateCategories sets TemplateRateCategories field to given value.

### HasTemplateRateCategories

`func (o *TemplateRateCategoryDetails) HasTemplateRateCategories() bool`

HasTemplateRateCategories returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateRateCategoryDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateRateCategoryDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateRateCategoryDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateRateCategoryDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateRateCategoryDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateRateCategoryDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateRateCategoryDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateRateCategoryDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


