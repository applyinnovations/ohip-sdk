# ServiceRequestCodePrioritiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ServiceRequestCodePriorities** | Pointer to [**[]ServiceRequestCodePriorityType**](ServiceRequestCodePriorityType.md) | List of Service Request Code Priorities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestCodePrioritiesCriteria

`func NewServiceRequestCodePrioritiesCriteria() *ServiceRequestCodePrioritiesCriteria`

NewServiceRequestCodePrioritiesCriteria instantiates a new ServiceRequestCodePrioritiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodePrioritiesCriteriaWithDefaults

`func NewServiceRequestCodePrioritiesCriteriaWithDefaults() *ServiceRequestCodePrioritiesCriteria`

NewServiceRequestCodePrioritiesCriteriaWithDefaults instantiates a new ServiceRequestCodePrioritiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ServiceRequestCodePrioritiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestCodePrioritiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestCodePrioritiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestCodePrioritiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesCriteria) GetServiceRequestCodePriorities() []ServiceRequestCodePriorityType`

GetServiceRequestCodePriorities returns the ServiceRequestCodePriorities field if non-nil, zero value otherwise.

### GetServiceRequestCodePrioritiesOk

`func (o *ServiceRequestCodePrioritiesCriteria) GetServiceRequestCodePrioritiesOk() (*[]ServiceRequestCodePriorityType, bool)`

GetServiceRequestCodePrioritiesOk returns a tuple with the ServiceRequestCodePriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesCriteria) SetServiceRequestCodePriorities(v []ServiceRequestCodePriorityType)`

SetServiceRequestCodePriorities sets ServiceRequestCodePriorities field to given value.

### HasServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesCriteria) HasServiceRequestCodePriorities() bool`

HasServiceRequestCodePriorities returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestCodePrioritiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestCodePrioritiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestCodePrioritiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestCodePrioritiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


