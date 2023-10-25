# ChangeTemplateRateCategoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRateCategory** | Pointer to [**TemplateRateCategoryType**](TemplateRateCategoryType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateRateCategoryRequest

`func NewChangeTemplateRateCategoryRequest() *ChangeTemplateRateCategoryRequest`

NewChangeTemplateRateCategoryRequest instantiates a new ChangeTemplateRateCategoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateRateCategoryRequestWithDefaults

`func NewChangeTemplateRateCategoryRequestWithDefaults() *ChangeTemplateRateCategoryRequest`

NewChangeTemplateRateCategoryRequestWithDefaults instantiates a new ChangeTemplateRateCategoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateRateCategoryRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateRateCategoryRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateRateCategoryRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateRateCategoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRateCategory

`func (o *ChangeTemplateRateCategoryRequest) GetTemplateRateCategory() TemplateRateCategoryType`

GetTemplateRateCategory returns the TemplateRateCategory field if non-nil, zero value otherwise.

### GetTemplateRateCategoryOk

`func (o *ChangeTemplateRateCategoryRequest) GetTemplateRateCategoryOk() (*TemplateRateCategoryType, bool)`

GetTemplateRateCategoryOk returns a tuple with the TemplateRateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateCategory

`func (o *ChangeTemplateRateCategoryRequest) SetTemplateRateCategory(v TemplateRateCategoryType)`

SetTemplateRateCategory sets TemplateRateCategory field to given value.

### HasTemplateRateCategory

`func (o *ChangeTemplateRateCategoryRequest) HasTemplateRateCategory() bool`

HasTemplateRateCategory returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateRateCategoryRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateRateCategoryRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateRateCategoryRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateRateCategoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


