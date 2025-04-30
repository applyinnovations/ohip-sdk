# PolicyScheduleToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicySchedule** | Pointer to [**PolicyScheduleType**](PolicyScheduleType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPolicyScheduleToBeChanged

`func NewPolicyScheduleToBeChanged() *PolicyScheduleToBeChanged`

NewPolicyScheduleToBeChanged instantiates a new PolicyScheduleToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyScheduleToBeChangedWithDefaults

`func NewPolicyScheduleToBeChangedWithDefaults() *PolicyScheduleToBeChanged`

NewPolicyScheduleToBeChangedWithDefaults instantiates a new PolicyScheduleToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicySchedule

`func (o *PolicyScheduleToBeChanged) GetPolicySchedule() PolicyScheduleType`

GetPolicySchedule returns the PolicySchedule field if non-nil, zero value otherwise.

### GetPolicyScheduleOk

`func (o *PolicyScheduleToBeChanged) GetPolicyScheduleOk() (*PolicyScheduleType, bool)`

GetPolicyScheduleOk returns a tuple with the PolicySchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicySchedule

`func (o *PolicyScheduleToBeChanged) SetPolicySchedule(v PolicyScheduleType)`

SetPolicySchedule sets PolicySchedule field to given value.

### HasPolicySchedule

`func (o *PolicyScheduleToBeChanged) HasPolicySchedule() bool`

HasPolicySchedule returns a boolean if a field has been set.

### GetLinks

`func (o *PolicyScheduleToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PolicyScheduleToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PolicyScheduleToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PolicyScheduleToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PolicyScheduleToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PolicyScheduleToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PolicyScheduleToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PolicyScheduleToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


