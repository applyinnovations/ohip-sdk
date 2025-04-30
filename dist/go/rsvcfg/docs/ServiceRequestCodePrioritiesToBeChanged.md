# ServiceRequestCodePrioritiesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServiceRequestCodePriorities** | Pointer to [**[]ServiceRequestCodePriorityType**](ServiceRequestCodePriorityType.md) | List of Service Request Code Priorities. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestCodePrioritiesToBeChanged

`func NewServiceRequestCodePrioritiesToBeChanged() *ServiceRequestCodePrioritiesToBeChanged`

NewServiceRequestCodePrioritiesToBeChanged instantiates a new ServiceRequestCodePrioritiesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodePrioritiesToBeChangedWithDefaults

`func NewServiceRequestCodePrioritiesToBeChangedWithDefaults() *ServiceRequestCodePrioritiesToBeChanged`

NewServiceRequestCodePrioritiesToBeChangedWithDefaults instantiates a new ServiceRequestCodePrioritiesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetServiceRequestCodePriorities() []ServiceRequestCodePriorityType`

GetServiceRequestCodePriorities returns the ServiceRequestCodePriorities field if non-nil, zero value otherwise.

### GetServiceRequestCodePrioritiesOk

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetServiceRequestCodePrioritiesOk() (*[]ServiceRequestCodePriorityType, bool)`

GetServiceRequestCodePrioritiesOk returns a tuple with the ServiceRequestCodePriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesToBeChanged) SetServiceRequestCodePriorities(v []ServiceRequestCodePriorityType)`

SetServiceRequestCodePriorities sets ServiceRequestCodePriorities field to given value.

### HasServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesToBeChanged) HasServiceRequestCodePriorities() bool`

HasServiceRequestCodePriorities returns a boolean if a field has been set.

### GetLinks

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestCodePrioritiesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestCodePrioritiesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestCodePrioritiesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestCodePrioritiesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestCodePrioritiesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


