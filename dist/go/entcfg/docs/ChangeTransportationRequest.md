# ChangeTransportationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransportationList** | Pointer to [**[]TransportationType**](TransportationType.md) | Collection of hotel level transportation. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTransportationRequest

`func NewChangeTransportationRequest() *ChangeTransportationRequest`

NewChangeTransportationRequest instantiates a new ChangeTransportationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTransportationRequestWithDefaults

`func NewChangeTransportationRequestWithDefaults() *ChangeTransportationRequest`

NewChangeTransportationRequestWithDefaults instantiates a new ChangeTransportationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTransportationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTransportationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTransportationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTransportationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransportationList

`func (o *ChangeTransportationRequest) GetTransportationList() []TransportationType`

GetTransportationList returns the TransportationList field if non-nil, zero value otherwise.

### GetTransportationListOk

`func (o *ChangeTransportationRequest) GetTransportationListOk() (*[]TransportationType, bool)`

GetTransportationListOk returns a tuple with the TransportationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationList

`func (o *ChangeTransportationRequest) SetTransportationList(v []TransportationType)`

SetTransportationList sets TransportationList field to given value.

### HasTransportationList

`func (o *ChangeTransportationRequest) HasTransportationList() bool`

HasTransportationList returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTransportationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTransportationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTransportationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTransportationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


