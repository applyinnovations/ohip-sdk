# ServiceRequestCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServiceRequestCodes** | Pointer to [**[]ServiceRequestCodeType**](ServiceRequestCodeType.md) | Details for service request code type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestCodesCriteria

`func NewServiceRequestCodesCriteria() *ServiceRequestCodesCriteria`

NewServiceRequestCodesCriteria instantiates a new ServiceRequestCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestCodesCriteriaWithDefaults

`func NewServiceRequestCodesCriteriaWithDefaults() *ServiceRequestCodesCriteria`

NewServiceRequestCodesCriteriaWithDefaults instantiates a new ServiceRequestCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServiceRequestCodes

`func (o *ServiceRequestCodesCriteria) GetServiceRequestCodes() []ServiceRequestCodeType`

GetServiceRequestCodes returns the ServiceRequestCodes field if non-nil, zero value otherwise.

### GetServiceRequestCodesOk

`func (o *ServiceRequestCodesCriteria) GetServiceRequestCodesOk() (*[]ServiceRequestCodeType, bool)`

GetServiceRequestCodesOk returns a tuple with the ServiceRequestCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestCodes

`func (o *ServiceRequestCodesCriteria) SetServiceRequestCodes(v []ServiceRequestCodeType)`

SetServiceRequestCodes sets ServiceRequestCodes field to given value.

### HasServiceRequestCodes

`func (o *ServiceRequestCodesCriteria) HasServiceRequestCodes() bool`

HasServiceRequestCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ServiceRequestCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


