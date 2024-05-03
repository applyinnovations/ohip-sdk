# PromotionGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PromotionGroups** | Pointer to [**PromotionGroupsPromotionGroups**](PromotionGroupsPromotionGroups.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPromotionGroups

`func NewPromotionGroups() *PromotionGroups`

NewPromotionGroups instantiates a new PromotionGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionGroupsWithDefaults

`func NewPromotionGroupsWithDefaults() *PromotionGroups`

NewPromotionGroupsWithDefaults instantiates a new PromotionGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PromotionGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PromotionGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PromotionGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PromotionGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPromotionGroups

`func (o *PromotionGroups) GetPromotionGroups() PromotionGroupsPromotionGroups`

GetPromotionGroups returns the PromotionGroups field if non-nil, zero value otherwise.

### GetPromotionGroupsOk

`func (o *PromotionGroups) GetPromotionGroupsOk() (*PromotionGroupsPromotionGroups, bool)`

GetPromotionGroupsOk returns a tuple with the PromotionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroups

`func (o *PromotionGroups) SetPromotionGroups(v PromotionGroupsPromotionGroups)`

SetPromotionGroups sets PromotionGroups field to given value.

### HasPromotionGroups

`func (o *PromotionGroups) HasPromotionGroups() bool`

HasPromotionGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PromotionGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PromotionGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PromotionGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PromotionGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


