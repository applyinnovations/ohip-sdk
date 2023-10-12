# PostTransportationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransportationList** | Pointer to [**[]TransportationType**](TransportationType.md) | Collection of hotel level transportation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTransportationRequest

`func NewPostTransportationRequest() *PostTransportationRequest`

NewPostTransportationRequest instantiates a new PostTransportationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTransportationRequestWithDefaults

`func NewPostTransportationRequestWithDefaults() *PostTransportationRequest`

NewPostTransportationRequestWithDefaults instantiates a new PostTransportationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransportationList

`func (o *PostTransportationRequest) GetTransportationList() []TransportationType`

GetTransportationList returns the TransportationList field if non-nil, zero value otherwise.

### GetTransportationListOk

`func (o *PostTransportationRequest) GetTransportationListOk() (*[]TransportationType, bool)`

GetTransportationListOk returns a tuple with the TransportationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationList

`func (o *PostTransportationRequest) SetTransportationList(v []TransportationType)`

SetTransportationList sets TransportationList field to given value.

### HasTransportationList

`func (o *PostTransportationRequest) HasTransportationList() bool`

HasTransportationList returns a boolean if a field has been set.

### GetLinks

`func (o *PostTransportationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTransportationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTransportationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTransportationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTransportationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTransportationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTransportationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTransportationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


