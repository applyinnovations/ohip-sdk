# FlexFieldCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FlexFieldCriteriaType** | Pointer to [**FlexFieldType**](FlexFieldType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFlexFieldCriteria

`func NewFlexFieldCriteria() *FlexFieldCriteria`

NewFlexFieldCriteria instantiates a new FlexFieldCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFlexFieldCriteriaWithDefaults

`func NewFlexFieldCriteriaWithDefaults() *FlexFieldCriteria`

NewFlexFieldCriteriaWithDefaults instantiates a new FlexFieldCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFlexFieldCriteriaType

`func (o *FlexFieldCriteria) GetFlexFieldCriteriaType() FlexFieldType`

GetFlexFieldCriteriaType returns the FlexFieldCriteriaType field if non-nil, zero value otherwise.

### GetFlexFieldCriteriaTypeOk

`func (o *FlexFieldCriteria) GetFlexFieldCriteriaTypeOk() (*FlexFieldType, bool)`

GetFlexFieldCriteriaTypeOk returns a tuple with the FlexFieldCriteriaType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexFieldCriteriaType

`func (o *FlexFieldCriteria) SetFlexFieldCriteriaType(v FlexFieldType)`

SetFlexFieldCriteriaType sets FlexFieldCriteriaType field to given value.

### HasFlexFieldCriteriaType

`func (o *FlexFieldCriteria) HasFlexFieldCriteriaType() bool`

HasFlexFieldCriteriaType returns a boolean if a field has been set.

### GetLinks

`func (o *FlexFieldCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FlexFieldCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FlexFieldCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FlexFieldCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FlexFieldCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FlexFieldCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FlexFieldCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FlexFieldCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


