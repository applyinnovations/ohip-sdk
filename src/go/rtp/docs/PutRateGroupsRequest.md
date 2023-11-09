# PutRateGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RateGroups** | Pointer to [**RateGroupsType**](RateGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRateGroupsRequest

`func NewPutRateGroupsRequest() *PutRateGroupsRequest`

NewPutRateGroupsRequest instantiates a new PutRateGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRateGroupsRequestWithDefaults

`func NewPutRateGroupsRequestWithDefaults() *PutRateGroupsRequest`

NewPutRateGroupsRequestWithDefaults instantiates a new PutRateGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRateGroupsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRateGroupsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRateGroupsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRateGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateGroups

`func (o *PutRateGroupsRequest) GetRateGroups() RateGroupsType`

GetRateGroups returns the RateGroups field if non-nil, zero value otherwise.

### GetRateGroupsOk

`func (o *PutRateGroupsRequest) GetRateGroupsOk() (*RateGroupsType, bool)`

GetRateGroupsOk returns a tuple with the RateGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateGroups

`func (o *PutRateGroupsRequest) SetRateGroups(v RateGroupsType)`

SetRateGroups sets RateGroups field to given value.

### HasRateGroups

`func (o *PutRateGroupsRequest) HasRateGroups() bool`

HasRateGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRateGroupsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRateGroupsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRateGroupsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRateGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


