# WaitlistPrioritiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**WaitlistPriorities** | Pointer to [**[]WaitlistPriorityType**](WaitlistPriorityType.md) | List of Waitlist Priorities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewWaitlistPrioritiesCriteria

`func NewWaitlistPrioritiesCriteria() *WaitlistPrioritiesCriteria`

NewWaitlistPrioritiesCriteria instantiates a new WaitlistPrioritiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWaitlistPrioritiesCriteriaWithDefaults

`func NewWaitlistPrioritiesCriteriaWithDefaults() *WaitlistPrioritiesCriteria`

NewWaitlistPrioritiesCriteriaWithDefaults instantiates a new WaitlistPrioritiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *WaitlistPrioritiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *WaitlistPrioritiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *WaitlistPrioritiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *WaitlistPrioritiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWaitlistPriorities

`func (o *WaitlistPrioritiesCriteria) GetWaitlistPriorities() []WaitlistPriorityType`

GetWaitlistPriorities returns the WaitlistPriorities field if non-nil, zero value otherwise.

### GetWaitlistPrioritiesOk

`func (o *WaitlistPrioritiesCriteria) GetWaitlistPrioritiesOk() (*[]WaitlistPriorityType, bool)`

GetWaitlistPrioritiesOk returns a tuple with the WaitlistPriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistPriorities

`func (o *WaitlistPrioritiesCriteria) SetWaitlistPriorities(v []WaitlistPriorityType)`

SetWaitlistPriorities sets WaitlistPriorities field to given value.

### HasWaitlistPriorities

`func (o *WaitlistPrioritiesCriteria) HasWaitlistPriorities() bool`

HasWaitlistPriorities returns a boolean if a field has been set.

### GetWarnings

`func (o *WaitlistPrioritiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *WaitlistPrioritiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *WaitlistPrioritiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *WaitlistPrioritiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


