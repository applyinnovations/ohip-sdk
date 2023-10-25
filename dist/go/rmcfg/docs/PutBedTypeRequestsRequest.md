# PutBedTypeRequestsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTypeRequests** | Pointer to [**[]BedTypeRequestType**](BedTypeRequestType.md) | List of Bed Type Requests. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutBedTypeRequestsRequest

`func NewPutBedTypeRequestsRequest() *PutBedTypeRequestsRequest`

NewPutBedTypeRequestsRequest instantiates a new PutBedTypeRequestsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutBedTypeRequestsRequestWithDefaults

`func NewPutBedTypeRequestsRequestWithDefaults() *PutBedTypeRequestsRequest`

NewPutBedTypeRequestsRequestWithDefaults instantiates a new PutBedTypeRequestsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTypeRequests

`func (o *PutBedTypeRequestsRequest) GetBedTypeRequests() []BedTypeRequestType`

GetBedTypeRequests returns the BedTypeRequests field if non-nil, zero value otherwise.

### GetBedTypeRequestsOk

`func (o *PutBedTypeRequestsRequest) GetBedTypeRequestsOk() (*[]BedTypeRequestType, bool)`

GetBedTypeRequestsOk returns a tuple with the BedTypeRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeRequests

`func (o *PutBedTypeRequestsRequest) SetBedTypeRequests(v []BedTypeRequestType)`

SetBedTypeRequests sets BedTypeRequests field to given value.

### HasBedTypeRequests

`func (o *PutBedTypeRequestsRequest) HasBedTypeRequests() bool`

HasBedTypeRequests returns a boolean if a field has been set.

### GetLinks

`func (o *PutBedTypeRequestsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutBedTypeRequestsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutBedTypeRequestsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutBedTypeRequestsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutBedTypeRequestsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutBedTypeRequestsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutBedTypeRequestsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutBedTypeRequestsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


