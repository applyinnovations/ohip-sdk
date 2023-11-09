# PutTransactionGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TransactionGroups** | Pointer to [**HotelTransactionGroupsType**](HotelTransactionGroupsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutTransactionGroupsRequest

`func NewPutTransactionGroupsRequest() *PutTransactionGroupsRequest`

NewPutTransactionGroupsRequest instantiates a new PutTransactionGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTransactionGroupsRequestWithDefaults

`func NewPutTransactionGroupsRequestWithDefaults() *PutTransactionGroupsRequest`

NewPutTransactionGroupsRequestWithDefaults instantiates a new PutTransactionGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTransactionGroupsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTransactionGroupsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTransactionGroupsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTransactionGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGroups

`func (o *PutTransactionGroupsRequest) GetTransactionGroups() HotelTransactionGroupsType`

GetTransactionGroups returns the TransactionGroups field if non-nil, zero value otherwise.

### GetTransactionGroupsOk

`func (o *PutTransactionGroupsRequest) GetTransactionGroupsOk() (*HotelTransactionGroupsType, bool)`

GetTransactionGroupsOk returns a tuple with the TransactionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroups

`func (o *PutTransactionGroupsRequest) SetTransactionGroups(v HotelTransactionGroupsType)`

SetTransactionGroups sets TransactionGroups field to given value.

### HasTransactionGroups

`func (o *PutTransactionGroupsRequest) HasTransactionGroups() bool`

HasTransactionGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTransactionGroupsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTransactionGroupsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTransactionGroupsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTransactionGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


