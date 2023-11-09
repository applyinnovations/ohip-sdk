# PutEntryPointsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntryPoints** | Pointer to [**EntryPointsType**](EntryPointsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutEntryPointsRequest

`func NewPutEntryPointsRequest() *PutEntryPointsRequest`

NewPutEntryPointsRequest instantiates a new PutEntryPointsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutEntryPointsRequestWithDefaults

`func NewPutEntryPointsRequestWithDefaults() *PutEntryPointsRequest`

NewPutEntryPointsRequestWithDefaults instantiates a new PutEntryPointsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntryPoints

`func (o *PutEntryPointsRequest) GetEntryPoints() EntryPointsType`

GetEntryPoints returns the EntryPoints field if non-nil, zero value otherwise.

### GetEntryPointsOk

`func (o *PutEntryPointsRequest) GetEntryPointsOk() (*EntryPointsType, bool)`

GetEntryPointsOk returns a tuple with the EntryPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntryPoints

`func (o *PutEntryPointsRequest) SetEntryPoints(v EntryPointsType)`

SetEntryPoints sets EntryPoints field to given value.

### HasEntryPoints

`func (o *PutEntryPointsRequest) HasEntryPoints() bool`

HasEntryPoints returns a boolean if a field has been set.

### GetLinks

`func (o *PutEntryPointsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutEntryPointsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutEntryPointsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutEntryPointsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutEntryPointsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutEntryPointsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutEntryPointsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutEntryPointsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


