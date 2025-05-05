# RoutingInstructionsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**RoutingInstructionsInfoCriteria**](RoutingInstructionsInfoCriteria.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoutingInstructionsInfo

`func NewRoutingInstructionsInfo() *RoutingInstructionsInfo`

NewRoutingInstructionsInfo instantiates a new RoutingInstructionsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoWithDefaults

`func NewRoutingInstructionsInfoWithDefaults() *RoutingInstructionsInfo`

NewRoutingInstructionsInfoWithDefaults instantiates a new RoutingInstructionsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *RoutingInstructionsInfo) GetCriteria() RoutingInstructionsInfoCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RoutingInstructionsInfo) GetCriteriaOk() (*RoutingInstructionsInfoCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RoutingInstructionsInfo) SetCriteria(v RoutingInstructionsInfoCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *RoutingInstructionsInfo) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *RoutingInstructionsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoutingInstructionsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoutingInstructionsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoutingInstructionsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoutingInstructionsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoutingInstructionsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoutingInstructionsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoutingInstructionsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


