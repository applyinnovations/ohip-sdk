# ServiceRequestCodePrioritiesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ServiceRequestCodePriorities** | Pointer to [**[]ServiceRequestCodePriorityType**](ServiceRequestCodePriorityType.md) | List of Service Request Code Priorities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestCodePrioritiesDetails

`func NewServiceRequestCodePrioritiesDetails() *ServiceRequestCodePrioritiesDetails`

NewServiceRequestCodePrioritiesDetails instantiates a new ServiceRequestCodePrioritiesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodePrioritiesDetailsWithDefaults

`func NewServiceRequestCodePrioritiesDetailsWithDefaults() *ServiceRequestCodePrioritiesDetails`

NewServiceRequestCodePrioritiesDetailsWithDefaults instantiates a new ServiceRequestCodePrioritiesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ServiceRequestCodePrioritiesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestCodePrioritiesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestCodePrioritiesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestCodePrioritiesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesDetails) GetServiceRequestCodePriorities() []ServiceRequestCodePriorityType`

GetServiceRequestCodePriorities returns the ServiceRequestCodePriorities field if non-nil, zero value otherwise.

### GetServiceRequestCodePrioritiesOk

`func (o *ServiceRequestCodePrioritiesDetails) GetServiceRequestCodePrioritiesOk() (*[]ServiceRequestCodePriorityType, bool)`

GetServiceRequestCodePrioritiesOk returns a tuple with the ServiceRequestCodePriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesDetails) SetServiceRequestCodePriorities(v []ServiceRequestCodePriorityType)`

SetServiceRequestCodePriorities sets ServiceRequestCodePriorities field to given value.

### HasServiceRequestCodePriorities

`func (o *ServiceRequestCodePrioritiesDetails) HasServiceRequestCodePriorities() bool`

HasServiceRequestCodePriorities returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestCodePrioritiesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestCodePrioritiesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestCodePrioritiesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestCodePrioritiesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


