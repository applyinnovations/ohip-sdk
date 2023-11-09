# PutAccountPrioritiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountPriorities** | Pointer to [**AccountPrioritiesType**](AccountPrioritiesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutAccountPrioritiesRequest

`func NewPutAccountPrioritiesRequest() *PutAccountPrioritiesRequest`

NewPutAccountPrioritiesRequest instantiates a new PutAccountPrioritiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAccountPrioritiesRequestWithDefaults

`func NewPutAccountPrioritiesRequestWithDefaults() *PutAccountPrioritiesRequest`

NewPutAccountPrioritiesRequestWithDefaults instantiates a new PutAccountPrioritiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountPriorities

`func (o *PutAccountPrioritiesRequest) GetAccountPriorities() AccountPrioritiesType`

GetAccountPriorities returns the AccountPriorities field if non-nil, zero value otherwise.

### GetAccountPrioritiesOk

`func (o *PutAccountPrioritiesRequest) GetAccountPrioritiesOk() (*AccountPrioritiesType, bool)`

GetAccountPrioritiesOk returns a tuple with the AccountPriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountPriorities

`func (o *PutAccountPrioritiesRequest) SetAccountPriorities(v AccountPrioritiesType)`

SetAccountPriorities sets AccountPriorities field to given value.

### HasAccountPriorities

`func (o *PutAccountPrioritiesRequest) HasAccountPriorities() bool`

HasAccountPriorities returns a boolean if a field has been set.

### GetLinks

`func (o *PutAccountPrioritiesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAccountPrioritiesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAccountPrioritiesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAccountPrioritiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAccountPrioritiesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAccountPrioritiesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAccountPrioritiesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAccountPrioritiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


