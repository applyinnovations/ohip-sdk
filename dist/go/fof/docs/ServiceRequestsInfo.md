# ServiceRequestsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ServiceRequestsDetails** | Pointer to [**[]ServiceRequest**](ServiceRequest.md) | Service request. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewServiceRequestsInfo

`func NewServiceRequestsInfo() *ServiceRequestsInfo`

NewServiceRequestsInfo instantiates a new ServiceRequestsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceRequestsInfoWithDefaults

`func NewServiceRequestsInfoWithDefaults() *ServiceRequestsInfo`

NewServiceRequestsInfoWithDefaults instantiates a new ServiceRequestsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ServiceRequestsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceRequestsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceRequestsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceRequestsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetServiceRequestsDetails

`func (o *ServiceRequestsInfo) GetServiceRequestsDetails() []ServiceRequest`

GetServiceRequestsDetails returns the ServiceRequestsDetails field if non-nil, zero value otherwise.

### GetServiceRequestsDetailsOk

`func (o *ServiceRequestsInfo) GetServiceRequestsDetailsOk() (*[]ServiceRequest, bool)`

GetServiceRequestsDetailsOk returns a tuple with the ServiceRequestsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRequestsDetails

`func (o *ServiceRequestsInfo) SetServiceRequestsDetails(v []ServiceRequest)`

SetServiceRequestsDetails sets ServiceRequestsDetails field to given value.

### HasServiceRequestsDetails

`func (o *ServiceRequestsInfo) HasServiceRequestsDetails() bool`

HasServiceRequestsDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceRequestsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceRequestsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceRequestsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceRequestsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


