# ChangeCommunicationTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationType** | Pointer to [**CommunicationTypeType**](CommunicationTypeType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeCommunicationTypeRequest

`func NewChangeCommunicationTypeRequest() *ChangeCommunicationTypeRequest`

NewChangeCommunicationTypeRequest instantiates a new ChangeCommunicationTypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCommunicationTypeRequestWithDefaults

`func NewChangeCommunicationTypeRequestWithDefaults() *ChangeCommunicationTypeRequest`

NewChangeCommunicationTypeRequestWithDefaults instantiates a new ChangeCommunicationTypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationType

`func (o *ChangeCommunicationTypeRequest) GetCommunicationType() CommunicationTypeType`

GetCommunicationType returns the CommunicationType field if non-nil, zero value otherwise.

### GetCommunicationTypeOk

`func (o *ChangeCommunicationTypeRequest) GetCommunicationTypeOk() (*CommunicationTypeType, bool)`

GetCommunicationTypeOk returns a tuple with the CommunicationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationType

`func (o *ChangeCommunicationTypeRequest) SetCommunicationType(v CommunicationTypeType)`

SetCommunicationType sets CommunicationType field to given value.

### HasCommunicationType

`func (o *ChangeCommunicationTypeRequest) HasCommunicationType() bool`

HasCommunicationType returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCommunicationTypeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCommunicationTypeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCommunicationTypeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCommunicationTypeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCommunicationTypeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCommunicationTypeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCommunicationTypeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCommunicationTypeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


